function onLoad(){
	console.log('javascript function is called');
	var data = getBarsAndButtons();
	
	var barCtr = document.getElementById('barContainer');
	var btnCtr = document.getElementById('buttonContainer');
	var ddlBox = document.getElementById('ddlBox');
	
	addBars(data.bars,barCtr);
	addButtons(data.buttons, btnCtr);
	addOptions(data.bars, ddlBox);
	fillDefaultColor(data.bars,barCtr);
}

function addOptions(options, ddlBox){
	var option,i;
	for(i = 0; i<options.length; i++){
		option = document.createElement('option');
		option.innerHTML = 'Progress bar '+(i+1);
		option.value = options[i];
		ddlBox.appendChild(option);
	}
}

function addButtons(buttons, btnCtr){
	var span, i;
	for(i = 0; i<buttons.length; i++){
		span = document.createElement('span');
		span.innerHTML = '<input type="button" class="btnStyle" value='+buttons[i]+' onclick="colorBars(this)">';
		btnCtr.appendChild(span);
	}
}

function colorBars(btn){
	var btnValue = parseInt(btn.value),
		selectedBar = document.getElementById("ddlBox").selectedIndex,
		selectBar = document.getElementById('bar'+selectedBar),
		barData = getBarsAndButtons(),
		barLimit = barData.limit,
		colorPercentage;

	if(parseInt(selectBar.value)) {
		colorPercentage = parseInt(selectBar.value) + parseInt(btnValue);
	} else {
		colorPercentage = parseInt(btnValue);
	}
	
	if(colorPercentage>0){
		if(colorPercentage<barLimit){
			selectBar.style.background = 'linear-gradient( 90deg, blue, white '+colorPercentage+'%, white )';
			selectBar.value = colorPercentage +'%';
		} else {
			selectBar.style.background = 'linear-gradient( 90deg, red, white '+colorPercentage+'%, white )';
			selectBar.value = colorPercentage +'%';
		}
	} else {
		selectBar.style.background = 'linear-gradient( 90deg, blue, white 0%, white )';
		selectBar.value = '0%';
	}

	
}
function addBars(bars, barCtr){
	var div, i,barId;
	for(i = 0; i<bars.length; i++){
		barId = "bar"+i;
		div = document.createElement('div');
		div.innerHTML = '<input type="text" value="" id="'+barId+'" class="barStyle">';
		barCtr.appendChild(div);
	}
}

function fillDefaultColor(bars,barCtr){
	var div, i,selectBar;
	for(i = 0; i<bars.length; i++){
		selectBar = document.getElementById('bar'+i);
		selectBar.style.background = 'linear-gradient( 90deg, blue, white '+bars[i]+'%, white )';
		selectBar.value = bars[i] +'%';
	}
}

var getBarsAndButtons = function(){
	var data = {
		"buttons": [
			10,
			38,
			-40,
			-18
		],
		"bars": [
			10,
			60,
			30,
			55
		],
		"limit": 100
	}
	return data;
}