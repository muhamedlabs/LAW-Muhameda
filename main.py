import os
from flask import Flask, send_from_directory, abort, request, jsonify, redirect
from werkzeug.exceptions import HTTPException
from werkzeug.security import safe_join

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

app = Flask(__name__, template_folder=BASE_DIR, static_folder=None)

BLOCKED_EXT = {".py", ".pyc", ".db", ".sqlite", ".sqlite3", ".env", ".log", ".ini", ".cfg", ".toml", ".yml", ".yaml"}
BLOCKED_DIRS = {"__pycache__", "venv", ".venv", "node_modules", "gq_data"}
BLOCKED_FILES = {""}


def is_blocked(filename):
    parts = filename.replace("\\", "/").lower().split("/")
    if parts[-1] in BLOCKED_FILES:
        return True
    if any(p.startswith(".") or p in BLOCKED_DIRS for p in parts):
        return True
    return os.path.splitext(parts[-1])[1] in BLOCKED_EXT


@app.route("/")
def home():
    return send_from_directory(BASE_DIR, "home.html")


def resolve_file(filename):
    clean = filename.strip("/")
    if not clean:
        return None

    has_ext = bool(os.path.splitext(clean)[1])

    if has_ext:
        candidates = [clean, clean + ".html", clean + "/index.html"]
    else:
        candidates = [clean + ".html", clean + "/index.html", clean]

    for rel in candidates:
        if is_blocked(rel):
            continue
        full = safe_join(BASE_DIR, rel)
        if full and os.path.isfile(full):
            return rel
    return None


def find_from_root(filename):
    parts = filename.strip("/").split("/")
    for i in range(1, len(parts)):
        rel = "/".join(parts[i:])
        if is_blocked(rel):
            continue
        full = safe_join(BASE_DIR, rel)
        if full and os.path.isfile(full):
            return rel
    return None


@app.route("/<path:filename>")
def serve_file(filename):
    if is_blocked(filename):
        return abort(404)

    full = safe_join(BASE_DIR, filename.strip("/"))
    if full and os.path.isdir(full) and not request.path.endswith("/"):
        if resolve_file(filename.strip("/") + "/index.html"):
            return redirect(request.path + "/", code=301)

    rel = resolve_file(filename)
    if rel:
        return send_from_directory(BASE_DIR, rel)

    ext = os.path.splitext(filename)[1].lower()
    if ext and ext != ".html":
        rel = find_from_root(filename)
        if rel:
            return send_from_directory(BASE_DIR, rel)

    return abort(404)


def wants_html():
    return "text/html" in request.headers.get("Accept", "")


PREVIEW_BOTS = ("discordbot", "twitterbot", "telegrambot", "slackbot",
                "facebookexternalhit", "whatsapp", "linkedinbot")


def is_preview_bot():
    ua = request.headers.get("User-Agent", "").lower()
    return any(b in ua for b in PREVIEW_BOTS)


def render_404():
    path = os.path.join(BASE_DIR, "404.html")
    if os.path.isfile(path):
        resp = send_from_directory(BASE_DIR, "404.html")
    else:
        resp = app.response_class("404 Not Found", mimetype="text/plain")
    resp.status_code = 200 if is_preview_bot() else 404
    resp.headers["Cache-Control"] = "no-store"
    return resp


@app.errorhandler(HTTPException)
def handle_http_error(e):
    if is_preview_bot():
        return render_404()
    if request.path.startswith("/api/") and not wants_html():
        return jsonify({"error": e.name.lower().replace(" ", "_")}), e.code
    return render_404()


def run_flask():
    print("[FLASK] Starting Flask server on port 5008")
    print(f"[FLASK] Serving files from: {BASE_DIR}")
    app.run(host="0.0.0.0", port=5008, debug=os.environ.get("FLASK_DEBUG") == "1")


if __name__ == "__main__":
    print("[APP] Starting application...")
    run_flask()
