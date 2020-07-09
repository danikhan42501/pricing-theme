$(document).ready(function(){
	$('#getvalue').keypress(function(event){

		let keycode = (event.keyCode ? event.keyCode : event.which);
		if(keycode == '13'){
			my_Function();

		}

	});	

});


$(function(){
	$("#btn1").click(function(){
		$('.collapse').slideUp("fast");
		$('#collapseOne').slideToggle("slow");
	});
	$("#btn2").click(function(){
		$('.collapse').slideUp("fast");
		$('#collapseTwo').slideToggle("slow");
	});
	$("#btn3").click(function(){
		$('.collapse').slideUp("fast");
		$('#collapseThree').slideToggle("slow");

	});
});



let  company_array = [];


function my_Function() {
	let text='' ;
	let asign=$("#getvalue").val();
	if(asign==="" ){
		return 0;

	}
	company_array.push(asign);														
	company_array.sort();

	let length = company_array.length;

	for(i=0; i < length; i++) {

		text += "<option>" + company_array[i] + "</option>";

		console.log(company_array[i]);

	}

	$("#demosds7878").html(text);

	$("#getvalue").val('');

	console.log(text);

}
function removeElenment(){


	let text = '';
	let ASIGN=$("#getvalue").val() ;
	console.log(ASIGN);

	let index = company_array.indexOf(ASIGN);
	console.log(index);
	if(ASIGN === '' || index === -1)
	{
		alert("First enter the company or company not found");
		return false;
	}
	console.log(index);
	company_array.splice(index,1);
	$("#getvalue").val('');

	length = company_array.length;
	for(i=0; i < length; i++) {

		text += "<option>" + company_array[i] + "</option>";
	}

	$("#demosds7878").html(text);

}	


function show_hide(company){
	if(company == '') {
		document.getElementById('showhide').style.display = 'none';
	} else {
		document.getElementById('showhide').style.display = 'block';
	}

			// let x=document.getElementById('showhide').innerHtml= ;
			// 	if ( x.style.display ==='none';) {
			// 		display=class;

			// 	}
			// 	else{
			// 		x.style.display ='none';
			// 	}

		}


		function total() {

			let tot = 0;
			let dis= 0;
			let x = document.getElementsByClassName("input");
			let i;

			for (i = 0; i < x.length; i++) {
				tot += parse(x[i].value);
			}

			dis = parse(document.getElementById('discount').value);
			if (tot > 0 && tot<=dis )

			{
				alert('value is greater than Total');

				return;
			}

			document.getElementById('total').value = tot - dis;

				//tot = 0;
			}

			function parse(val) {
				let v = parseFloat(val);

				return isNaN(v) ? 0 : v;
			}

			function myFunction() {
				let x, text;


				x = document.getElementById("numb").value;


				if (isNaN(x) || x < 1 || x > 10) {
					text = "Input not valid";
				} else {
					text = "Input OK";
				}
				document.getElementById("demo").innerHTML ='<div class="alert alert-danger">no out of range</div>';;
			}