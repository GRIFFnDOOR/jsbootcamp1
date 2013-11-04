
$('textarea').click( function(e){
	if (this.clicked) return;
	this.clicked = true;
	$(this).text('');
});

$('button.send-email').click( function(e){
	//Todo: make an email icon fly across the page
});