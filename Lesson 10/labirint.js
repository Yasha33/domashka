
var labScheme = {
	'NO': ['###', '###', '###'],
	'LR': ['###', '   ', '###'],
	'LT': ['# #', '  #', '###'],
	'BR': ['###', '#  ', '# #'],
	'LB': ['###', '  #', '# #'],
	'TR': ['# #', '#  ', '###']
};

render([
	['NO', 'BR', 'LR', 'LB', 'NO'],
	['LR', 'LT', 'NO', 'TR', 'LR']
]);

function render(mas) {

	var str = '';

	mas.forEach(element => {
		for (var i = 0; i < 3; i++) {
			element.forEach(key => str += labScheme[key][i]);
			str += '\n';
		}
	});
	console.log(str);
}


