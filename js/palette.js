// Palette: paper (light), night (dark), duotone. The <head> snippet picks the first
// value so there is no flash; this file adds the buttons, keys and OS-follow behaviour.
(() => {
  const KEY = 'pikujs-palette';
  const ORDER = ['paper', 'duotone', 'night'];
  const root = document.documentElement;
  const btns = [...document.querySelectorAll('.switch button')];
  const dark = matchMedia('(prefers-color-scheme: dark)');
  const osDefault = () => (dark.matches ? 'night' : 'paper');

  const paint = (p) => {
    root.dataset.palette = p;
    btns.forEach(b => b.setAttribute('aria-pressed', String(b.dataset.p === p)));
  };
  const choose = (p) => { paint(p); try { localStorage.setItem(KEY, p); } catch {} };

  paint(root.dataset.palette || localStorage.getItem(KEY) || osDefault());

  btns.forEach(b => b.addEventListener('click', () => choose(b.dataset.p)));
  addEventListener('keydown', e => {
    const i = ['1', '2', '3'].indexOf(e.key);
    const tag = document.activeElement?.tagName;
    if (i > -1 && tag !== 'INPUT' && tag !== 'TEXTAREA') choose(ORDER[i]);
  });
  dark.addEventListener('change', () => {
    if (!localStorage.getItem(KEY)) paint(osDefault());
  });
})();
