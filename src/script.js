var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
  $scope.myEmail = "walexy85@gmail.com";
  $scope.myPwd = "";
});





 //start of the document ready function
$(document).ready(function () {  


	
	$("#contac").on( {  
		
		
		mouseenter: function() {
		$("#contaccontent").fadeIn("fast");
		},
		
		mouseleave: function() {
		$("#contaccontent").fadeOut("fast");
		},
		
		click: function() {
		
		$(this).css("color","yellow");
		}
	
	});
	
	
	
	
	//script function for home tab effects
		$("#hme").on({    
		
		mouseenter: function() { 
		$(this).animate({fontSize: '30px', opacity: '0.9'}, "fast");
		$(this).css("color","lime");
		
		
		}, 
		
		mouseleave: function() {
		$(this).animate({left:'2px' ,fontSize:'15px', color: 'blue'}, "fast");
		
		},
		
		mouseenter: function() {
		$("#hmecontent").fadeIn("fast");
		$(this).css("color","red");
		},
		
		mouseleave: function() {
		$("#hmecontent").fadeOut("fast");
		$(this).css("color","blue");
		},
		
		
		
		click: function() {
		
		$(this).css("color","yellow");
		}
		
	});  
		//end of home tab effect	
		
		
	
	
	
	
$("#no2").on({
 
	mouseenter: function() {
	
	$("#pic2").fadeIn("fast");
	},
	
	mouseleave: function() {
	
	$("#pic2").fadeOut("fast");
	}

});




$("#no3").on({
 
	mouseenter: function() {
	
	$("#pic3").fadeIn("fast");
	},
	
	mouseleave: function() {
	
	$("#pic3").fadeOut("fast");
	}

});


$("#no4").on({
 
	mouseenter: function() {
	
	$("#pic4").fadeIn("fast");
	},
	
	mouseleave: function() {
	
	$("#pic4").fadeOut("fast");
	}

});




$("#no5").on({ 
   
	mouseenter:function() {
	
	$("#pic5").fadeIn("fast");
	
	},
	
	mouseleave: function() {
	
	$("#pic5").fadeOut("fast");
	}

});



$("#no6").on({

	mouseenter:function() {
	
	$("#pic6").fadeIn("fast");
	},
	
	mouseleave: function() {
	
	$("#pic6").fadeOut("fast");
			
	}

});



$("#no1").on({

	mouseenter: function() {
	
	$("#top").fadeIn("fast");
	},
	
	mouseleave: function() {
	
	$("#top").fadeOut("fast");
	}

});
	


	
	$("#one").click(function() {
		
	  $("#services").slideToggle("slow");
	  
	});	
	
	
	
	$("#two").click(function() {
		
	  $("#requestquote").slideToggle("fast");
	});	
	
	
	
	
	$("#three").click(function() {
		
	  $("#information").slideToggle("fast");
	});	
	
	
	
	$("#four").click(function() {
		
	  $("#ourcontact").slideToggle("fast");
	});	
	
	
	
	$("#five").click(function() {
		
	  $("#ouremail").slideToggle("fast");
	});	
	
	
	
	$("#six").click(function() {
		
	  $("#ourphone").slideToggle("fast");
	});	
	
	
	$("#seven").click(function() {
		
	  $("#ouradd").slideToggle("fast");
	});	
	
	
	
	$("#eight").click(function() {
		
	  $("#ourabout").slideToggle("fast");
	});	
	
	
	
}); //end of document.ready



//function displayFunc() {
  
 //var num = document.getElementById("#but");
  
 // var count=setTimeout(myFunc,500);
  
 // function myFunc() {
    
    
 // }
  
//}
 
