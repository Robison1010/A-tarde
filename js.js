const menu = document.querySelector(".menu-lateral");
const openBtn = document.querySelector(".menu-button");
const closeBtn = document.querySelector(".fechar-menu-lateral");
const openBtnMobile = document.querySelector(".menu-button-mobile");
const overlay = document.querySelector(".menu-overlay");

openBtn.addEventListener("click", () => {
    menu.classList.add("active");
    overlay.classList.add("active");
});

openBtnMobile.addEventListener("click", () => {
    menu.classList.add("active");
    overlay.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    menu.classList.remove("active");
    overlay.classList.remove("active");
});


document.addEventListener("click", (event) => {
    const clickedInsideMenu = menu.contains(event.target);
    const clickedButton = openBtn.contains(event.target);
    const clickedMobileButton = openBtnMobile.contains(event.target);

    if (!clickedInsideMenu && !clickedButton && !clickedMobileButton) {
        menu.classList.remove("active");
        overlay.classList.remove("active");
    }
});






const botaoBuscar = document.querySelector('.botao-buscar');
const iconeBusca = document.querySelector('.icone-busca');
const input = document.querySelector('.botao-buscar input');
const oucaRapido = document.querySelector('.container-ouca-rapido');

iconeBusca.addEventListener('click', function (e) {
    e.stopPropagation();

    const ativo = botaoBuscar.classList.toggle('active');

    if (ativo) {
        oucaRapido.classList.add('hidden');
        input.focus();
    } else {
        oucaRapido.classList.remove('hidden');
    }
});


document.addEventListener('click', function (e) {
    if (!botaoBuscar.contains(e.target)) {
        botaoBuscar.classList.remove('active');
        oucaRapido.classList.remove('hidden');
    }
});






const headerMobile = document.querySelector('.topo-header-mobile');
const lupaMobile = document.querySelector('.icone-busca-mobile');
const inputMobile = document.querySelector('.input-mobile-wrapper input');


lupaMobile.addEventListener('click', function (e) {
    e.stopPropagation();

    const ativo = headerMobile.classList.toggle('active');

    if (ativo) {
        inputMobile.focus();
    }
});


document.addEventListener('click', function (e) {
    if (!headerMobile.contains(e.target)) {
        headerMobile.classList.remove('active');
    }
});




/*Splide da Section Blogs*/

const splideBlogs = new Splide('.splide-blogs', {
    autoWidth: true,
    gap: '24px',

    arrows: false,
    pagination: false,

    drag: true,
    snap: true,
});

splideBlogs.mount();

const botaoAnteriorBlogs = document.querySelector('.blogs-buttom-left');
const botaoProximoBlogs = document.querySelector('.blogs-buttom-right');

botaoAnteriorBlogs.addEventListener('click', () => {
    splideBlogs.go('-1');
});

botaoProximoBlogs.addEventListener('click', () => {
    splideBlogs.go('+1');
});




/*Splide da section Destaque*/
new Splide('.splide-atr-destaque-mobile', {
    autoWidth: true,
    gap: '14px',

    arrows: false,
    pagination: false,

    drag: true,
    snap: true,
}).mount();



/*Section Eleições*/

new Splide('.splide-eleicoes', {
    autoWidth: true,
    gap: '14px',

    arrows: false,
    pagination: false,

    drag: true,
    snap: true,
}).mount();




/*Splide da section Mais Lidas*/

const splideMaisLidas = new Splide('.splide-mais-lidas-mobile', {
    autoWidth: true,
    gap: '14px',

    arrows: false,
    pagination: false,

    drag: true,
    snap: true,
});

splideMaisLidas.mount();

const botaoAnterior = document.querySelector('.buttom-left-mais-lidas');
const botaoProximo = document.querySelector('.buttom-right-mais-lidas');

botaoAnterior.addEventListener('click', () => {
    splideMaisLidas.go('-1');
});

botaoProximo.addEventListener('click', () => {
    splideMaisLidas.go('+1');
});





/*Section cineinsite*/

const splideCineinsite = new Splide('.splide-cineinsite', {
    autoWidth: true,
    gap: '25px',

    arrows: false,
    pagination: false,

    drag: true,
    snap: true,
});

splideCineinsite.mount();

document.querySelector('.btn-left-cineinsite').addEventListener('click', () => {
    splideCineinsite.go('-2');
});

document.querySelector('.btn-right-cineinsite').addEventListener('click', () => {
    splideCineinsite.go('+2');
});





/*Section A tarde Play*/

const splideAtrPlay = new Splide('.splide-atr-play', {
    autoWidth: true,
    gap: '20px',

    arrows: false,
    pagination: false,

    drag: true,
    snap: true,
});

splideAtrPlay.mount();

document.querySelector('.btn-atr-left').addEventListener('click', () => {
    splideAtrPlay.go('-1');
});

document.querySelector('.btn-atr-right').addEventListener('click', () => {
    splideAtrPlay.go('+1');
});





/*Section municípios*/

new Splide('.splide-municipios', {
    autoWidth: true,
    gap: '14px',

    arrows: false,
    pagination: false,

    drag: true,
    snap: true,
}).mount();




/*Section Fenagro*/

const splideFenagro = new Splide('.splide-fenagro', {
    
    perPage: 3,
    perMove: 3,

    gap: '25px',

    arrows: false,
    pagination: true,

    drag: true,
    snap: true,

    breakpoints: {
        768: {
            autoWidth: true,
            perPage: undefined,
        }
    }
});

splideFenagro.mount();

document.querySelector('.btn-left-fenagro').addEventListener('click', () => {
    splideFenagro.go('-3');
});

document.querySelector('.btn-right-fenagro').addEventListener('click', () => {
    splideFenagro.go('+3');
});



/*Section Web Stories*/

const splideWebStories = new Splide('.splide-web-storie', {
    autoWidth: true,
    gap: '14px',

    arrows: false,
    pagination: false,

    drag: true,
    snap: true,
});

splideWebStories.mount();

document.querySelector('.btn-left-web').addEventListener('click', () => {
    splideWebStories.go('-1');
});

document.querySelector('.btn-right-web').addEventListener('click', () => {
    splideWebStories.go('+1');
});