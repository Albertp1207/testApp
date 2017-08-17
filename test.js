
$(".results").hide();
$(".answer").mouseover(function(){
	$(this).addClass("hoverQ")
})
$(".answer").mouseleave(function(){
	$(this).removeClass("hoverQ")
})


$(".answer").click(function(){			
		$(".answer:not(this)").removeClass("clickQ");
		$(this).addClass("clickQ");	
})

var n = 1; 
var result = 0;
$("#submit").click(function(){
	if($("#quest"+n+" .answer").hasClass("clickQ")) {
		$("#quest"+n+"").hide("slow");
		$("#quest"+(n+1)+"").show("slow");

		if ( $(".clickQ").hasClass("trueAnswer")) {
			++result;
		} else {
			$("#quest"+n+"").addClass("wrongClick");
		}

		$("li:nth-of-type("+n+")").css({"background":"#E3E4EA","color":"#5377FF"})

		++n;
	}
	
	if (n==5) {
			$("#submit").hide("fast");
			$(".results").show();
			$("#append").append(result);
			$(".questsMenu").hide("fast");
			$(".questDiv").show("slow");
			// $(".questDiv").css({"marginBottom":"5px","padding":"2px"})	 ???
			$(".quest").css("margin","5px")	
			$(".answer").removeClass("clickQ")
			$(".answer").off("mouseover")
			$(".answer").off("click")
			$(".wrongClick").css("border","2px solid #FF5A5A")
			$(".questDiv:not(.wrongClick)").css("border","2px solid #248C24")
			$(".trueAnswer").css("background","#1CA426")
			$(".answerDiv").css("padding","5px");

	}
})
