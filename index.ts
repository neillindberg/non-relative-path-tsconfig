/* -- relative works - */
import hello from './src/foo';
import world from './src/bar';
/* -- would be nice -- */
// import hello from 'src/foo';
// import world from 'src/bar';
/* ---- the goal ----- */
// import hello from 'foo';
// import world from 'bar';

console.log(hello + ' ' + world + '!!!');