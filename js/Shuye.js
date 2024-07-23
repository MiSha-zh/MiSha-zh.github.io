const doc = document;
const canvas = doc.querySelector('canvas');
// 获取 2d 上下文
const snowCtx = canvas.getContext('2d');

// 获取window的宽高，赋值给画布
canvas.width = width = window.innerWidth;
canvas.height = height = window.innerHeight;

// 常量、参数
const TOTAL = 300, // 树叶数量
        tsc = 1, // 用来设置树叶飘落效果的参数
        speed = 0.5; // 树叶飘落速度
const sc = 1.0, // 用来生成树叶半径的参数
        t = 0, // 用来设置树叶飘落效果的参数
        mv = 20,
        minSpeed = 0.1, // 树叶飘落的最小速度
        snowArr = []; // 树叶数组，用来存放树叶的实例

/**
 * 下叶子
 */
function Snowy() {
    // 生成 TOTAL 数量的树叶类实例，存放到 snowArr 数组中
    for (let i = 0; i < TOTAL; i++) {
        const snowFlake = new SnowFlake();
        snowArr.push(snowFlake);
    }
    // 渲染树叶
    render();
}

/**
 * 渲染函数
 */
function render() {
    // 清除画布内容，准备绘制
    snowCtx.clearRect(0, 0, width, height);
    // 遍历树叶数组，让树叶数组中的实例改变位置、速度 等参数
    snowArr.forEach(snowFlake => snowFlake.animate());
    // 该方法会让浏览器在重绘之前调用指定的函数 render
    // 这样可以保证在浏览器的刷新频率下更新动画；
    window.requestAnimationFrame(render);
}

/**
 * 树叶 类
 */
class SnowFlake {

    /**
     * 构造方法,数据初始化
     */
    constructor() {
        this.y = Math.random() * (height + 50); // y轴坐标
        this.x = Math.random() * width; // x轴坐标
        this.t = Math.random() * (Math.PI * 2);
        this.size = (100 / (10 + (Math.random() * 100))) * sc; // 树叶半径
        this.speed = (Math.pow(this.size * 0.7, 2) * 0.15) * speed; // 树叶尺寸越大，速度越快，为了营造一种远近的层次感
        this.speed = this.speed < minSpeed ? minSpeed : this.speed;
    }

    /**
     * 树叶绘制的方法
     */
    draw() {
        // 定义椭圆的参数
        const radiusX = this.size; // 椭圆的x轴半径
        const radiusY = this.size / 2; // 椭圆的y轴半径
        const rotation = 0; // 椭圆的旋转角度
        const startAngle = 0; // 椭圆的起始角度
        const endAngle = Math.PI * 2; // 椭圆的结束角度
    
        // 创建线性渐变
        this.g = snowCtx.createLinearGradient(this.x, this.y - this.size, this.x, this.y + this.size);
        this.g.addColorStop(0, 'rgba(0, 128, 0, 1)'); // 深绿色
        this.g.addColorStop(1, 'rgba(0, 255, 0, 1)'); // 浅绿色
    
        snowCtx.fillStyle = this.g;
        snowCtx.beginPath();
        snowCtx.ellipse(this.x, this.y, radiusX, radiusY, rotation, startAngle, endAngle);
        snowCtx.closePath();
        snowCtx.fill();
    
        // y轴方向超出画布高度，重新设置树叶在y轴的坐标
        if (this.y > height + 50) {
            this.y = -10 - Math.random() * mv;
        }
        // x轴方向超出画布的宽度，重新设置树叶在x的坐标
        if (this.x > width + mv) {
            this.x = -mv;
        }
        if (this.x < -mv) {
            this.x = width + mv;
        }
    }

    /**
     * 重新设置树叶运动时的参数，包括位置、速度等
     */
    animate() {
        this.t += 0.05;
        this.t = this.t >= Math.PI * 2 ? 0 : this.t;
        this.y += this.speed; // y轴方向匀速下落
        this.x += Math.sin(this.t * tsc) * (this.size * 0.3); // 利用 Math.sin() 函数让树叶下落过程中水平方向产生正弦图形似的移动效果

        // 利用上述参数重新绘制树叶
        this.draw();
    }

}

// 监听浏览器窗口变化
window.addEventListener('resize', () => {
    canvas.width = width = window.innerWidth;
    canvas.height = height = window.innerHeight;
});

// 调用 Snowy(), 开始下树叶！
Snowy();