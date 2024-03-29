"use strict"

let test_var = "I'm the testing var";

// This basically outputs text into the document
document.write("<p> This is an output via <i>write()</i> </p>");

// This thing finds a placeholder where id closure used (e.g. <someTag id="placeholder-name"> ... </someTag>)
document.getElementById('js-output-placeholder').innerHTML = `[ <b>This</b> is an output of <i class="code">${test_var}</i> via <i>getElementById()</i> ]`;

function term_decorate(txt) {
	var txt_decorated = "&gt;&nbsp;" + '<span class="line">'+ txt + '</span>';
	return txt_decorated;
}

function term(txt, placeholder) {
	var current_text = document.getElementById(placeholder).innerHTML
	var new_text;
	var txt_decorated = term_decorate(txt);
	if (current_text == "") {
		new_text = txt_decorated;
	} else {		
		new_text = current_text + "<br>" + txt_decorated;
	}
	document.getElementById(placeholder).innerHTML = new_text;
}

term("awoo", "js-terminal");
term("also awoo", "js-terminal");
