(() => {
  const stop = e => { e.preventDefault(); };
  ['contextmenu', 'copy', 'cut', 'selectstart', 'dragstart'].forEach(t => document.addEventListener(t, stop));
  document.addEventListener('keydown', e => {
    const k = (e.key || '').toLowerCase();
    const mod = e.ctrlKey || e.metaKey;
    if (
      (mod && ['c', 'x', 'a', 'u', 's', 'p'].includes(k)) ||
      (mod && e.shiftKey && ['i', 'j', 'c', 'k'].includes(k)) ||
      (e.metaKey && e.altKey && ['i', 'j', 'c', 'u'].includes(k)) ||
      k === 'f12' || k === 'printscreen'
    ) { e.preventDefault(); e.stopPropagation(); }
  }, true);
  document.addEventListener('keyup', e => {
    if (e.key === 'PrintScreen') { try { navigator.clipboard.writeText(' '); } catch (_) {} }
  });
})();
