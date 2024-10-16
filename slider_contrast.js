let width_contrast = document.getElementById('sliderBar_contrast').offsetWidth
let process_contrast = document.getElementById('process_contrast') // Progress bar
let slider_contrast = document.getElementById('slider_contrast') // Slider
let percent_contrast = document.getElementById('percent_contrast') // Percentage
let max_contrast = width_contrast - slider_contrast.offsetWidth // Maximum movement distance (container width - slider width)
let startX_contrast = 50, // Click start position
    moveX_contrast = max_contrast/2, // Movement distance
    currentX_contrast = max_contrast/2, // Current position
    isDrag_contrast = false  // Whether to allow dragging
    slider_contrast.style.left = max_contrast/2+'px'
    percent_contrast.innerText = 50

// Mouse move event
let moveEvent_contrast = function(e){
    if(isDrag_contrast){
        let diffX = e.clientX - startX_contrast // Drag distance
        moveX_contrast = diffX + currentX_contrast // Total movement distance
        if(moveX_contrast < 0) moveX_contrast = 0
        if(moveX_contrast > max_contrast) moveX_contrast = max_contrast
        let pre = (moveX_contrast / max_contrast * 100).toFixed(0)  // Percentage
        percent_contrast.innerText = pre
        slider_contrast.style.left = moveX_contrast + 'px'
        //console.log(startX_contrast,moveX_contrast,currentX_contrast)
        main_con=pre;
       // process_contrast.style.width_contrast = '280px'   // Add a hidden section in the slider
        //process_contrast.style.width_contrast = (moveX_contrast + 10) + 'px'   // Add a hidden section in the slider
    }
}

// Mouse up event
let mouseupEvent_contrast = function(e){
    isDrag_contrast = false
    currentX_contrast = moveX_contrast // Record current position
    // Remove event listener
    document.removeEventListener('mousemove', moveEvent_contrast)
    document.removeEventListener('mouseup', mouseupEvent_contrast)
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
slider_contrast.addEventListener('mousedown', function(e){
    if (e.button === 0) {
        isDrag_contrast = true // Allow dragging
        startX_contrast = e.clientX // Record start position
        document.addEventListener('mousemove', moveEvent_contrast)
        document.addEventListener('mouseup', mouseupEvent_contrast)
    }
})