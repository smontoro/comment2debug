//declare constants for textarea, button, and input
var addPostInput = document.querySelector('input.addPostInput');
var addTextArea = document.querySelector('textarea.addInput');
var addPostButton = document.querySelector('button.addPostButton');
var counter = 0;

//event listener for posting functionality
addPostButton.addEventListener('click', function() {
var body = document.getElementsByTagName('body')[0];

var postBody = document.createElement('div');
postBody.className = 'postBody';

var header = document.createElement('h1');
header.className = 'postHeader';
header.textContent = addPostInput.value;

var p = document.createElement('p');
p.className = 'bodyContent';
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
postBody.appendChild(buttonDiv)
postBody.id = counter

//append all buttons to the buttonDiv
// buttonDiv.appendChild(up);
// buttonDiv.appendChild(down);
buttonDiv.appendChild(remove);
buttonDiv.appendChild(showHide);
buttonDiv.appendChild(up);
buttonDiv.appendChild(down);

body.appendChild(postBody);

addPostInput.value = '';
addTextArea.value = '';

up.addEventListener('click', function(){
    if(event.target.parentElement.parentElement.id != 0) {
        document.body.insertBefore(event.target.parentElement.parentElement, 
        document.getElementById(parseInt(event.target.parentElement.parentElement.id) - 1));
        event.target.parentElement.parentElement.id = parseInt(event.target.parentElement.parentElement.id) - 1;
    }
})

down.addEventListener('click', function(){
    if(document.getElementById(parseInt(event.target.parentElement.parentElement.id) + 2) == null && document.getElementById(parseInt(event.target.parentElement.parentElement.id) + 1) != null) {
        document.body.insertBefore(document.getElementById(parseInt(event.target.parentElement.parentElement.id) + 1), event.target.parentElement.parentElement)
    } 
    event.target.parentElement.parentElement.id = parseInt(event.target.parentElement.parentElement.id) + 1
})

//create event listener for up, down, remove buttons
remove.addEventListener('click', function(event) {
	body.removeChild(postBody);
})

//create hide/show event listener for showHide button
showHide.addEventListener('click', function() {
	if(postBody.style.display == 'none') {
		showHide.textContent = 'Hide';
		postBody.style.display = 'block';
		// up.style.display = 'inline-block';
		// down.style.display = 'inline-block';
		remove.style.display = 'inline-block';
	} else {
		showHide.textContent = 'Show';
		showHide.style.margin = '0.5em 0.5em 0.5em 0';
		postBody.style.display = 'none';
		// up.style.display = 'none';
		// down.style.display = 'none';
		remove.style.display = 'none';
	}
})
counter++;

});

