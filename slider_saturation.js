let width_saturation = document.getElementById('sliderBar_saturation').offsetWidth
let process_saturation = document.getElementById('process_saturation') // Progress bar
let slider_saturation = document.getElementById('slider_saturation') // Slider
let percent_saturation = document.getElementById('percent_saturation') // Percentage
let max_saturation = width_saturation - slider_saturation.offsetWidth // Maximum movement distance (container width - slider width)
let startX_saturation = 50, // Click start position
    moveX_saturation = max_saturation/2, // Movement distance
    currentX_saturation = max_saturation/2, // Current position
    isDrag_saturation = false  // Whether to allow dragging
    slider_saturation.style.left = max_saturation/2+'px'
    percent_saturation.innerText = 50

// Mouse move event
let moveEvent_saturation = function(e){
    if(isDrag_saturation){
        let diffX = e.clientX - startX_saturation // Drag distance
        moveX_saturation = diffX + currentX_saturation // Total movement distance
        if(moveX_saturation < 0) moveX_saturation = 0
        if(moveX_saturation > max_saturation) moveX_saturation = max_saturation
        let pre = (moveX_saturation / max_saturation * 100).toFixed(0)  // Percentage
        percent_saturation.innerText = pre
        slider_saturation.style.left = moveX_saturation + 'px'
        main_sat=pre;
      //  console.log(startX_saturation,moveX_saturation,currentX_saturation)
      //  process_saturation.style.width_saturation = '280px'   // Add a hidden section in the slider
        //process_saturation.style.width_saturation = (moveX_saturation + 10) + 'px'   // Add a hidden section in the slider
    }
}

// Mouse up event
let mouseupEvent_saturation = function(e){
    isDrag_saturation = false
    currentX_saturation = moveX_saturation // Record current position
    // Remove event listener
    document.removeEventListener('mousemove', moveEvent_saturation)
    document.removeEventListener('mouseup', mouseupEvent_saturation)
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
slider_saturation.addEventListener('mousedown', function(e){
    if (e.button === 0) {
        isDrag_saturation = true // Allow dragging
        startX_saturation = e.clientX // Record start position
        document.addEventListener('mousemove', moveEvent_saturation)
        document.addEventListener('mouseup', mouseupEvent_saturation)
    }
})

function updateWidthSaturation() {
    width_saturation = document.getElementById('sliderBar_saturation').offsetWidth
    max_saturation = width_saturation - slider_saturation.offsetWidth
    // Recalculate current position and update slider
    moveX_saturation = (parseInt(percent_saturation.innerText) / 100) * max_saturation
    currentX_saturation = moveX_saturation
    slider_saturation.style.left = moveX_saturation + 'px'
}

// Add event listener for window resize
window.addEventListener('resize', updateWidthSaturation)