
$(document).ready(function(){

	var currentDiv = "#p3";
	$("#p2").hide();
	$("#p1").hide();
	$("#p4").hide();
	$("#p5").hide();

	function swap(one, two){
		$(one).show();
		$(two).hide();
	}

	$("#experience").click(function(){
		swap("#p5", currentDiv);
		currentDiv = "#p5";
	})


	$("#projects").click(function(){
		swap("#p1", currentDiv);
		currentDiv = "#p1";
	})

	$("#resume").click(function(){
		swap("#p2", currentDiv);
		currentDiv = "#p2";
	})

	$("#profile").click(function(){
		swap("#p3", currentDiv);
		currentDiv = "#p3";
	})

	$("#skills").click(function(){
		swap("#p4", currentDiv);
		currentDiv = "#p4";
	})


/*
	$("#experience").click(function (){
		$("#p5").animate({
			"left": "+=100px"

		}, "fast" );

	});

	$("#experience").click(function (){
		$("#p5").toggle("slide");

	});
*/
});