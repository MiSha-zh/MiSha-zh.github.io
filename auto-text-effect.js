const textEl = document.getElementById('text');
const text = '你知道退沙还林吗？';
let idx = 1;
const speed = 200; // 固定速度

writeText();

function writeText() {
    textEl.innerText = text.slice(0, idx);

    idx++;

    if (idx <= text.length) {
        setTimeout(writeText, speed);
    }
}

