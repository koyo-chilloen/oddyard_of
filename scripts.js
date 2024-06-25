function playMusic() {
    const audio = document.getElementById('main-music');
    audio.play();
}



//기본 스크롤 제거
window.addEventListener("wheel", function(e){
	e.preventDefault();
},{passive : false});

const wrap = document.getElementsByClassName('wrap')[0]; // 보일 영역
const section = document.getElementsByClassName('section');
let y = 0; // 영역 포지션 초기값
var body = document.body,
html = document.documentElement;
var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );

let isScrolling = false;

function enableScroll() {
    window.removeEventListener("wheel", preventScroll, {passive: false});
}

function scrollDown() {
    wrap.style.transform = `translateY(${-100}vh)`;
    setTimeout(() => {
        isScrolling = false;
    }, 1500); // Adjust timeout to match the CSS transition duration
}

function scrollPage() {
    isScrolling = true;
    wrap.style.scrollDown = `translateY(${-y * 1}vh)`;
    setTimeout(() => {
        isScrolling = false;
    }, 1); // Adjust timeout to match the CSS transition duration
}

window.addEventListener('wheel', (e) => {
    if (isScrolling) return;

    if (e.deltaY > 0) {
        y++;
    } else if (e.deltaY < 0) {
        y--;
    }

    if (y < 0) {
        y = 0;
    } else if (y > height) {
        y = height;
    }

    scrollPage();
}, {passive: false});


