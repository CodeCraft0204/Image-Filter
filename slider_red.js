let width = document.getElementById('sliderBar_red').offsetWidth
let process = document.getElementById('process_red') // progress bar
let slider = document.getElementById('slider_red') // slider
let percent = document.getElementById('percent_red') // percentage
let max = width - slider.offsetWidth // maximum movement distance (container width - slider width)
let startX = 50, // starting position of the click
    moveX = max/2, // movement distance
    currentX = max/2, // current position
    isDrag = false  // whether to allow dragging
    slider.style.left = max/2+'px'
    percent.innerText = 50

// Mouse movement event
let moveEvent = function(e){
    if(isDrag){
        let diffX = e.clientX - startX // movement distance
        moveX = diffX + currentX // total movement distance
        if(moveX < 0) moveX = 0
        if(moveX > max) moveX = max
        let pre = (moveX / max * 100).toFixed(0)  // percentage
        percent.innerText = pre
        main_r=pre;
        slider.style.left = moveX + 'px'
       // adjcolor_r();
       // updatefiter();
       // console.log(startX,moveX,currentX)
       // process.style.width = '280px'   // add a hidden segment into the slider
        //process.style.width = (moveX + 10) + 'px'   // add a hidden segment into the slider
    }
}

// Mouse up event
let mouseupEvent = function(e){
    isDrag = false
    currentX = moveX // record the current position
    // remove event listeners
    document.removeEventListener('mousemove', moveEvent)
    document.removeEventListener('mouseup', mouseupEvent)
    load_myfilter("imgShow",mainimg.offsetWidth,mainimg.offsetHeight)
    .then(() => {
        // alert("death or life");
        e.stopImmediatePropagation();
    })
    .catch(err => {
        console.error(err);
    }); 
}
// Add mouse left button down event to the slider, e.button values: 0 left mouse button, 1 right mouse button.
slider.addEventListener('mousedown', function(e){
    if (e.button === 0) {
        isDrag = true // allow dragging
        startX = e.clientX // record the starting position
        document.addEventListener('mousemove', moveEvent)
        document.addEventListener('mouseup', mouseupEvent)
    }
})