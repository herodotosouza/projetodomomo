let movies = [
    {
        name: "Olá leticia tudo bem? Aqui e a jasmine tenho uma mensagem pra você!",
        des:
            "Herodoto procurou-me e implorou que eu enviasse esta mensagem para você, um rapaz chato que me enviou mensagens o dia todo. No entanto, gostaria de dizer que, assim como eu, você é uma princesa. Como ele mencionou, você é a única princesa em quem ele realmente acredita ser uma princesa. Você e uma de nós! Parabéns pelo seu dia. Te amamos imensamente.'",
        image: "images/slider 2.PNG"
    },
    {
        name: "Oi, Leti! Tudo bem? Como você está, princesa? Aqui é a Tiana. Tenho uma coisa para dizer para você, lá vai",
        des:
            "Nossa, ele ainda está mandando mensagens. Que rapaz insistente que você tem, Leticia. Bem, vamos lá. Fiquei sabendo que hoje é seu aniversário. Quero que, neste dia especial, você se sinta a pessoa mais feliz do mundo. Aniversários são uma data importante e, no seu dia, não pense diferente. Pelo que fiquei sabendo, você é uma pessoa muito querida e amada, uma mulher incrível e linda! Aproveite o seu dia, pois você merece muito. Te amamos, princesa, e não se esqueça: 'Você está mais linda do que as flores da primavera', uma frase minha para você! ",
        image: "images/slider 1.PNG"
    },
    {
        name: "Oi amiga, aqui quem está falando é a Mulan. Tudo bem com você?",
        des:
            "Amiga, esse seu namorado é insistente, estava o dia todo mandando cartas para mim. Como aqui não tem sinal, achei que ia me livrar, né? Mas não deu certo, kkkkkkkkkkkk. Bem, fiquei sabendo que hoje é seu dia, né? Meu Deus, minha princesa favorita está ficando mais velha. O Herodoto me falou o quanto você é especial para ele, contou tudo que é louco de amor por você. Certamente você achou seu príncipe. Ele não parou de falar de você, disse que é a pessoa mais linda, inteligente, brava, kkkkkkk. Quem não é, né, amiga? Só quero que você aproveite o seu dia, pois você merece muito. Te amamos, viu!",
        image: "images/slider 3.PNG"
    },
    
];

const carousel = document.querySelector(".carousel");
let sliders = [];

let slideIndex = 0;
let isPaused = false;

const createSlide = () => {
    if (slideIndex >= movies.length) {
        slideIndex = 0;
    }

    //creating DOM element
    let slide = document.createElement("div");
    let imgElement = document.createElement("img");
    let content = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");

    //attaching all the elements
    imgElement.appendChild(document.createTextNode(""));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    //setting up image
    imgElement.src = movies[slideIndex].image;
    slideIndex++;

    //setting elements classname
    slide.className = "slider";
    content.className = "slide-content";
    h1.className = "movie-title";
    p.className = "movie-des";

    sliders.push(slide);

    //adding sliding effect
    if (sliders.length) {
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 3)}% - ${
            30 * (sliders.length - 3)
        }px)`;
    }
};

for (let i = 0; i < 3; i++) {
    createSlide();
}

let intervalId = setInterval(() => {
    if (!isPaused) {
        createSlide();
    }
}, 2000);

// Pause o carrossel
document.getElementById("pauseButton").addEventListener("click", () => {
    isPaused = true;
});

// Continue o carrossel
document.getElementById("resumeButton").addEventListener("click", () => {
    isPaused = false;
});

//video cards

const videoCards = [...document.querySelectorAll(".video-card")];

videoCards.forEach((item) => {
    item.addEventListener("mouseover", () => {
        let video = item.children[1];
        video.play();
    });

    item.addEventListener("mouseleave", () => {
        let video = item.children[1];
        video.pause();
    });
});

//card sliders

let cardContainers = [...document.querySelectorAll(".card-container")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtns[i].addEventListener("click", () => {
        item.scrollLeft += containerWidth - 200;
    });

    preBtns[i].addEventListener("click", () => {
        item.scrollLeft -= containerWidth + 200;
    });
});
