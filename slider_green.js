let width_green = document.getElementById('sliderBar_green').offsetWidth
let process_green = document.getElementById('process_green') // Progress bar
let slider_green = document.getElementById('slider_green') // Slider
let percent_green = document.getElementById('percent_green') // Percentage
let max_green = width_green - slider_green.offsetWidth // Maximum movement distance (container width - slider width)
let startX_green = 50, // Click start position
    moveX_green = max_green/2, // Movement distance
    currentX_green = max_green/2, // Current position
    isDrag_green = false  // Whether to allow dragging
    slider_green.style.left = max_green/2+'px'
    percent_green.innerText = 50

// Mouse move event
let moveEvent_green = function(e){
    if(isDrag_green){
        let diffX = e.clientX - startX_green // Drag distance
        moveX_green = diffX + currentX_green // Total movement distance
        if(moveX_green < 0) moveX_green = 0
        if(moveX_green > max_green) moveX_green = max_green
        let pre = (moveX_green / max_green * 100).toFixed(0)  // Percentage
        percent_green.innerText = pre
        slider_green.style.left = moveX_green + 'px'
        main_g=pre;
        load_myfilter("imgShow",mainimg.offsetWidth,mainimg.offsetHeight)
        .then(() => {
            // alert("death or life");
            e.stopImmediatePropagation();
        }).catch(err => {
            console.error(err);
        }); 
            //  console.log(startX_green,moveX_green,currentX_green)
       // process_green.style.width = '280px'   // Add a hidden section in the slider
        //process.style.width = (moveX_green + 10) + 'px'   // Add a hidden section in the slider
    }
}

// Mouse up event
let mouseupEvent_green = function(e){
    isDrag_green = false
    currentX_green = moveX_green // Record current position
    // Remove event listener
    document.removeEventListener('mousemove', moveEvent_green)
    document.removeEventListener('mouseup', mouseupEvent_green)
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
slider_green.addEventListener('mousedown', function(e){
    if (e.button === 0) {
        isDrag_green = true // Allow dragging
        startX_green = e.clientX // Record start position
        document.addEventListener('mousemove', moveEvent_green)
        document.addEventListener('mouseup', mouseupEvent_green)
    }
})

// function updateWidthGreen() {
//     width_green = document.getElementById('sliderBar_green').offsetWidth
//     max_green = width_green - slider_green.offsetWidth
//     // Recalculate current position and update slider
//     moveX_green = (parseInt(percent_green.innerText) / 100) * max_green
//     currentX_green = moveX_green
//     slider_green.style.left = moveX_green + 'px'
// }
// window.addEventListener('resize', updateWidthGreen)

function updateWidthGreen() {
    width_green = document.getElementById('sliderBar_green').offsetWidth
    max_green = width_green - slider_green.offsetWidth
    // Recalculate current position and update slider
    moveX_green = (parseInt(percent_green.innerText) / 100) * max_green
    currentX_green = moveX_green
    slider_green.style.left = moveX_green + 'px'
}

// Add event listener for window resize
window.addEventListener('resize', updateWidthGreen)