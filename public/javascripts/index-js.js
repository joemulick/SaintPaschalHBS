$(document).ready(function() {

	// Catholic News / Prayer Section UI / Functionality

	// Here I add the class data-loaded to news-input so that later
	// I can reference that this data has already been loaded to DOM
	// from the database.
	$('news-input').addClass('data-loaded');

	var currentState = 1;
	var newsOutputContainerVar;
	var prayersOutputContainerVar;

	var tempData = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris";
	
	$('.news-prayer-switch').click(function() {
  		
	if($(this).attr('id') == "news-input"){
		if(currentState == 1){
			console.log('you cant click the 1 button because its already being displayed');
			return;
		} else {
			console.log('You Clicked the Option 1 Button');
			currentState = 1;

			prayersOutputContainerVar = $('#prayers-output-container');
			$('#news-and-prayer-outer-container').empty()

			$('#news-and-prayer-outer-container').append(newsOutputContainerVar);
		}		
	} else {
		if(currentState == 2){
			console.log('you cant click the 2 button because its already being displayed');
			return;
		} else {
			console.log('You Clicked the Option 2 Button');
			currentState = 2;

			if($(this).hasClass('loaded')){

			}
			console.log($(this).attr("id") + " : This should be button 2's ID");

			newsOutputContainerVar = $('#news-output-container');
			$('#news-and-prayer-outer-container').empty();

			$('#news-and-prayer-outer-container').append(tempData);

		}
		
	}

	});
});