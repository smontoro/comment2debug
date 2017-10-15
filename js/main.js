//declare constants for textarea, button, and input// sorting these elements in these variables 
var addPostInput = document.querySelector('#addPostInput');
var addTextArea = document.querySelector('#addPostInput');
var addPostButton = document.querySelector('#addPostButton');

//event listener for posting functionality
addPostButton.addEventListener('click', function() {
var body = document.getElementsByTagName('body')[0];

//creates a new div in the body
var postBody = document.createElement('div');
postBody.className = 'postBody';

//creates a new h1
var header = document.createElement('h1');
header.className = 'postHeader';
//add the input value into the h1 as text
header.textContent = addPostInput.value;

//creates a new p element
var p = document.createElement('p');
p.className = 'bodyContent';
//adds the textarea value as text into the new p element
p.textContent = addTextArea.value;

//create div for buttons
var buttonDiv = document.createElement('div');
buttonDiv.className = 'buttonDiv';

//create buttons for div
var up = document.createElement('button');
up.className = 'up';
up.textContent = 'Up';

var down = document.createElement('button');
down.className = 'down';
down.textContent = 'Down';

var remove = document.createElement('button');
remove.className = 'remove';
remove.textContent = 'Remove';

var showHide = document.createElement('button');
showHide.className = 'showHide';
showHide.textContent = 'Hide';

//append the header and body of textarea to the body within a div
postBody.appendChild(header);
postBody.appendChild(p);

//append all buttons to the buttonDiv
buttonDiv.appendChild(up);
buttonDiv.appendChild(down);
buttonDiv.appendChild(remove);
buttonDiv.appendChild(showHide);

body.appendChild(postBody);
body.appendChild(buttonDiv);

addPostInput.value = '';
addTextArea.value = '';

//create event listener for up, down, remove buttons

up.addEventListener('click', function() {
	if(event.target.tagName == 'BUTTON') {
		if(event.target.className == 'up') {
			body.
		}
	}

});







remove.addEventListener('click', function() {
	if(event.target.tagName == 'BUTTON') {
		if(event.target.className == 'remove') {
			body.removeChild(postBody);
			body.removeChild(buttonDiv);
		}
	}
});

//create hide/show event listener for showHide button
showHide.addEventListener('click', function() {
	if(postBody.style.display == 'none') {
		showHide.textContent = 'Hide';
		postBody.style.display = 'block';
		up.style.display = 'inline-block';
		down.style.display = 'inline-block';
		remove.style.display = 'inline-block';
	} else {
		showHide.textContent = 'Show';
		showHide.style.margin = '0.5em 0.5em 0.5em 0';
		postBody.style.display = 'none';
		up.style.display = 'none';
		down.style.display = 'none';
		remove.style.display = 'none';
	}
});

});

