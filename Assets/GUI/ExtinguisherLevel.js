var seconds : String;
var textPosition : Rect;
var font: Font;

function Start()
{
	textPosition = Rect( 10 , Screen.height - 30, 1000, 30);
}

function OnGUI()
{
	GUI.Label(textPosition, "Extinguisher Level "+seconds+"s");
}
