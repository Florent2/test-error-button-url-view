var win = Ti.UI.createWindow({
	backgroundColor: "#FFAADD"	
});  
var button = Ti.UI.createButton({
  width: 130,
  height: 46,
  backgroundImage: 'images/connect.png'
});
win.add(button);
win.open();

button.addEventListener('click', function()
{
	alert("button clicked!");
});