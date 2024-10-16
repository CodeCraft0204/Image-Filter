var imgpos = 1; // Click start position
var main_r=50;
var main_g=50;
var main_b=50;
var main_con=50;
var main_bri=50;
var main_sat=50;
var main_wb=0;
var main_ev=0;
var mainimgsrc='img/top.jpg';
var originalCanvas = document.getElementById('main_img');
const  mainimg = document.getElementById('imgShow');
var newWidth=800;
var newHeight=600;
var img = new Image();
var imgurl = 'img/top.jpg';


//var imgcanvas = document.getElementById('imgcanvas');
//var ctx = imgcanvas.getContext('2d');

const canvas_imgshow = document.getElementById('imgShow');
const context_imgshow = canvas_imgshow.getContext('2d', { willReadFrequently: true });

// // Now create the Fabric.js canvas using this context
// const fabricCanvas = new fabric.StaticCanvas(canvas_imgshow, { 
//     width: w, 
//     height: h, 
//     selection: false, 
//     multiSelect:false, 
//     hoverCursor: 'pointer',
//     moveCursor: 'pointer',
//     allowTouchScrolling :false
// });

// // If you want to use the context in Fabric.js, you can pass it directly
// fabricCanvas.contextContainer = canvasContext; // This line binds the context with Fabric.js

function  adjcolor_r()
{

    Caman(mainimg, function () {
       // this.red=main_r*255/100;
        this.brightness(-255,10,10);

        // Generate new image
        this.render();
    });

}

function  adjcontrast()
{

    Caman(mainimg, function () {

        this.brightness(main_r);
        // Generate new image
        this.render();
    });

}


(function() {
    const imageList = document.getElementById('imageList');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const carousel = document.querySelector('.carousel');

    // const Replacebtn= document.getElementById('Replace');
    const Replacebtn= document.getElementById('imgShow');
    const imageListExport = document.getElementById('exportBtn');
    const filesInput = document.getElementById('files');
    const filesInput2 = document.getElementById('files2');

    const saveBtn = document.getElementById('saveBtn');

    const totalImagesList =  [
/*         {

            src: 'img/top.jpg',
            id:'Original',
            name: 'Original',
            rv:50,
            gv:50,
            bv:50,
            con:50,
            bri:50,
            sat:50,
            ev:0,
            wb:0

        },
        {

            src: 'img/top.jpg',
            id: 'film',
            name: 'Film',
            rv:60,
            gv:50,
            bv:50,
            con:55,
            bri:55,
            sat:60,
            ev:0,
            wb:0
        },
        {

            src: 'img/top.jpg',
            id:'Movie',
            name: 'Movie',
            rv:50,
            gv:60,
            bv:30,
            con:55,
            bri:50,
            sat:50,
            ev:0,
            wb:0
        },
        {

            src: 'img/top.jpg',
            id:'Sharp',
            name: 'Sharp',
            rv:80,
            gv:20,
            bv:40,
            con:55,
            bri:50,
            sat:50,
            ev:0,
            wb:0
        },
        {

            src: 'img/top.jpg',
            id:'Fade',
            name: 'Fade',
            rv:20,
            gv:85,
            bv:50,
            con:50,
            bri:50,
            sat:60,
            ev:0,
            wb:0
        },
        {

            src: 'img/top.jpg',
            id:'Retro',
            name: 'Retro',
            rv:80,
            gv:50,
            bv:90,
            con:50,
            bri:50,
            sat:50,
            ev:0,
            wb:0
        },
        {

            src: 'img/top.jpg',
            id:'Coolcolor',
            name: 'Cold Color',
            rv:20,
            gv:40,
            bv:100,
            con:50,
            bri:50,
            sat:50,
            ev:0,
            wb:0
        },
        {

            src: 'img/top.jpg',
            id:'Relief',
            name: 'Relief',
            rv:80,
            gv:50,
            bv:50,
            con:60,
            bri:60,
            sat:50,
            ev:0,
            wb:0
        },
        {

            src: 'img/top.jpg',
            id:'Gray',
            name: 'Gray',
            rv:50,
            gv:50,
            bv:50,
            con:50,
            bri:50,
            sat:0,
            ev:0,
            wb:0
        }, */

    ]; // Total number of images
    const imageWidth = 200; // Width of each image
    let currentIndex = 0; // Current index
    let isDragging = false; // Dragging state
    let startX; // X coordinate when the mouse is pressed
    let currentX; // Current mouse X coordinate
    let transformX = 0; // Current displacement


    var switchBtn = document.getElementById('switchBtn');
    // var switchSlider = document.querySelector('.slider');

    // Click one of the images to highlight and display in the large image
    function clickImgShowBig(){
        // Get the ul element
        const exportList = document.getElementById('imageListExport');

        // Get all li elements
        const spans = exportList.querySelectorAll('span');

        // Get the img element used to display the image
        const img = document.querySelector('.imgFilter img');

        // Traverse all li elements and bind a click event to each li element
        for (let i = 0; i < spans.length; i++) {
            spans[i].addEventListener('click', function() {
                // Remove the previous selected style
                const activeLi = exportList.querySelector('.active');
                if (activeLi) {
                    activeLi.classList.remove('active');
                }

                // Add the selected style to the current selected li element
                this.classList.add('active');

                // Get the src attribute value of the img element under the selected li element
                const imgSrc = this.querySelector('img').getAttribute('src');

                // Update the src attribute value of the img element used to display the image
                img.setAttribute('src', imgSrc);
            });
        }
    }



    // Click one of the images to highlight and display in the large image
    function img1Clicked(){
     //  alert('The image is clicked!'+pos);
       // var displayedImage = document.getElementById('imgShow');
       // displayedImage.src = this.src; // this refers to the clicked image
        //const img = document.querySelector('.imgFilter img');
       // img.setAttribute('src', this.src);
        imgpos=1;
        mainimgsrc=this.src;
        createImgList();
        load_myfilter("imgShow",mainimg.offsetWidth,mainimg.offsetHeight);
        // Traverse all li elements and bind a click event to each li element

    }
    function img2Clicked(){
        //  alert('The image is clicked!'+pos);
        // var displayedImage = document.getElementById('imgShow');
        // displayedImage.src = this.src; // this refers to the clicked image
       // const img = document.querySelector('.imgFilter img');
       // img.setAttribute('src', this.src);
        imgpos=2;
        mainimgsrc=this.src;
        createImgList();
        load_myfilter("imgShow",mainimg.offsetWidth,mainimg.offsetHeight);
        // Traverse all li elements and bind a click event to each li element

    }
    function img3Clicked(){
        //  alert('The image is clicked!'+pos);
        // var displayedImage = document.getElementById('imgShow');
        // displayedImage.src = this.src; // this refers to the clicked image
      //  const img = document.querySelector('.imgFilter img');
      //  img.setAttribute('src', this.src);
        imgpos=3;
        mainimgsrc=this.src;
        createImgList();
        load_myfilter("imgShow",mainimg.offsetWidth,mainimg.offsetHeight);
        // Traverse all li elements and bind a click event to each li element

    }

    function handleFileSelect(evt) {
        var files = evt.target.files;
        for (var i = 0, f; f = files[i]; i++) {
            var reader = new FileReader();
            reader.onload = (function(theFile) {
            return function(e) {
                var imageList = document.getElementById('imageListExport');
                var li = document.createElement('span');
                var img = document.createElement('img');
                img.src = e.target.result;
                li.addEventListener('click',()=>{
                    clickImgShowBig();
                })
                li.appendChild(img);
                imageList.appendChild(li);
            };
            })(f);
            reader.readAsDataURL(f);
        }
    }

    function export_txt(){
        downloadTxtFile("FILTER.flt");
        modal1.style.display = "block";
    }

    function downloadTxtFile(filename) {
        // Create Blob object
        var text="C00,"+main_r+",C10,"+main_g+",C20,"+main_b+",C01,"+main_bri+",C11,"+main_con+",C21,"+main_sat+",C02,"+main_wb+",C12,"+main_ev+",CRC";

        var blob = new Blob([text], { type: 'text/plain' });

        // Create URL
        var url = URL.createObjectURL(blob);

        // Create an a tag
        var downloadLink = document.createElement("a");
        downloadLink.href = url;
        downloadLink.download = filename; // Specify the download file name

        // Add to the document and click
        document.body.appendChild(downloadLink);
        downloadLink.click();

        // Clean up and remove elements
        document.body.removeChild(downloadLink);
        URL.revokeObjectURL(url);
    }

// Use function
 //   downloadTxtFile('example.txt', 'This is the text content');
    function download(filename, text) {
        var element = document.createElement('a');
        element.setAttribute('href', 'text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }



    function replaceImgFile(evt) {
        var file = evt.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const url = URL.createObjectURL(file);
          //  alert( url);
            const img = document.querySelector('.imgFilter img');
            const img1 = document.getElementById('samimg'+imgpos);
            img.setAttribute('src', url);
            img1.setAttribute('src', url);
            mainimgsrc=url;
            createImgList();
            //imageDisplay.style.display = 'inline';
        }

           /* var reader = new FileReader();
            reader.readAsDataURL(file);
            alert( e.target.result);
            reader.onload = (function(theFile) {
                return function(e) {


                    const img = document.querySelector('.imgFilter img');
                    const img1 = document.getElementById('samimg'+imgpos);
                    img.setAttribute('src', e.target.result);
                    img1.setAttribute('src', e.target.result);
                    mainimgsrc=e.target.result;
                    createImgList();

                };
            });*/


    }

    // Update the position of the image list
    function updateImageList() {
        imageList.style.transform = `translateX(${transformX}px)`;
    }

    // Dragging
    function dragging(event) {
        if (!isDragging) return; // If it is not in dragging state, return
        const deltaX = (event.clientX - currentX) * 2; // Increase sensitivity
        transformX += deltaX; // Update transformX
        currentX = event.clientX; // Update current mouse X coordinate

        // Limit the range of transformX
        transformX = Math.min(0, Math.max(transformX, carousel.clientWidth - (totalImagesList.length * (imageWidth + 10))));
        
        updateImageList(); // Update the position of the image list
    }

    // End of dragging
    function endDrag() {
        isDragging = false;
        window.removeEventListener('mousemove', dragging); // Remove mouse move event
    }

    function updateSlider(main_r, main_g, main_b, main_bri, main_con, main_sat) {
        currentX_red = main_r * max_red / 100;
        currentX_green = main_g * max_green / 100;
        currentX_blue = main_b * max_blue / 100;
        currentX_brightness = main_bri * max_brightness / 100;
        currentX_contrast = main_con * max_contrast / 100;
        currentX_saturation = main_sat * max_saturation / 100;
        // main_r
        percentage_r = Math.max(0, Math.min(100, main_r));
        let newPosition_r = (percentage_r / 100) * max_red;
        let slider_r = document.getElementById('slider_red') 
        let percent_r = document.getElementById('percent_red')
        slider_r.style.left = newPosition_r + 'px';
        percent_r.innerText = percentage_r.toFixed(0);

        // main_g
        percentage_g = Math.max(0, Math.min(100, main_g));
        let newPosition_g = (percentage_g / 100) * max_red;
        let slider_g = document.getElementById('slider_green') 
        let percent_g = document.getElementById('percent_green')
        slider_g.style.left = newPosition_g + 'px';
        percent_g.innerText = percentage_g.toFixed(0);

        // main_b
        percentage_b = Math.max(0, Math.min(100, main_b));
        let newPosition_b = (percentage_b / 100) * max_red;
        let slider_b = document.getElementById('slider_blue') 
        let percent_b = document.getElementById('percent_blue')
        slider_b.style.left = newPosition_b + 'px';
        percent_b.innerText = percentage_b.toFixed(0);

        // main_bri
        percentage_bri = Math.max(0, Math.min(100, main_bri));
        let newPosition_bri = (percentage_bri / 100) * max_red;
        let slider_bri = document.getElementById('slider_brightness') 
        let percent_bri = document.getElementById('percent_brightness')
        slider_bri.style.left = newPosition_bri + 'px';
        percent_bri.innerText = percentage_bri.toFixed(0);

        // main_con
        percentage_con = Math.max(0, Math.min(100, main_con));
        let newPosition_con = (percentage_con / 100) * max_red;
        let slider_con = document.getElementById('slider_contrast') 
        let percent_con = document.getElementById('percent_contrast')
        slider_con.style.left = newPosition_con + 'px';
        percent_con.innerText = percentage_con.toFixed(0);

        // main_sat
        percentage_sat = Math.max(0, Math.min(100, main_sat));
        let newPosition_sat = (percentage_sat / 100) * max_red;
        let slider_sat = document.getElementById('slider_saturation') 
        let percent_sat = document.getElementById('percent_saturation')
        slider_sat.style.left = newPosition_sat + 'px';
        percent_sat.innerText = percentage_sat.toFixed(0);
    }


    function clicktoImgPara(pos){
        // alert("pos" + pos);
        // var displayedImage = document.getElementById('imgShow');
        // displayedImage.src = this.src; // this refers to the clicked image
       // const img = document.querySelector('.imgFilter img');
       // img.setAttribute('src', this.src);
       // imgpos=3;
       // mainimgsrc=this.src;
       // createImgList();
        // Traverse all li elements and bind a click event to each li element
        main_r=totalImagesList[pos].rv;
        main_g=totalImagesList[pos].gv;
        main_b=totalImagesList[pos].bv;
        main_con=totalImagesList[pos].con;
        main_bri=totalImagesList[pos].bri;
        main_sat=totalImagesList[pos].sat;
        main_wb=totalImagesList[pos].wb;
        main_ev=totalImagesList[pos].ev;
        updateSlider(main_r, main_g, main_b, main_bri, main_con, main_sat);

        // alert('The image is clicked!'+totalImagesList[pos].id+ main_r+','+ main_g+ ','+main_b+','+ main_bri+','+ main_con+','+ main_sat);
        bf= new fabric.Image.filters.Brightness({
            brightness: ((main_bri-50)/50)
        });
        cf=   new fabric.Image.filters.Contrast({
            contrast: ((main_con-50)/50)
        });
        sf=   new fabric.Image.filters.Saturation({
            saturation: ((main_sat-50)/50)
        });
        gf=  new fabric.Image.filters.Gamma({
            gamma: [main_r/50+0.01, main_g/50+0.01, main_b/50+0.01]
        });

        load_myfilter("imgShow",mainimg.offsetWidth,mainimg.offsetHeight);

    }

    // Create the image list
    function createImgList() {
        imageList.innerHTML = '';
    
        function loadImage(src) {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.onload = () => resolve(img);
                img.onerror = reject;
                img.src = src;
            });
        }
    
        function createFilteredCanvas(img, filterData, canvasId) {
            return new Promise((resolve) => {
                const canvas = document.createElement('canvas');
                canvas.id = canvasId;
                canvas.width = 200;
                canvas.height = 150;
    
                const cs = new fabric.StaticCanvas(canvas, {
                    width: 200,
                    height: 150
                });
    
                const imageBG = new fabric.Image(img, {
                    left: 0,
                    top: 0,
                    angle: 0,
                    opacity: 1
                });
    
                imageBG.scaleToWidth(200);
                imageBG.scaleToHeight(150);
    
                imageBG.filters.push(
                    new fabric.Image.filters.Brightness({ brightness: ((filterData.bri - 50) / 50) }),
                    new fabric.Image.filters.Contrast({ contrast: ((filterData.con - 50) / 50) }),
                    new fabric.Image.filters.Saturation({ saturation: ((filterData.sat - 50) / 50) }),
                    new fabric.Image.filters.Gamma({
                        gamma: [filterData.rv / 50 + 0.01, filterData.gv / 50 + 0.01, filterData.bv / 50 + 0.01]
                    })
                );
    
                imageBG.applyFilters();
                cs.add(imageBG);
                cs.renderAll();
    
                resolve(canvas);
            });
        }
    
        async function createListItem(filterData, index) {
            try {
                const img = await loadImage(mainimgsrc);
                const canvas = await createFilteredCanvas(img, filterData, filterData.id);
    
                const li = document.createElement('li');
                const span = document.createElement('span');
                span.innerText = filterData.name;
    
                li.appendChild(canvas);
                li.appendChild(span);
                li.addEventListener('click', () => clicktoImgPara(index));
    
                return li;
            } catch (error) {
                console.error('Error creating list item:', error);
                return null;
            }
        }
    
        async function populateList() {
            const listItems = await Promise.all(totalImagesList.map(createListItem));
            listItems.forEach(item => {
                if (item) imageList.appendChild(item);
            });
        }
    
        populateList().catch(error => console.error('Error populating list:', error));
    }

    window.onload = function() {
        // After the page is loaded, execute the code

        fabric.filterBackend = new fabric.Canvas2dFilterBackend();
       bf= new fabric.Image.filters.Brightness({
            brightness: ((main_bri-50)/50)
        });
         cf=   new fabric.Image.filters.Contrast({
                contrast: ((main_con-50)/50)
            });
         sf=   new fabric.Image.filters.Saturation({
                saturation: ((main_sat-50)/50)
            });
          gf=  new fabric.Image.filters.Gamma({
                gamma: [main_r/50+0.01, main_g/50+0.01, main_b/50+0.01]
            });

        load_myfilter("imgShow",mainimg.offsetWidth,mainimg.offsetHeight);
        //set_stage(originalCanvas,mainimg.offsetWidth,mainimg.offsetHeight);
        createImgList();
        // Trigger upload
        Replacebtn.addEventListener('click', () => {
            filesInput.click();
        });

        filesInput.addEventListener('change', (event) => {
            const file = event.target.files[0]; // Get the first selected file

            if (file) {
                const reader = new FileReader();

                // Define what happens when the file is read
                reader.onload = function(e) {
                    const img = new Image(); // Create a new image element

                    img.onload = function() {
                        // console.log('object')
                        // Clear the canvas before drawing
                        context_imgshow.clearRect(0, 0, canvas.width, canvas.height);
                        
                        // Draw the uploaded image onto the canvas
                        context_imgshow.drawImage(img, 0, 0, canvas.width, canvas.height);
                        // mainimgsrc = img.src
                    };

                    //img.src = e.target.result; // Set the source of the image to the result of FileReader

                    const hiddenImg = document.getElementById('samimg' + imgpos);
                    hiddenImg.src = e.target.result; // Set the source to the FileReader result

                    mainimgsrc=e.target.result;
                    createImgList();
                    load_myfilter("imgShow",mainimg.offsetWidth,mainimg.offsetHeight);

  
                };

                // Read the uploaded file
                reader.readAsDataURL(file);
            }
        });

        imageListExport.addEventListener('click', () => {
            //export_txt();
        }); 

        // Scroll left
        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                transformX += (imageWidth + 10); // 10 is the image interval
                updateImageList();
            }
        });
    
        // Scroll right
        nextBtn.addEventListener('click', () => {
            if (currentIndex < totalImagesList.length - 1) {
                currentIndex++;
                transformX -= (imageWidth + 10); // 10 is the image interval
                updateImageList();
            }
        });
    
        // Mouse scroll
        carousel.addEventListener('wheel', (event) => {
            event.preventDefault();
            if (event.deltaY < 0) {
                prevBtn.click();
            } else {
                nextBtn.click();
            }
        });
    
        // Mouse down event
        imageList.addEventListener('mousedown', (event) => {
            isDragging = true;
            startX = event.clientX; // Record the X coordinate when the mouse is pressed
            currentX = startX;
            window.addEventListener('mousemove', dragging); // Add mouse move event
        });
    
        // Mouse up event
        window.addEventListener('mouseup', endDrag);
    
        // Mouse leave event
        imageList.addEventListener('mouseleave', endDrag);

        // Save image event
        saveBtn.addEventListener('click', ()=>{
           // let src = document.getElementById('imgShow').src;
            let myname = document.getElementById('nameInput').value;
            var b=false
            totalImagesList.forEach(function (item) {
                if(item.name==myname)
                {
                    // alert(myname);
                    b=true;

                }
            });
            if(b==false) {
                totalImagesList.push({
                    src: mainimgsrc,
                    name: myname,
                    id: myname,
                    rv: main_r,
                    gv: main_g,
                    bv: main_b,
                    con: main_con,
                    bri: main_bri,
                    sat: main_sat,
                    ev: main_ev,
                    wb: main_wb
                });
                // console.log(totalImagesList)
                // 刷新图片列表
                createImgList();
                //alert("Successfully saved!");
            }
            // prevBtn.click();
            downloadTxtFile(myname + ".flt");
            modal1.style.display = "block";
        })
        document.getElementById('samimg1').addEventListener('click', img1Clicked,false);
        document.getElementById('samimg2').addEventListener('click', img2Clicked,false);
        document.getElementById('samimg3').addEventListener('click', img3Clicked,false);
       // document.getElementById('files').addEventListener('change', replaceImgFile, false);

        document.getElementById('loadFilter').onclick = function() {
            document.getElementById('fileInput').click(); // Trigger the file input click
        };

        function getFileName(fileName) {
            // Split the file name by the dot character
            const parts = fileName.split('.');
            
            // Check if there's more than one part (to avoid errors with files without extensions)
            if (parts.length > 1) {
                // Return the first part, which is the name
                return parts.slice(0, -1).join('.'); // Join back if there are multiple dots
            } else {
                // If there’s no extension, return the original name
                return fileName;
            }
        }

        function processFileContent(content, filename) {
            // alert("process File content");
            // alert("currentPos : " + totalImagesList.length);
            
            const dataParts = content.split(',');
            updateSlider(dataParts[1], dataParts[3], dataParts[5], dataParts[7], dataParts[9], dataParts[11]);
            let myname = filename;
            var b=false
            totalImagesList.forEach(function (item) {
                if(item.name==myname)
                {
                    // alert(myname);
                    b=true;

                }
            });
            if(b==false) {
                totalImagesList.push({
                    src: myname,
                    name: getFileName(myname),
                    id: getFileName(myname),
                    rv: dataParts[1],
                    gv: dataParts[3],
                    bv: dataParts[5],
                    bri: dataParts[7],
                    con: dataParts[9],
                    sat: dataParts[11],
                });
                // 刷新图片列表
                createImgList();

                main_r=dataParts[1];
                main_g=dataParts[3];
                main_b=dataParts[5];
                main_con=dataParts[9];
                main_bri=dataParts[7];
                main_sat=dataParts[11];
                main_wb=0;
                main_ev=0;
                updateSlider(main_r, main_g, main_b, main_bri, main_con, main_sat);

                // alert('The image is clicked!'+totalImagesList[pos].id+ main_r+','+ main_g+ ','+main_b+','+ main_bri+','+ main_con+','+ main_sat);
                bf= new fabric.Image.filters.Brightness({
                    brightness: ((main_bri-50)/50)
                });
                cf=   new fabric.Image.filters.Contrast({
                    contrast: ((main_con-50)/50)
                });
                sf=   new fabric.Image.filters.Saturation({
                    saturation: ((main_sat-50)/50)
                });
                gf=  new fabric.Image.filters.Gamma({
                    gamma: [main_r/50+0.01, main_g/50+0.01, main_b/50+0.01]
                });

                load_myfilter("imgShow",mainimg.offsetWidth,mainimg.offsetHeight);
            }
        }

        document.getElementById('fileInput').addEventListener('change', function(event) {
            const file = event.target.files[0]; // Get the first selected file

            if (file) {

                //alert(file.name);
                
                const reader = new FileReader();

                // Define what happens when the file is read
                reader.onload = function(e) {
                    const fileContent = e.target.result; // Get the file content
                    processFileContent(fileContent, file.name); // Call the function to process the file content
                };

                
                
                reader.readAsText(file); // Read the file as text
            }
        });

        // After the page is loaded, execute the code

        // Clear the totalImagesList to avoid duplicates
        totalImagesList.length = 0; // Clear the array

        // After the page is loaded, execute the code
        fetchFltFiles();

        fabric.filterBackend = new fabric.Canvas2dFilterBackend();
        bf = new fabric.Image.filters.Brightness({
            brightness: ((main_bri - 50) / 50)
        });
        cf = new fabric.Image.filters.Contrast({
            contrast: ((main_con - 50) / 50)
        });
        sf = new fabric.Image.filters.Saturation({
            saturation: ((main_sat - 50) / 50)
        });
        gf = new fabric.Image.filters.Gamma({
            gamma: [main_r / 50 + 0.01, main_g / 50 + 0.01, main_b / 50 + 0.01]
        });

        load_myfilter("imgShow", mainimg.offsetWidth, mainimg.offsetHeight);
        createImgList();
        // Trigger upload
        Replacebtn.addEventListener('click', () => {
            filesInput2.click();
        });

        // ... existing code ...

        function fetchFltFiles() {
            fetch('defaultFlt/')
                .then(response => response.text())
                .then(html => {
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(html, 'text/html');
                    const links = doc.querySelectorAll('a');
                    const fltFiles = Array.from(links)
                        .map(link => link.href)
                        .filter(href => href.endsWith('.flt'))
                        .map(href => href.split('/').pop());
        
                    let processedFiles = 0;
                    const totalFiles = fltFiles.length;
        
                    fltFiles.forEach(file => {
                        fetch(`defaultFlt/${file}`)
                            .then(response => response.text())
                            .then(content => {
                                processFileContent1(content, file);
                                processedFiles++;
                                if (processedFiles === totalFiles) {
                                    createImgList(); // Call createImgList only when all files are processed
                                }
                            })
                            .catch(error => {
                                console.error('Error fetching .flt file:', error);
                                processedFiles++;
                                if (processedFiles === totalFiles) {
                                    createImgList(); // Ensure createImgList is called even if there's an error
                                }
                            });
                    });
                })
                .catch(error => console.error('Error fetching directory listing:', error));
        }
        
        function processFileContent1(content, filename) {
            const dataParts = content.split(',');
            if (dataParts.length >= 12) {
                const newEntry = {
                    src: 'img/top.jpg',
                    name: getFileName(filename),
                    id: getFileName(filename),
                    rv: parseInt(dataParts[1]),
                    gv: parseInt(dataParts[3]),
                    bv: parseInt(dataParts[5]),
                    bri: parseInt(dataParts[7]),
                    con: parseInt(dataParts[9]),
                    sat: parseInt(dataParts[11]),
                    ev: 0,
                    wb: 0
                };
        
                let exists = totalImagesList.some(item => item.name === newEntry.name);
                if (!exists) {
                    totalImagesList.push(newEntry);
                }
            }
        }
    };
  })();