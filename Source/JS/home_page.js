function validateFunc(){
	var warrName = document.getElementById('warriorName').value;
	var warr = document.getElementById("avatarImage").getAttribute("src");
	var attack0 = document.getElementById("attR0").getAttribute("value");
	var attack1 = document.getElementById("attR1").getAttribute("value");
	var attack2 = document.getElementById("attR2").getAttribute("value");

	if(warr == "../Images/avatar_dragon.svg"){
		var warrType = 0;
	}else if(warr == "../Images/avatar_hackerman.svg"){
		var warrType = 1;
	}else if(warr == "../Images/avatar_marvin.svg"){
		var warrType = 2;
	}else if(warr == "../Images/avatar_tesla.svg"){
		var warrType = 3;
	}else if(warr == "../Images/avatar_unicorn.svg"){
		var warrType = 4;
	}

	const warriorObj = {"Name": warrName, 
						"WarriorType": warrType, 
						"Attacks":[parseInt(attack0, 10), parseInt(attack1, 10), parseInt(attack2, 10)]};

	if(validateFormName(warriorObj.Name)== 0){
		alert('You must enter a name for your warrior!');
	}else if(validateFormAttack(warriorObj.Attacks) == 0){
		alert('You must select attacks for all rounds!')
	}else{
		JSONpostRegister(warriorObj.Name, warriorObj.WarriorType, warriorObj.Attacks);
		window.location.href = '../HTML/fight.html';
	}
}

function validateFormName(warrName) {
	if(warrName.length == 0){
		return 0;
	}
	return 1;
}

function validateFormAttack(attacks){
	if(attacks[0] == 3 || attacks[1] == 3 || attacks[2] == 3){
		return 0;
	}
	return 1;
}

function attackReroute(ids){
	window.location.href = '../HTML/attacks.html';
}

function avatarSelection(){
	var value = document.getElementById("avatarImage").getAttribute("value");
	window.document.location = '../HTML/avatar_selection.html' + '?value=' + value;
	//onloadAS();
}

function onloadFunc(){
	var avatar;
	let string = document.location.search.replace(/^.*?\=/, '');

	if(string == ''){
		avatar = Math.floor(Math.random() * Math.floor(5));
	}else{
		avatar = parseInt(string, 10);
	}

	if(avatar == 0){
		document.getElementById("avatarImage").src = "../Images/avatar_dragon.svg";
		document.getElementById("avatarImage").setAttribute("value", 0);
	}else if(avatar == 1){
		document.getElementById("avatarImage").src = "../Images/avatar_hackerman.svg";
		document.getElementById("avatarImage").setAttribute("value", 1);
	}else if(avatar == 2){
		document.getElementById("avatarImage").src = "../Images/avatar_marvin.svg";
		document.getElementById("avatarImage").setAttribute("value", 2);
	}else if(avatar == 3){
		document.getElementById("avatarImage").src = "../Images/avatar_tesla.svg";
		document.getElementById("avatarImage").setAttribute("value", 3);
	}else if(avatar == 4){
		document.getElementById("avatarImage").src = "../Images/avatar_unicorn.svg";
		document.getElementById("avatarImage").setAttribute("value", 4);
	}else{
		console.log("There has been an error!");
	}

	var warr = document.getElementById("avatarImage").getAttribute("src");
	var warrName = document.getElementById('warriorName').value;
	var attack0 = document.getElementById("attR0").getAttribute("value");
	var attack1 = document.getElementById("attR1").getAttribute("value");
	var attack2 = document.getElementById("attR2").getAttribute("value");

	if(warr == "../Images/avatar_dragon.svg"){
		var warrType = 0;
	}else if(warr == "../Images/avatar_hackerman.svg"){
		var warrType = 1;
	}else if(warr == "../Images/avatar_marvin.svg"){
		var warrType = 2;
	}else if(warr == "../Images/avatar_tesla.svg"){
		var warrType = 3;
	}else if(warr == "../Images/avatar_unicorn.svg"){
		var warrType = 4;
	}

	const warriorObj = {"Name": warrName, 
						"WarriorType": warrType, 
						"Attacks":[parseInt(attack0, 10), parseInt(attack1, 10), parseInt(attack2, 10)]};

	var array;
	if(string == ''){
		array = shuffle(warriorObj.Attacks);
		attackSelect(warriorObj.WarriorType, array);
	}else{
		attackSelect(warriorObj.WarriorType, warriorObj.Attacks);
	}
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function JSONpostRegister(name, warriorType, attacks){
	var session_id = Math.floor(Math.random() * Math.floor(10));
	var letsJSON = {
				"jsonrpc" : "2.0",
				"method" : "Register",
				"id" : session_id,
				"params":{
					"Application":{
						"Name": name,
						"WarriorType": warriorType,
						"Attacks": [attacks[0], attacks[1], attacks[2]]
					}
				}
			};

		$.ajax({
			url : "https://recruitment-test.ants.house/jsonrpc2/whawhai/v1",
			method : 'POST',
			data: JSON.stringify(letsJSON),
			dataType : "json",
			success : function(result) {
				console.log(result)
			},
		});
	}

function attackSelect(warrType, attacks){
	if(warrType == 1){
		switch(attacks[0]){
			case 0:
			document.getElementById("attR0").setAttribute("value", "0");
			document.getElementById("attR0").innerHTML = "Cyber";
			break;
			case 1:
			document.getElementById("attR0").setAttribute("value", "1");
			document.getElementById("attR0").innerHTML = "System32 error";
			break;
			case 2:
			document.getElementById("attR0").setAttribute("value", "2");
			document.getElementById("attR0").innerHTML = "Norton Antivirus";
			break;
			case 3:
			document.getElementById("attR0").innerHTML = "Attack for Round #1";
		}
		switch(attacks[1]){
			case 0:
			document.getElementById("attR1").setAttribute("value", "0");
			document.getElementById("attR1").innerHTML = "Cyber";
			break;
			case 1:
			document.getElementById("attR1").setAttribute("value", "1");
			document.getElementById("attR1").innerHTML = "System32 error";
			break;
			case 2:
			document.getElementById("attR1").setAttribute("value", "2");
			document.getElementById("attR1").innerHTML = "Norton Antivirus";
			break;
			case 3:
			document.getElementById("attR1").innerHTML = "Attack for Round #2";
		}
		switch(attacks[2]){
			case 0:
			document.getElementById("attR2").setAttribute("value", "0");
			document.getElementById("attR2").innerHTML = "Cyber";
			break;
			case 1:
			document.getElementById("attR2").setAttribute("value", "1");
			document.getElementById("attR2").innerHTML = "System32 error";
			break;
			case 2:
			document.getElementById("attR2").setAttribute("value", "2");
			document.getElementById("attR2").innerHTML = "Norton Antivirus";
			break;
			case 3:
			document.getElementById("attR2").innerHTML = "Attack for Round #3";
		}
	}
	if(warrType == 2){
		switch(attacks[0]){
			case 0:
			document.getElementById("attR0").setAttribute("value", "0");
			document.getElementById("attR0").innerHTML = "Depression #1";
			break;
			case 1:
			document.getElementById("attR0").setAttribute("value", "1");
			document.getElementById("attR0").innerHTML = "Depression #2";
			break;
			case 2:
			document.getElementById("attR0").setAttribute("value", "2");
			document.getElementById("attR0").innerHTML = "Depression #3";
			break;
			case 3:
			document.getElementById("attR0").innerHTML = "Attack for Round #1";
		}
		switch(attacks[1]){
			case 0:
			document.getElementById("attR1").setAttribute("value", "0");
			document.getElementById("attR1").innerHTML = "Depression #1";
			break;
			case 1:
			document.getElementById("attR1").setAttribute("value", "1");
			document.getElementById("attR1").innerHTML = "Depression #2";
			break;
			case 2:
			document.getElementById("attR1").setAttribute("value", "2");
			document.getElementById("attR1").innerHTML = "Depression #3";
			break;
			case 3:
			document.getElementById("attR1").innerHTML = "Attack for Round #2";
		}
		switch(attacks[2]){
			case 0:
			document.getElementById("attR2").setAttribute("value", "0");
			document.getElementById("attR2").innerHTML = "Depression #1";
			break;
			case 1:
			document.getElementById("attR2").setAttribute("value", "1");
			document.getElementById("attR2").innerHTML = "Depression #2";
			break;
			case 2:
			document.getElementById("attR2").setAttribute("value", "2");
			document.getElementById("attR2").innerHTML = "Depression #3";
			break;
			case 3:
			document.getElementById("attR2").innerHTML = "Attack for Round #3";
		}
	}
	if(warrType == 0){
		switch(attacks[0]){
			case 0:
			document.getElementById("attR0").setAttribute("value", "0");
			document.getElementById("attR0").innerHTML = "Fire-Spitting";
			break;
			case 1:
			document.getElementById("attR0").setAttribute("value", "1");
			document.getElementById("attR0").innerHTML = "Dragon-Claw";
			break;
			case 2:
			document.getElementById("attR0").setAttribute("value", "2");
			document.getElementById("attR0").innerHTML = "Pound";
			break;
			case 3:
			document.getElementById("attR0").innerHTML = "Attack for Round #1";
		}
		switch(attacks[1]){
			case 0:
			document.getElementById("attR1").setAttribute("value", "0");
			document.getElementById("attR1").innerHTML = "Fire-Spitting";
			break;
			case 1:
			document.getElementById("attR1").setAttribute("value", "1");
			document.getElementById("attR1").innerHTML = "Dragon-Claw";
			break;
			case 2:
			document.getElementById("attR1").setAttribute("value", "2");
			document.getElementById("attR1").innerHTML = "Pound";
			break;
			case 3:
			document.getElementById("attR1").innerHTML = "Attack for Round #2";
		}
		switch(attacks[2]){
			case 0:
			document.getElementById("attR2").setAttribute("value", "0");
			document.getElementById("attR2").innerHTML = "Fire-Spitting";
			break;
			case 1:
			document.getElementById("attR2").setAttribute("value", "1");
			document.getElementById("attR2").innerHTML = "Dragon-Claw";
			break;
			case 2:
			document.getElementById("attR2").setAttribute("value", "2");
			document.getElementById("attR2").innerHTML = "Pound";
			break;
			case 3:
			document.getElementById("attR2").innerHTML = "Attack for Round #3";
		}
	}
	if(warrType == 3){
		switch(attacks[0]){
			case 0:
			document.getElementById("attR0").setAttribute("value", "0");
			document.getElementById("attR0").innerHTML = "Shaker-Machine";
			break;
			case 1:
			document.getElementById("attR0").setAttribute("value", "1");
			document.getElementById("attR0").innerHTML = "AC Voltage";
			break;
			case 2:
			document.getElementById("attR0").setAttribute("value", "2");
			document.getElementById("attR0").innerHTML = "Radio Waves";
			break;
			case 3:
			document.getElementById("attR0").innerHTML = "Attack for Round #1";
		}
		switch(attacks[1]){
			case 0:
			document.getElementById("attR1").setAttribute("value", "0");
			document.getElementById("attR1").innerHTML = "Shaker-Machine";
			break;
			case 1:
			document.getElementById("attR1").setAttribute("value", "1");
			document.getElementById("attR1").innerHTML = "AC Voltage";
			break;
			case 2:
			document.getElementById("attR1").setAttribute("value", "2");
			document.getElementById("attR1").innerHTML = "Radio Waves";
			break;
			case 3:
			document.getElementById("attR1").innerHTML = "Attack for Round #2";
		}
		switch(attacks[2]){
			case 0:
			document.getElementById("attR2").setAttribute("value", "0");
			document.getElementById("attR2").innerHTML = "Shaker-Machine";
			break;
			case 1:
			document.getElementById("attR2").setAttribute("value", "1");
			document.getElementById("attR2").innerHTML = "AC Voltage";
			break;
			case 2:
			document.getElementById("attR2").setAttribute("value", "2");
			document.getElementById("attR2").innerHTML = "Radio Waves";
			break;
			case 3:
			document.getElementById("attR2").innerHTML = "Attack for Round #3";
		}
	}
	if(warrType == 4){
		switch(attacks[0]){
			case 0:
			document.getElementById("attR0").setAttribute("value", "0");
			document.getElementById("attR0").innerHTML = "Rainbowshit";
			break;
			case 1:
			document.getElementById("attR0").setAttribute("value", "1");
			document.getElementById("attR0").innerHTML = "Candypuke";
			break;
			case 2:
			document.getElementById("attR0").setAttribute("value", "2");
			document.getElementById("attR0").innerHTML = "Cornlove";
			break;
			case 3:
			document.getElementById("attR0").innerHTML = "Attack for Round #1";
		}
		switch(attacks[1]){
			case 0:
			document.getElementById("attR1").setAttribute("value", "0");
			document.getElementById("attR1").innerHTML = "Rainbowshit";
			break;
			case 1:
			document.getElementById("attR1").setAttribute("value", "1");
			document.getElementById("attR1").innerHTML = "Candypuke";
			break;
			case 2:
			document.getElementById("attR1").setAttribute("value", "2");
			document.getElementById("attR1").innerHTML = "Cornlove";
			break;
			case 3:
			document.getElementById("attR1").innerHTML = "Attack for Round #2";
		}
		switch(attacks[2]){
			case 0:
			document.getElementById("attR2").setAttribute("value", "0");
			document.getElementById("attR2").innerHTML = "Rainbowshit";
			break;
			case 1:
			document.getElementById("attR2").setAttribute("value", "1");
			document.getElementById("attR2").innerHTML = "Candypuke";
			break;
			case 2:
			document.getElementById("attR2").setAttribute("value", "2");
			document.getElementById("attR2").innerHTML = "Cornlove";
			break;
			case 3:
			document.getElementById("attR2").innerHTML = "Attack for Round #3";
		}
	}
}

/*I'm writing this so that function attackSelect is safe and protected and doesn't feel lonely. Also I'm using multi line comment because I have mild ocd and this look prettier.*/