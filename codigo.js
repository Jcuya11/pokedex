$(document).ready(function(){


	$("#form").submit(function(){

		var pokemon = $("#pokemon").val();

		$.ajax("https://pokeapi.co/api/v2/pokemon/"+pokemon+"/").done(function(data){
			$("#pk_name").html(data.name);
			$("#pk_id").html("# "+data.id);
			$("#pk_weight").html(data.weight+" kg");
			// Extracción de datos por 'sub-carpetas'
			data.types.forEach(element => {
				var type = element.type.name;
				$("#pk_type").append("<div class='"+type+"'>"+type+"</div>");
			});
			
		});

		return false;

	});

});