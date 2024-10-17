let width_red = document.getElementById('sliderBar_red').offsetWidth
let process_red = document.getElementById('process_red') // Progress bar
let slider_red = document.getElementById('slider_red') // Slider
let percent_red = document.getElementById('percent_red') // Percentage
let max_red = width_red - slider_red.offsetWidth // Maximum movement distance (container width - slider width)
let startX_red = 50, // Click start position
    moveX_red = max_red/2, // Movement distance
    currentX_red = max_red/2, // Current position
    isDrag_red = false  // Whether to allow dragging
    slider_red.style.left = max_red/2+'px'
    percent_red.innerText = 50

// Mouse move event
let moveEvent_red = function(e){
    if(isDrag_red){
        let diffX = e.clientX - startX_red // Drag distance
        moveX_red = diffX + currentX_red // Total movement distance
        if(moveX_red < 0) moveX_red = 0
        if(moveX_red > max_red) moveX_red = max_red
        let pre = (moveX_red / max_red * 100).toFixed(0)  // Percentage
        percent_red.innerText = pre
        slider_red.style.left = moveX_red + 'px'
        main_r=pre;
        load_myfilter("imgShow",mainimg.offsetWidth,mainimg.offsetHeight)
        .then(() => {
            // alert("death or life");
            e.stopImmediatePropagation();
        }).catch(err => {
            console.error(err);
        }); 
            //  console.log(startX_red,moveX_red,currentX_red)
       // process_red.style.width = '280px'   // Add a hidden section in the slider
        //process.style.width = (moveX_red + 10) + 'px'   // Add a hidden section in the slider
    }
}

// Mouse up event
let mouseupEvent_red = function(e){
    isDrag_red = false
    currentX_red = moveX_red // Record current position
    // Remove event listener
    document.removeEventListener('mousemove', moveEvent_red)
    document.removeEventListener('mouseup', mouseupEvent_red)
    load_myfilter("imgShow",mainimg.offsetWidth,mainimg.offsetHeight)
    .then(() => {
        // alert("death or life");
        e.stopImmediatePropagation();
    })
    .catch(err => {
        console.error(err);
    }); 
}
// Add mouse left button down event to the slider, e.button value: 0 mouse left button, 1 mouse right button.
slider_red.addEventListener('mousedown', function(e){
    if (e.button === 0) {
        isDrag_red = true // Allow dragging
        startX_red = e.clientX // Record start position
        document.addEventListener('mousemove', moveEvent_red)
        document.addEventListener('mouseup', mouseupEvent_red)
    }
})

function updateWidthRed() {
    width_red = document.getElementById('sliderBar_red').offsetWidth
    max_red = width_red - slider_red.offsetWidth
    // Recalculate current position and update slider
    moveX_red = (parseInt(percent_red.innerText) / 100) * max_red
    currentX_red = moveX_red
    slider_red.style.left = moveX_red + 'px'
}
window.addEventListener('resize', updateWidthRed)