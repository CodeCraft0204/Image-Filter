let width_blue = document.getElementById('sliderBar_blue').offsetWidth
let process_blue = document.getElementById('process_blue') // progress bar
let slider_blue = document.getElementById('slider_blue') // slider
let percent_blue = document.getElementById('percent_blue') // percentage
let max_blue = width_blue - slider_blue.offsetWidth // maximum movement distance (container width - slider width)
let startX_blue = 50, // starting position of the click
    moveX_blue = max_blue/2, // movement distance
    currentX_blue = max_blue/2, // current position
    isDrag_blue = false  // whether to allow dragging
    slider_blue.style.left = (max_blue/2) + 'px'
    percent_blue.innerText = 50

// Mouse move event
let moveEvent_blue = function(e){
    if(isDrag_blue){
        let diffX = e.clientX - startX_blue // dragging distance
        moveX_blue = diffX + currentX_blue // total movement distance
        if(moveX_blue < 0) moveX_blue = 0
        if(moveX_blue > max_blue) moveX_blue = max_blue
        let pre = (moveX_blue / max_blue * 100).toFixed(0)  // percentage
        percent_blue.innerText = pre
        slider_blue.style.left = moveX_blue + 'px'
        main_b=pre;
        debouncedLoadMyFilter("imgShow", mainimg.offsetWidth, mainimg.offsetHeight);
        
        // console.log(startX_blue,moveX_blue,currentX_blue)
        //  process_blue.style.width_blue = '280px'   // Add a hidden segment into the slider
        //process_blue.style.width_blue = (moveX_blue + 10) + 'px'   // Add a hidden segment into the slider
    }
}

// Mouse up event
let mouseupEvent_blue = function(e){
    isDrag_blue = false
    currentX_blue = moveX_blue // record the current position
    // Remove event listeners
    document.removeEventListener('mousemove', moveEvent_blue)
    document.removeEventListener('mouseup', mouseupEvent_blue)
    load_myfilter("imgShow",mainimg.offsetWidth,mainimg.offsetHeight)
    .then(() => {
        // alert("death or life");
        // e.stopImmediatePropagation();
    })
    .catch(err => {
        console.error(err);
    });        
}
// Add mouse left button down event to the slider, e.button values: 0 left mouse button, 1 right mouse button.
slider_blue.addEventListener('mousedown', function(e){
    if (e.button === 0) {
        isDrag_blue = true // allow dragging
        startX_blue = e.clientX // record the starting position
        document.addEventListener('mousemove', moveEvent_blue)
        document.addEventListener('mouseup', mouseupEvent_blue)
    }
})

function updateWidthBlue() {
    width_blue = document.getElementById('sliderBar_blue').offsetWidth
    max_blue = width_blue - slider_blue.offsetWidth
    // Recalculate current position and update slider
    moveX_blue = (parseInt(percent_blue.innerText) / 100) * max_blue
    currentX_blue = moveX_blue
    slider_blue.style.left = moveX_blue + 'px'
}

// Add event listener for window resize
window.addEventListener('resize', updateWidthBlue)