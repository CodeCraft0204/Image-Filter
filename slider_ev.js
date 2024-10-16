let width_ev = document.getElementById('sliderBar_EV').offsetWidth
let process_ev = document.getElementById('process_EV') // 进度条
let slider_ev = document.getElementById('slider_EV') // 滑块
let percent_ev = document.getElementById('percent_EV') // 百分比
let max_ev = width_ev - slider_ev.offsetWidth // 移动最大距离（容器宽度 - 滑块宽度）
let startX_ev = 50, // 点击开始位置
    moveX_ev = max_ev/2, // 移动距离
    currentX_ev = max_ev/2, // 当前位置
    isDrag_ev = false  // 是否允许拖动
    slider_ev.style.left = max_ev/2+'px'
    percent_ev.innerText = 0

// 鼠标移动事件
let moveEvent_ev = function(e){
    if(isDrag_ev){
        let diffX = e.clientX - startX_ev // 拖动距离
        moveX_ev = diffX + currentX_ev // 总移动距离
        if(moveX_ev < 0) moveX_ev = 0
        if(moveX_ev > max_ev) moveX_ev= max_ev
        let pre = (moveX_ev/ max_ev * 60-30).toFixed(0)  // 百分比
        percent_ev.innerText = pre
        slider_ev.style.left = moveX_ev + 'px'
        console.log(startX_ev,moveX_ev,currentX_ev)
       // process_green.style.width = '280px'   // 多加一段隐藏进滑块里
        //process.style.width = (moveX_green + 10) + 'px'   // 多加一段隐藏进滑块里
    }
    e.stopPropagation()
}

// 鼠标抬起事件
let mouseupEvent_ev = function(e){
    isDrag_ev = false
    currentX_ev = moveX_ev // 记录当前位置
    // 移除事件监听
    document.removeEventListener('mousemove', moveEvent_ev)
    document.removeEventListener('mouseup', mouseupEvent_ev)
    e.stopPropagation()
}
// 滑块添加鼠标左键按下事件，e.button的值： 0鼠标左键，1鼠标右键。
slider_ev.addEventListener('mousedown', function(e){
    if (e.button === 0) {
        isDrag_ev = true // 允许拖拽
        startX_ev = e.clientX // 记录开始位置
        document.addEventListener('mousemove', moveEvent_ev)
        document.addEventListener('mouseup', mouseupEvent_ev)
    }
    e.stopPropagation()
})