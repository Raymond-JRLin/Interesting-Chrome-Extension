
// returns a mapping of keywords to an array of replacements
var getMappings = function () {
	return {
		"fsu": ["fsu sucks!", "fsu < uf"],
		"seminoles": ["people who didn't get into UF", "semi_NULLS"],
		"florida state university": ["Florida State Community College"],
		"academics": ["\"academics\""],
		"football": ["crab lovers"]
	};
}

// returns an arrya of keywaords
var getWords = function () {
	var mapping = getMappings();
	return Object.keys(mapping);
}

// randomly select the replacements
var getReplacement = function (original) {
	var mapping = getMappings();
	var replacements = mapping[original];
	var index = Math.floor(Math.random() * (replacements.length));
	return replacements[index];
}
// if we wanna select a certain replacement we can do:
// var mapping = getMappings();
// mapping.fsu;
// mapping["fsu"];
// getReplacement("fsu");

var doTheReplacement = function () {
	// get all elements, like html, head, meta, title, bady, h1, p
	var elements = document.getElementsByTagName('*');

	for (var i = 0; i < elements.length; i++) {
		var wordsToReplace = getWords();
		// loop every elements in the page
		var element = elements[i];
		// loop every child element of element
		for (var j = 0; j < element.childNodes.length; j++) {
			// get the child element of current element, e.g. <h1>.nodeType => [text], <h1>.nodeType[0] => "real text in h1 tag"
			var node = element.childNodes[j];
			// found a node with text of what we wanna do, like FSU
			if (node.nodeType == Node.TEXT_NODE) {
				// TODO: Implement the rest of this
				var text = node.nodeValue;
				for (var k = 0; k < wordsToReplace.length; k++) {
					var word =  wordsToReplace[k];
					var replacement = getReplacement(word);
					var regex = new RegExp(word, "gi"); // g means global, i means case-insensitive
					var replacementText = text.replace(regex, replacement);
					if (replacementText !== text) {
						var newNode = document.createTextNode(replacementText);
						element.replaceChild(newNode, node);
						// replace original node and text with replaced node and text to do next loop
						node = newNode;
						text = replacementText;
					}
				}
			}
		}
	}
}
// created all variables we need 

// added function to call 
doTheReplacement();