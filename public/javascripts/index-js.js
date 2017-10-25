$(document).ready(function() {

	// Catholic News / Prayer Section UI / Functionality

	var currentState = 1;
	
	$('.news-prayer-switch').click(function() {
  		
	if($(this).attr('id') == "news-input"){
		if(currentState == 1){
			console.log('you cant click the 1 button because its already being displayed');
			return;
		} else {
			console.log('You Clicked the Option 1 Button');
			currentState = 1;
		}		
	} else {
		if(currentState == 2){
			console.log('you cant click the 2 button because its already being displayed');
			return;
		} else {
			console.log('You Clicked the Option 2 Button');
			currentState = 2;
		}
		
	}

	});
});