var stage;
var layer;// = new Konva.Layer();
var myfilter;
var myimg;
var bf,cf,sf,gf;
var canvas;// = this.__canvas = new fabric.Canvas('imgShow');
var filters = ['grayscale', 'invert', 'remove-color', 'sepia', 'brownie',
	'brightness', 'contrast', 'saturation', 'vibrance', 'noise', 'vintage',
	'pixelate', 'blur', 'sharpen', 'emboss', 'technicolor',
	'polaroid', 'blend-color', 'gamma', 'kodachrome',
	'blackwhite', 'blend-image', 'hue', 'resize'];
//var canvas = this.__canvas = new fabric.Canvas('mgShow');
/*function  set_stage(id,w,h)
{

	stage = new Konva.Stage({
		container: 'imgShow',
		width: w,
		height: h,
	});
	layer = new Konva.Layer();
	//var layer = new Konva.Layer();
	stage.add(layer);


	// lets define a custom filter:
	var OpacityFilter = function (imageData) {
		// make all pixels opaque 100%
		var nPixels = imageData.data.length;
		for (var i = 3; i < nPixels; i += 4) {
			imageData.data[i] = 255;
		}
	};

	Konva.Image.fromURL(mainimgsrc, function (image) {
		layer.add(image);

		image.setAttrs({
			width: w,
			height: h,
			borderSize: 5,
			borderColor: 'red',
		});
		myfilter=image;
		myfilter.filters([Konva.Filters.Contrast,Konva.Filters.Brighten,Konva.Filters.RGB]);
		myfilter.cache();
		//	image['Brighten'](-10);
		myfilter.contrast(0);
		myfilter.brightness(0);
		myfilter['red'](0);
		myfilter['green'](255);
		myfilter['blue'](255);

		//	image['red'](10);
		//image['green'](100);
		//image['blue'](10);
		//image['brightness'](1);
		//image['contrast'](100);
		image.cache();
	});


}
*/

function applyFilter(index, filter) {
	var obj = myfilter.getActiveObject();
	obj.filters[index] = filter;
    obj.applyFilters();
    canvas.renderAll();
}


function applyFilterValue(index, prop, value) {
	var obj = myfilter.getActiveObject();
	if (obj.filters[index]) {
		obj.filters[index][prop] = value;

		obj.applyFilters();

		myfilter.renderAll();
	}
}

function  updatefiter()
{
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
		gamma: [main_r/50>0?(main_r/50):0.01, main_g/50>0?(main_g/50):0.01, main_b/50>0?(main_b/50):0.01]
	});
	canvas.Image.applyFilters();
	canvas.renderAll();


}





function load_myfilter(id, w, h) {
    return new Promise((resolve, reject) => {
        if (canvas) canvas.dispose(); // Properly dispose of the old canvas

        canvas = new fabric.StaticCanvas(id, { 
            width: w, 
            height: h, 
            selection: false, 
            multiSelect: false, 
            hoverCursor: 'pointer',
            moveCursor: 'pointer',
            allowTouchScrolling: false
        });

        fabric.Image.fromURL(mainimgsrc, function(oImg) {
            if (!oImg) {
                console.error("Image could not be loaded.");
                alert("myfilter.js file said: Image could not be loaded.");
                reject(new Error("Image loading failed."));
                return;
            }

            // Scale image to fit canvas
            oImg.scaleToWidth(w);
            oImg.scaleToHeight(h);

            myimg = oImg;
            
            // Apply filters
            myimg.filters.push(
                new fabric.Image.filters.Brightness({ brightness: (main_bri - 50) / 50 }),
                new fabric.Image.filters.Contrast({ contrast: (main_con - 50) / 50 }),
                new fabric.Image.filters.Saturation({ saturation: (main_sat - 50) / 50 }),
                new fabric.Image.filters.Gamma({
                    gamma: [
                        Math.max(main_r / 50, 0.01),
                        Math.max(main_g / 50, 0.01),
                        Math.max(main_b / 50, 0.01)
                    ]
                })
            );

            myimg.applyFilters();
            canvas.setBackgroundImage(myimg, canvas.renderAll.bind(canvas));

            resolve(canvas);
        }, { crossOrigin: 'anonymous' });
    });
}