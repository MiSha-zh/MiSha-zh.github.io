const boxes = document.querySelectorAll('.box-text')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}



//图片渐渐显现
window.addEventListener('scroll', function() {
    var element = document.getElementById('animated-image');
    var position = element.getBoundingClientRect();

    // 检查元素是否在视口中
    if (position.top < window.innerHeight && position.bottom >= 0) {
        element.classList.add('fade-in', 'active');
    } else {
        element.classList.remove('active');
    }
});
