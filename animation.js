 $(document).ready(function(){
	   
    var cloneTop = 0;
	  var cloneLeft = 0;
	  
	  $('.tile').click(function(){	  	
		$(this).clone().appendTo($(this).parent()).addClass('tile-clone');								
		var childPos = $(this).offset();
		var parentPos = $(this).parent().offset();
		var thisOffset = {
			top: childPos.top - parentPos.top,
			left: childPos.left - parentPos.left
		}					
		
		 cloneTop = thisOffset.top;
	     cloneLeft = thisOffset.left;
						
		$('.tile-clone')
		.css({'top':thisOffset.top + "px", 'left': + thisOffset.left + 'px'});		
		$('#content-overay').show().animate({'opacity': 0.4}, 200);		
		$('.tile-clone')
		.css({'top':0, 'left': 0})
		.addClass('animate');

		
		setTimeout(function(){
			$('#close').appendTo('.tile-clone').show();
			$('#clone-content').appendTo('.tile-clone').show();			
			
			setTimeout(function(){$('#clone-content .headline').addClass('animate');}, 20);
			setTimeout(function(){$('#clone-content .text').addClass('animate');}, 120);
			$('.cx, .cy').addClass('s1');
			setTimeout(function(){$('.cx, .cy').addClass('s2');}, 100);
			setTimeout(function(){$('.cx, .cy').addClass('s3');}, 200);
		}, 300);
	  });
	  	  
	  $('#close').click(function(){	
	  	$('.cx, .cy').removeClass('s1 s2 s3');
		$('.tile-clone').addClass('clearHover');
		$('#clone-content .headline').removeClass('animate');
     	$('#clone-content .text').removeClass('animate');
		$('#clone-content').fadeOut(200, function(){$(this).appendTo('.content');})
		setTimeout(function(){	$(this).hide();}, 100);				
			$('#close').fadeOut(200, function(){$(this).appendTo('.content');})
			
			setTimeout(function(){

				$('.tile-clone')
				.css({'top':cloneTop + "px", 'left': + cloneLeft + 'px'})
				.removeClass('animate')
				.delay(200)
				.fadeOut(200);				
				
				$('#content-overay').animate({'opacity': 0}, 300, function(){$(this).hide();});
				setTimeout(function(){
					$('.tile-clone').remove();										
				}, 400);
			}, 100);			
	  }); 		  
   });