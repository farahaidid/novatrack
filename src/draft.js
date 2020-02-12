function init(){
    
    // if not logged
	var token = $('#getID').val(); // get token from input
	if (!token) { // if token is empty - print message to log
		alert("Enter token");
	} 

	wialon.core.Session.getInstance().initSession("https://hst-api.wialon.com"); // init session
    // For more info about how to generate token check
    // http://sdk.wialon.com/playground/demo/app_auth_token
	wialon.core.Session.getInstance().loginToken(token, "", // try to login
		function (code) { // login callback
		    // if error code - print error message
			if (code){ alert(wialon.core.Errors.getErrorText(code)); return; }
			console.log("Logged successfully"); getUnits()// when login suceed then run init() function
	});
}
 function getUnits(){
	var sess = wialon.core.Session.getInstance();
	var flags = wialon.item.Item.dataFlag.base | wialon.item.Unit.dataFlag.sensors | wialon.item.Unit.dataFlag.lastMessage | wialon.item.Unit.dataFlag.netConn;

	sess.loadLibrary("itemIcon"); // load Icon Library	
	sess.loadLibrary("unitSensors");
	sess.updateDataFlags( // load items to current session

	[{type: "type", data: "avl_unit", flags: flags, mode: 0}], // Items specification
		function (code) { // updateDataFlags callback
    		if (code) { alert(wialon.core.Errors.getErrorText(code)); return; } // exit if error code

            // get loaded 'avl_unit's items  
	    	var units = sess.getItems("avl_unit");
    		if (!units || !units.length){ alert("Units not found"); return; } // check if units found

		    for (var i = 0; i< units.length; i++){ // construct Select object using found units
			    var u = units[i]; // current unit in cycle
			    // append option to select
				// $("#units").append("<option value='"+ u.getId() +"'>"+ u.getName()+ "</option>");
				var Status = '-'
				var Satellite_Strength = '-'
				var Vehicle_No = '-'
				var Group = '-'
				var Date_Time = '-'
				var Speed = '-'
				var Mileage = '-'
				var Today_Mileage = '-'
				var Idling = '-'
				var Location = '-'
				var Battery = '-'
				var Coordinates = '-'
				var Fuel1L = '-'
				var Fuel1percent = '-'
				var Fuel2L = '-'
				var Fuel2percent = '-'
				var Temperature = '-'
				var Trailer_ID = '-'
				var Driver = '-'
				var RFID = '-'
				var PTO = '-'
				var Command = '-'
				var Start_Time = '-'
				var Media = '-'
				var Video = '-'
				var arrSens = u.getSensors()
				var nc = ''

				if (u.getNetConn() == 1){
					nc = '<i class="material-icons greenonl">fiber_manual_record</i>'
				}
				else{
					nc = '<i class="material-icons redofl">fiber_manual_record</i>'
				}

				for (const key in arrSens) {
					if ((arrSens[key].n).toUpperCase() == 'IGNITION') {
						sens = u.getSensor(arrSens[key].id)
						ignVal = u.calculateSensorValue(sens, u.getLastMessage());
						if (ignVal != '-348201.3876'){
							Status = ignVal
						}
					}
					if ((arrSens[key].n).toUpperCase() == 'FUEL (L)'){
						sens1 = u.getSensor(arrSens[key].id)
						flVal =  u.calculateSensorValue(sens1, u.getLastMessage());
						if (flVal != '-348201.3876'){
							Fuel1L = flVal.toFixed(2)
						}
					}

					if ((arrSens[key].n).toUpperCase() == 'MILEAGE SENSOR'){
						sens2 = u.getSensor(arrSens[key].id)
						milVal =  u.calculateSensorValue(sens2, u.getLastMessage());
						if (milVal != '-348201.3876'){
							Mileage = milVal.toFixed(2)
						}
					}

					if ((arrSens[key].n).toUpperCase() == 'BATTERY'){
						sens3 = u.getSensor(arrSens[key].id)
						batVal =  u.calculateSensorValue(sens3, u.getLastMessage());
						if (batVal != '-348201.3876'){
							Battery = batVal
						}
					}

					if ((arrSens[key].n).toUpperCase() == 'FUEL (%)'){
						sens3 = u.getSensor(arrSens[key].id)
						flpVal =  u.calculateSensorValue(sens3, u.getLastMessage());
						if (flpVal != '-348201.3876'){
							Fuel1percent = flpVal.toFixed(2)
						}
					}
				}

				if (Status == 1){
					Status = '<p id=st>' + nc + '<i class="material-icons greenonl">local_shipping</i>' + '</p>'
				}
				else{
					Status = '<p id=st>' + nc + '<i class="material-icons redofl">local_shipping</i>' + '</p>'
				}

				icon = u.getIconUrl()
				Vehicle_No = "<p id=vimg><img class='icon' src='"+ icon +"' alt='icon'/>"  + u.getName() + '</p>'
				// Status = u.getNetConn()
					
					// save for refreshes
					
				position = u.getPosition();
				if ((position == null || position.x == null || position.y == null)){
					Coordinates = '-'
				}
				else{
					Coordinates = position.x + ", " + position.y 
					Speed = position.s
					Date_Time = wialon.util.DateTime.formatTime(position.t)
					var ajData = {
						"flags": " 0",
						"city_radius": " 0",
						"dist_from_unit": " 0",
						"txt_dist": " ",
						"house_detect_radius": "0",
						"coords": "[{\"lon\":" + position.x +",\"lat\":" + position.y + "}]",
						"uid": sess.getCurrUser()._id,
						"sid": $('#getSID').val()
					  }
	
					Location = $.ajax({
						type: "POST",
						url: "https://geocode-maps.wialon.com/hst-api.wialon.com/gis_geocode",
						contentType: 'application/x-www-form-urlencoded',
						data: ajData,
						// processData: false,
						async: false
					}).responseText.replace('[',"").replace(']',"").replace('"',"").replace('"',"")
				}


				template = '<td>' + Status + '</td><td>' + Satellite_Strength + '</td><td>' + Vehicle_No + '</td><td>' + Group + '</td><td>' + Date_Time + '</td><td>' + Speed + '</td><td>' + Mileage + '</td><td>' + Today_Mileage + '</td><td>' + Idling + '</td><td class=loc id = locAddr' + i + '>' + Location + '</td><td>' + Battery + '</td><td id = locCoord' + i + '>' + 
				Coordinates + '</td><td>' + Fuel1L + '</td><td>' + Fuel1percent + '</td><td>' + Fuel2L + '</td><td>' + Fuel2percent + '</td><td>' + Temperature + '</td><td>' + Trailer_ID + '</td><td>' + Driver + '</td><td>' + RFID + '</td><td>' + PTO + '</td><td>' + Command + '</td><td>' + Start_Time + '</td><td>' + Media + '</td><td>' + Video + '</td>'
			newRowContent = "<tr><td>" + u.getId() + "</td><td>" + u.getName()+"</td>"
			$("#example tbody").append('<tr>' + template + '</tr>');
			}
			// $("#example").DataTable();
            // bind action to select change event
		    // $("#units").change( getSelectedUnitInfo );
	    }
	);
}


$(document).ready(function () {
	init()
	// $("#example_paginate").hide();
	// $("#example_info").hide();
	// $("#example_length").hide();
});

// async function updAddress(){
// 	var h = $('.loc')
// 	for(e=0;e<h.length;e++) {
// 		var idx = h[e].id.replace("locAddr", "")
// 		coord = $('#locCoord'+idx).text().split(",")
// 		const res = await getAddr(coord[0],coord[1])
// 		console.log(res)
// 	}
// }

// function getAddr(cordx, cordy){
// 	return new Promise((res,rej)=>{
// 		wialon.util.Gis.getLocations([{lon:cordx, lat:cordy}], function(code, addr){
// 			if(code){res(code);}
// 			res(addr)
// 		});
// 	})
// }

function urlencodeFormData(fd){
    var s = '';
    function encode(s){ return encodeURIComponent(s).replace(/%20/g,'+'); }
    for(var pair of fd.entries()){
        if(typeof pair[1]=='string'){
            s += (s?'&':'') + encode(pair[0])+'='+encode(pair[1]);
        }
    }
    return s;
}