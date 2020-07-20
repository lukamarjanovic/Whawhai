function avatarSelected(id){
	var value = document.getElementById(id).getAttribute("value");
	window.document.location = '../HTML/home_page.html' + '?value=' + value;
}

function onloadAS(){
	let string = document.location.search.replace(/^.*?\=/, '');
	console.log(string);
	var array = [0,1,2,3,4];
	for(var i = 0; i < 5; i++){
		if(parseInt(string, 10) == i){
			array.splice(i, 1);
		}
	}

	for(var i = 0; i < 4; i++){
		var mockid = "id" + i;
		document.getElementById(mockid).setAttribute("value", array[i]);
		if(array[i] == 0){
			document.getElementById(mockid).src = "../Images/avatar_dragon.svg";
		}else if(array[i] == 1){
			document.getElementById(mockid).src = "../Images/avatar_hackerman.svg";
		}else if(array[i] == 2){
			document.getElementById(mockid).src = "../Images/avatar_marvin.svg";
		}else if(array[i] == 3){
			document.getElementById(mockid).src = "../Images/avatar_tesla.svg";
		}else if(array[i] == 4){
			document.getElementById(mockid).src = "../Images/avatar_unicorn.svg";
		}else{
			console.log("There has been an error!");
		} 
	}
}