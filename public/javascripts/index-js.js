$(document).ready(function() {

	// Catholic News / Prayer Section UI / Functionality

	//The button has logic so it cant already be clicked if its the current state.
	//After the user calls the most recent articles from the DB, the articles and
	//links get saved into a variable so we dont need to call the DB again if the
	//decides to click back and forth many times

	//Once the user clicks prayers, I make a ajax request to get data from a 
	//file which gets saved to a variable and also rendered to the screen.

	// Here I add the class data-loaded to news-input so that later
	// I can reference that this data has already been loaded to DOM
	// from the database.
	$('news-input').addClass('data-loaded');

	var currentState = 1;
	var newsOutputContainerVar;
	var prayersOutputContainerVar;

	// Here i will hard code in the prayers that are to be rendered on button click
	var prayersList = [
   'apostles-creed' : 'I believe in God, the Father Almighty, Creator of heaven and earth; and in Jesus Christ, His only Son, our Lord: Who was conceived by the Holy Spirit, born of the Virgin Mary; suffered under Pontius Pilate, was crucified, died and was buried. He descended into hell; the third day He rose again from the dead; He ascended into heaven, is seated at the right hand of God the Father Almighty; from thence He shall come to judge the living and the dead. I believe in the Holy Spirit, the Holy Catholic Church, the communion of Saints, the forgiveness of sins, the resurrection of the body, and life everlasting. Amen.',
   'our-father' : 'Our Father, Who art in Heaven, hallowed be Thy name; Thy Kingdom come, Thy will be done on earth as it is in Heaven. Give us this day our daily bread; and forgive us our trespasses as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.',
   'hail-mary' : 'Hail Mary full of Grace, the Lord is with thee. Blessed are thou among women and blessed is the fruit of thy womb Jesus. Holy Mary Mother of God, pray for us sinners now and at the hour of our death Amen. ',
   'glory-be' : 'Glory be to the Father, and to the Son, and to the Holy Spirit, as it was in the beginning, is now, and ever shall be, world without end. Amen.',
   'grace-meals' : 'Bless us, O Lord, and these Thy gifts, which we are about to receive from Thy bounty, through Christ our Lord. Amen.',
   'act-of-love' : 'O Lord God, I love you above all things and I love my neighbor for your sake because you are the highest, infinite and perfect good, worthy of all my love. In this love I intend to live and die. Amen.'
	];
	
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
