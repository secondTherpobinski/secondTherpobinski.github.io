// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x')
  navbar.classList.toggle('active')
}

// scroll selection
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    };
  });
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.screenY > 100);

  // remove toggle icon and navbar when click  navbar link (scroll)
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

// formulario myForm
const form = document.querySelector('#myForm');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const mpsi = parseFloat(document.querySelector('#mpsi').value);
  const kc = parseFloat(document.querySelector('#kc').value);
  const ff = parseFloat(document.querySelector('#ff').value);
  document.querySelector('#numerador').innerHTML = `(${mpsi} - 200) x ${kc}`;
  document.querySelector('#denominador').innerHTML = ff;
  const numeradorRes = parseFloat(((mpsi - 200) * kc).toFixed('4'));
  document.querySelector('#numeradorRes').innerHTML = parseInt(numeradorRes);
  document.querySelector('#denominadorRes').innerHTML = ff;
  const resulM = (numeradorRes / ff).toFixed(2);
  const resulH = {
    horas: parseInt(resulM / 60),
    minutos: parseInt(resulM % 60),
  };
  document.querySelector('#pResultado').innerHTML =
    `<b style="color: #660000;"> Dfm = </b>${parseInt(resulM)} min; o ${resulH.horas} h ${resulH.minutos} min`;
})

function limpiarValues () {
  document.querySelector('#mpsi').value = ''
  document.querySelector('#kc').value = ''
  document.querySelector('#ff').value = ''
  document.querySelector('#numerador').innerHTML = '(0 - 200) x 0';
  document.querySelector('#denominador').innerHTML = 0;
  document.querySelector('#numeradorRes').innerHTML = 0;
  document.querySelector('#denominadorRes').innerHTML = 0;
  document.querySelector('#pResultado').innerHTML =
  `<b style="color: #660000;"> Dfm = </b>0 min; o 0 h`;
}