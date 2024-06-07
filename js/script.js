const navLinks = document.querySelectorAll('.nav-link');

// Criando as rotas
const routes = {
  "/": "/pages/home.html",
  "/universe": "/pages/universe.html",
  "/exploration": "/pages/exploration.html",
  404: "/pages/404.html",
};

// Adicionando o evento click em todos os nav-bars
navLinks.forEach((item => {
  item.addEventListener("click", () =>{
    route();
    changeBackground();
  })
}))

// Criando a função rotas
function route(event){
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handle();
}

function handle(){
  const {  pathname  } = window.location;
  const currentRoute =routes[pathname] || routes[404];
  fetch(currentRoute)
  .then(response => response.text())
  .then(html => {
    document.querySelector(".app").innerHTML = html;
  })
}

function changeBackground() {
  body = document.querySelector("body");
  currentPage = window.location;
}

handle()

window.onpopstate = () => handle()