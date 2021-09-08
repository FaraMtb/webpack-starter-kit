import '../src/css/main.scss';
import main from './js/main';
if (process.env.NODE_ENV === 'development') {
    require('../src/index.ts');
}
const _appContainer = document.getElementById("app");
const p = document.createElement("p");
main();
p.textContent = "Happy Coding";
_appContainer?.appendChild(p);
console.log('webpack comprehensive starterkit');