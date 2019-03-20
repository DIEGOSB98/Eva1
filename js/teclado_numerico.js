var i=0;	
$(document).ready(function(){
	$('.table_teclado tr td').click(function(){
		var number = $(this).text();
		
		if (number == '')
		{
			$('#campo').val($('#campo').val().substr(0, $('#campo').val().length - 1)).focus();
			$('#campo2').val($('#campo2').val().substr(0, $('#campo2 	').val().length - 1)).focus();
		}
		else
		{


			$('#campo2').val($('#campo2').val() + number).focus();				
			$('#campo').val($('#campo').val() + "*").focus();				

		}
		i++;
	});
	
});

function mensaje(){

	var clave=document.getElementById("campo2").value;

	if(clave=="1998"){

		alert("CLAVE CORRECTA ...");
		location.href="menu.html";

	}else{

		alert("ACCESO DENEGADO, INTENTELO NUEVAMENTE ...");

	}

}
function mensaje2(){

	alert("Próximamente!!!");

}