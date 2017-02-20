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

function save(){
	var save = { //variable for save file
    clicks: clicks,
    cursors: cursors
	};
	localStorage.setItem("save",JSON.stringify(save)); //code to save
};

function load(){
	var savegame = JSON.parse(localStorage.getItem("save")); //load a save file
	if (typeof savegame.clicks !== "undefined") clicks = savegame.clicks; //make sure clicks is defined when loading
	if (typeof savegame.cursors !== "undefined") cursors = savegame.cursors; //define cursors when loading
};

function deletesave(){
	localStorage.removeItem("save") //delete save file
};

window.setInterval(function(){
	
	Clicker(cursors);
	
}, 1000);