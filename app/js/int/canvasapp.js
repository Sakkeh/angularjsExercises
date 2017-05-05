window.addEventListener("load", eventWindowLoaded, false);

	

function eventWindowLoaded () {
	canvasApp();
}

function canvasApp () {		
	
	var canvas = document.getElementById("canvas");
	// Offscreen canvas
	//var canvas = document.createElement('canvas');
	
	var context = canvas.getContext("2d");	
	
	function drawScreen() {
		context.fillStyle = "#ffffff";
		context.fillRect(0, 0, canvas.width-1, canvas.height-1);
		context.fillStyle = "#000000";
		context.font = "20px Sans-Serif";
		context.textBaseline = "top";
		context.fillText ("Hello World!", 30, 30 );
		context.strokeStyle = "#000000";
		context.strokeRect(0.5, 0.5, 594, 841);		
	}		
	drawScreen();
	
	function downloadCanvas(link, canvasId, filename) {
	    
	    //link.href = document.getElementById(canvasId).toDataURL();
	    //link.download = filename;
	    // Covert to TIFF using Data-URI (slower, larger size)
		CanvasToTIFF.toDataURL(canvas, function(url) {
		  //var a = document.querySelector("a");
		  //link.href = "data:application/octet-stream;base64," + url;
		  link.href = url;
		  link.download = filename;
		  //link.innerHTML = "Right-click this link, select Save As to save the TIFF";
		});
	    
	    
	}	
	
	document.getElementById('download').addEventListener('click', function() {
	    downloadCanvas(this, 'canvas', 'test.tiff');
	}, false);	
}
