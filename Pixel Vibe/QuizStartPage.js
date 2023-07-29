const startBtn = document.querySelector('.start-btn');
const popup = document.querySelector('.popup');
const ExitBtn = document.querySelector('.exit-btn');

startBtn.onclick = () => {
    popup.classList.add('active');
}

ExitBtn.onclick = () => {
    popup.classList.remove('active');
}
