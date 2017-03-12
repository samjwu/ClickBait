var clicks = 0;

function Clicker(number){
    clicks = clicks + number;
    document.getElementById('clicks').innerHTML = clicks;
};

var cursors = 0;

function buyCursor(){
    var cursorCost = Math.floor(10 * Math.pow(1.1,cursors)); 
    if(clicks >= cursorCost){                                   
        cursors = cursors + 1;                                   
    	clicks = clicks - cursorCost;                         
        document.getElementById('cursors').innerHTML = cursors;  
        document.getElementById('clicks').innerHTML = clicks;  
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,cursors));      
    document.getElementById('cursorCost').innerHTML = nextCost;
};

window.setInterval(function(){
	
	Clicker(cursors);
	
}, 1000);
