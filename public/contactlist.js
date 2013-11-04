function changeDir (dir) {
	var newUrl = window.location.href;
	if (newUrl[newUrl.length -1] != "/") newUrl += "/";
	window.location.href = newUrl + dir;
}

function makeContactRowClickable() {
	$("tbody > tr").click( function(e){
		changeDir($(this).data("contact-guid"));
	});
}

function makeEmailButtonClickable() {
	$('button.send-email').click( function(e){
		changeDir("email/" + $(this).parent().parent().data("contact-guid"));	
		e.stopPropagation();
	});
}

function makeTableHeadSortable() {
	$('th').click( function(){ 
		var cls = $(this).hasClass('descending')? 'ascending' : 'descending';

		$('.ascending').removeClass('ascending');
		$('.descending').removeClass('descending');

		$(this).addClass(cls);
		var col = ['Last','First','Nick','Company'].indexOf($(this).text().split(' ')[0]);
		sortCol(col, cls == 'ascending');
	});
}

// only works for strings
function sortCol(col, reversed) {
	var rows = $('tbody tr').detach().get();
	rows.sort( function(a,b){
		a = $(a).children()[col].innerHTML.toLowerCase();
		b = $(b).children()[col].innerHTML.toLowerCase();

		if (a == b) return 0;
		else return a<b ? -1 : 1;
	});
	$('tbody').append(reversed? rows.reverse() : rows);
}

///////  tests  /////////////

function multiply(a,b) {
	return a*b;
}

//module.exports.multiply = multiply;
//module.exports.sortCol = sortCol;