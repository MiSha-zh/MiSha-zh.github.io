// 获取所有幻灯片元素
const slides = document.querySelectorAll('.slide');

// 定义当前幻灯片索引
let currentSlide = 0;

// 定义切换幻灯片的函数
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateY(${(i - index) * 100}%)`;
    });
}

// 定义滚动阈值
const scrollThreshold = 50; // 可以根据需要调整这个值

// 监听鼠标滚轮事件
document.addEventListener('wheel', (event) => {
    if (event.deltaY > scrollThreshold) {
        // 向下滚动
        if (currentSlide < slides.length - 1) {
            currentSlide++;
        }
    } else if (event.deltaY < -scrollThreshold) {
        // 向上滚动
        if (currentSlide > 0) {
            currentSlide--;
        }
    }
    showSlide(currentSlide);
});
