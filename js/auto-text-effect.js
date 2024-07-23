const textEl = document.getElementById('text');
const text = '绿意行动——每个人的环保力量';
let idx = 1;
const speed1 = 200; // 固定速度

writeText();

function writeText() {
    textEl.innerText = text.slice(0, idx);

    idx++;

    if (idx <= text.length) {
        setTimeout(writeText, speed1);
    }
}

