let width_brightness = document.getElementById('sliderBar_brightness').offsetWidth
let process_brightness = document.getElementById('process_brightness') // Progress bar
let slider_brightness = document.getElementById('slider_brightness') // Slider
let percent_brightness = document.getElementById('percent_brightness') // Percentage
let max_brightness = width_brightness - slider_brightness.offsetWidth // Maximum movement distance (container width - slider width)
let startX_brightness = 50, // Click start position
    moveX_brightness = max_brightness/2, // Movement distance
    currentX_brightness = max_brightness/2, // Current position
    isDrag_brightness = false  // Whether to allow dragging
    slider_brightness.style.left = max_brightness/2+'px'
    percent_brightness.innerText = 50

// Mouse move event
let moveEvent_brightness = function(e){
    if(isDrag_brightness){
        let diffX = e.clientX - startX_brightness // Drag distance
        moveX_brightness = diffX + currentX_brightness // Total movement distance
        if(moveX_brightness < 0) moveX_brightness = 0
        if(moveX_brightness > max_brightness) moveX_brightness = max_brightness
        let pre = (moveX_brightness / max_brightness * 100).toFixed(0)  // Percentage
        percent_brightness.innerText = pre
        slider_brightness.style.left = moveX_brightness + 'px'
        main_bri=pre;
      //  console.log(startX_saturation,moveX_saturation,currentX_saturation)
      //  process_saturation.style.width_saturation = '280px'   // Add a hidden section in the slider
        //process_saturation.style.width_saturation = (moveX_saturation + 10) + 'px'   // Add a hidden section in the slider
    }
}

// Mouse up event
let mouseupEvent_brightness = function(e){
    isDrag_brightness = false
    currentX_brightness = moveX_brightness // Record current position
    // Remove event listener
    document.removeEventListener('mousemove', moveEvent_brightness)
    document.removeEventListener('mouseup', mouseupEvent_brightness)
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
slider_brightness.addEventListener('mousedown', function(e){
    if (e.button === 0) {
        isDrag_brightness = true // Allow dragging
        startX_brightness = e.clientX // Record start position
        document.addEventListener('mousemove', moveEvent_brightness)
        document.addEventListener('mouseup', mouseupEvent_brightness)
    }
})