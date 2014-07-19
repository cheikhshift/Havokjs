$(document).ready(function(e){
bindHO();
});
function bindHO(){
	
	//psub --
	
	$(".asub").click(function(e){
		e.preventDefault();
		$(".loader-prog").css('display', 'block');
		$.ajax({url: $(this).attr("path"), success:function(html){	
			
			$(".loader-prog").css('display', 'none');
			$(".alert-stored").html(html);
			
			
		}});
	});
	
	//used in app loading
	
	$(".prefixsub").each(function(e,i){
		var prefix = $(this).attr("prefix");
		var prefixsib = $(this).attr("target");
		$(".selfsub", this).click(function(e){
			$(".loader-prog").css('display', 'block');
			$.ajax({url: prefix + $(this).attr("path"), success:function(html){	
				
				$(".loader-prog").css('display', 'none');
				$(prefixsib).html(html);
				
				
			}});
		});
	});
	
	$(".psub").each(function(e,i){
		
		var path = $(this).attr("path");
		$('.xsub',this).change(function(e){
			$(".loader-prog").css('display', 'block');
			$.ajax({url: path, type:"POST", data: {target:$(this).attr("name"),data: $(this).val()},success:function(html){
				
				
				
				$(".loader-prog").css('display', 'none');
				$('.alert-stored').html(html);
				
				
			}});
			
		});
		
		$('.isub',this).change(function(e){
			$(".loader-prog").css('display', 'block');
			$.ajax({url: path, type:"POST", data: {target:$(this).attr("name"),data: $(this).is(":checked")},success:function(html){
				
				
				
				$(".loader-prog").css('display', 'none');
				$('.alert-stored').html(html);
				
				
			}});
			
		});
		
		
		
		
	});
	
	$(".xtrigger").click(function(e){
		
		$(".loader-prog").css('display', 'block');
		$.ajax({url: $(this).attr("path"), success:function(html){
			
			
		
			$(".loader-prog").css('display', 'none');
			$('#xmodal .modal-body').html(html);
			$('#xmodal').modal('show');
			
		}});
	});
	
	$(".strigger").click(function(e){
		
		$(".loader-prog").css('display', 'block');
		$.ajax({url: $(this).attr("path"), success:function(html){
			
		
			$(".loader-prog").css('display', 'none');
			$('.content-window').html(html);
			
			
		}});
	});

	
	$(".marker").each(function(e,i){
			
		//get formdata
		
		var marker = $(this);
		var path = $(this).attr("path");
		
		
		
		$('.dosub', this).click(function(e){
			var cancel = false;
			var req = {formheader: true};
			$('.xsub', marker).each(function(e,i){
				req[$(this).attr("name")] = $(this).val();
				if($(this).hasClass("required") && $(this).val() == ""){
					$(this).css('border-color','red');
					cancel = true;
					$(this).tooltip({title:"Required field"});
					$(this).tooltip('show');
				}
			});
			
			//execution
			if(!cancel){
			$(this).button('toggle');
			$('.loader-form').css('display', 'none');
			$('.hidden-aspect', marker).css('display', 'block');
			
			$.ajax({url: path, data: req, type:"POST", success:function(html){
				
				$(this).button('toggle');
				$('.loader-form').removeAttr('style');
				$('.hidden-aspect', marker).removeAttr('style');
				$('.loader-result', marker).html(html);
				
			}});
			}
			
			
		});
		
		
		$('.xsub').each(function(e,i){
			$(this).keypress(function(e) {
				  if (e.which == '13') {
				     e.preventDefault();
				     $(".dosub", marker).click();
				   }
				});
		});
		
		
	});
}