const doc = document;


const bread = doc.querySelector('#bread'); // 面包按钮
const drop = doc.querySelector('#drop'); // 下拉菜单

doc.addEventListener('click', e => {
    drop.classList.remove('drop-show');
});

// 点击事件, 显示/隐藏下拉菜单
bread.addEventListener('click', e => {
    e.stopPropagation();
    drop.classList.toggle('drop-show');
});
