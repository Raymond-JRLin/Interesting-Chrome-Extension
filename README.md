# Interesting-Chrome-Extension
A small interesting Chrome extension to realize words replacements

This Chrome extension makes you replace some words you want to replace in any website, like FSU -> Florida State Community College LOL.

## Manifest declaration 
The first thing we need to do is to create a manifest file named manifest.json containing properties like your extension's name, version, what kind of websites you want to enable this extension like fus.edu and so on. This is a file in JSON formate to let Chrome know about your extension.

## Other necessary files

In manifest declaration, we are telling our manifest to use Seminole.png as our icon, popup.html as our popup, and content.js as our script. We will need to create those files in the same root directory of project, or the same level as the manifest.

All files can be completed download here. You can change those words you want replace in getMappings function in content.js.

### popup.html
It shows the more info about this extension when you move your mouse upon the icon.

### Seminole.png
It would be our extension icon shown after the address bar in Chrome. You feel free to change it as what you like.

### content.js
It is the script telling Chrome what you want him to do and how to do, there are some functions inside: 

1. doReplacement: catch all elemetns in a webpage
2. getMappings: describe the mapping relations of original words and replacements, it would returns a dictionary (in js this is really just an object) where the key is the keyword, and the value is an array of potential strings to replace they keyword with
3. getWords: uses above mapping to return a list of just the keywords
4. getReplacement: we should determine which replacement word should be used when given a key word,we will be generating a random integer in the range [0, length of list) to determine which word in the list to use

You can add a CSS file and a JavaScript file and add them to your html file. 

## Load the extension
1. Visit chrome://extensions/ in your browser
2. If you have not done so yet, enable developer mode. There is a checkbox in the top right corner - make sure this is checked
3. Click Load unpacked extension and select the directory that contains all of the files we have just created

If everything worked fine, the extension should be loaded and you should see the icon to the right of the address bar. You can go back to this page to update the extension whenever you have modified files locally.


Now you can surf any webpage to check what happened~ 


P.S. FSU is a good university haha
