let width = document.getElementById('sliderBar_red').offsetWidth
let process = document.getElementById('process_red') // 进度条
let slider = document.getElementById('slider_red') // 滑块
let percent = document.getElementById('percent_red') // 百分比
let max = width - slider.offsetWidth // 移动最大距离（容器宽度 - 滑块宽度）
let startX = 50, // 点击开始位置
    moveX = max/2, // 移动距离
    currentX = max/2, // 当前位置
    isDrag = false  // 是否允许拖动
    slider.style.left = max/2+'px'
    percent.innerText = 50

// 鼠标移动事件
let moveEvent = function(e){
    if(isDrag){
        let diffX = e.clientX - startX // 拖动距离
        moveX = diffX + currentX // 总移动距离
        if(moveX < 0) moveX = 0
        if(moveX > max) moveX = max
        let pre = (moveX / max * 100).toFixed(0)  // 百分比
        percent.innerText = pre
        slider.style.left = moveX + 'px'
        console.log(startX,moveX,currentX)
       // process.style.width = '280px'   // 多加一段隐藏进滑块里
        //process.style.width = (moveX + 10) + 'px'   // 多加一段隐藏进滑块里
    }
    e.stopPropagation()
}

// 鼠标抬起事件
let mouseupEvent = function(e){
    isDrag = false
    currentX = moveX // 记录当前位置
    // 移除事件监听
    document.removeEventListener('mousemove', moveEvent)
    document.removeEventListener('mouseup', mouseupEvent)
    e.stopPropagation()
}
// 滑块添加鼠标左键按下事件，e.button的值： 0鼠标左键，1鼠标右键。
slider.addEventListener('mousedown', function(e){
    if (e.button === 0) {
        isDrag = true // 允许拖拽
        startX = e.clientX // 记录开始位置
        document.addEventListener('mousemove', moveEvent)
        document.addEventListener('mouseup', mouseupEvent)
    }
    e.stopPropagation()
})