function star1(){
	var inputs=document.getElementById("starValue").value;
	var result="";
	if(inputs==""){
		alert("please input data first...");
		return;
	}
	for (var i = 0; i < inputs; i++) {
		for (var j = 0; j <= i; j++) {
			result+="* ";
		}
		result+="<br/>";
	}		
	document.getElementById('star').innerHTML = result;
	}
function star2(){
	var inputs=document.getElementById("starValue").value;
	var result="";
	if(inputs==""){
		alert("please input data first...");
		return;
	}
	for (var i = inputs; i >= 0; i--) {
		for (var j = 0; j < i; j++) {
			result+="* ";
		}
		result+="<br/>";
	}		
	document.getElementById('star').innerHTML = result;
}
function star3(){
	var inputs=document.getElementById("starValue").value;
	var result="";
	if(inputs==""){
		alert("please input data first...");
		return;
	}			
	for (var i = 0; i < inputs; i++) {
		for (var j = i; j < inputs-1; j++) {
			result+="...";
		}			
		for (var j = 0; j <= i*2; j++) {
			result+="* "
		}
		result+="<br/>";
	}
	document.getElementById('star').innerHTML = result;
}
function star4(){
	var inputs=document.getElementById("starValue").value;
	var result="";
		if(inputs==""){
			alert("please input data first...");
			return;
		}			
		for (var i = 0; i < inputs; i++) {
			for (var j = 0; j < i; j++) {
				result+="...";
			}			
			for (var j = (inputs*2)-1;j > i*2 ; j--) {
				result+="* ";
			}
			result+="<br/>";
		}
		document.getElementById('star').innerHTML = result;
	}
function star5(){
	var inputs=document.getElementById("starValue").value;
	var result="";
	if(inputs==""){
		alert("please input data first...");
		return;
	}		
	if(inputs%2==0){
		inputs=inputs-1;
	}		
	for(var i=1; i<inputs/2+1; i++){
       	for(var j=i-1; j<inputs/2-1; j++){
           	result+="...";
       	}
       	for(var k=1; k<i*2; k++){
          	result+="* ";
       	}
       	result+="<br/>";
   	}
   	for(var i=(inputs/2); i>=1; i--){
       	for(var j=inputs/2+1; j>i; j--){
           	result+="...";
       	}
       	for(var k=1; k<(i*2)-1; k++){
           	result+="* "
       	}
       	result+="<br/>";
  	}
	document.getElementById('star').innerHTML = result;
}
function star6(){
	var inputs=document.getElementById("starValue").value;
	var result="";
	if(inputs==""){
		alert("please input data first...");
		return;
	}		
	if(inputs%2==0){
		inputs=inputs-1;
	}	
	for (var i = 0; i < inputs/2; i++) {
		for (var j = 0; j < i; j++) {
			result+="...";
		}			
		result+="*<br/>";
	}
	for (var i = 0; i < (inputs/2)-1; i++) {
		for (var j = i; j < (inputs/2)-2; j++) {
			result+="...";
		}			
		result+="*<br/>";
	}
	document.getElementById('star').innerHTML = result;
}
function star7(){
	var inputs=document.getElementById("starValue").value;
	var result="";
	if(inputs==""){
		alert("please input data first...");
		return;
	}
	if(inputs%2==0){
		inputs=inputs-1;
	}
	for (var i = inputs/2-1; i >=0 ; i--) {
		for (var j = 0; j < i; j++) {
			result+="...";
		}			
		result+="*<br/>";
	}
	for (var i =  inputs/2 ; i >= 0 ; i--) {
		for (var j = i-2; j < (inputs/2)-2; j++) {
			result+="...";
		}			
		result+="*<br/>";
	}
	document.getElementById('star').innerHTML = result;
}