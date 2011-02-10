Titanium.API.info("in main.js");

var win = Ti.UI.currentWindow;
var button = Ti.UI.createButton({
  width: 130,
  height: 46,
//	backgroundColor: "#EECCDD"
  backgroundImage: 'images/connect.png'
});

button.addEventListener('click', function()
{
	alert("button clicked!");
});

win.add(button);

