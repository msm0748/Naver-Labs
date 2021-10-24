// const nav = document.getElementById('nav');
// const rectTop = nav.getBoundingClientRect().top;

// window.addEventListener('scroll', function() {
//   if (window.pageYOffset > rectTop) {
//     nav.style.position = 'fixed';
//     nav.style.top = 0;
//   } else {
//     nav.style.position = 'static';
//     nav.style.top = '';
//   }
// });




const nav = document.getElementById('nav');
const tmp = nav.cloneNode(true);
tmp.style.visibility = 'hidden';
const rectTop = nav.getBoundingClientRect().top;

window.addEventListener('scroll', function() {
  if (window.pageYOffset > rectTop) {
    nav.parentNode.appendChild(tmp);
    nav.style.position = 'fixed';
    nav.style.top = 0;
  } else {
    nav.parentNode.removeChild(tmp);
    nav.style.position = 'static';
    nav.style.top = '';
  }
});