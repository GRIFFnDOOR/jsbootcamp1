
function makeContactRowClickable() {
	$(".table > tbody > tr").click( function(){
		var newUrl = window.location.href;
		if (newUrl.charAt(newUrl.length) != "/") {
			newUrl = newUrl + "/";
		}
		newUrl = newUrl + $(this).data("contact-guid");
		window.location.href = newUrl;
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

function multiply(a,b) {
	return a*b;
}

module.exports.multiply = multiply;
module.exports.sortCol = sortCol;