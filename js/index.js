const display = document.querySelector('.display');

document.querySelectorAll('.digits button')
   .forEach( button => button.addEventListener('click', digitPressed));
   
function digitPressed(ev) {
   display.value += ev.target.innerText;

}  
document.querySelector('.reset').addEventListener('click', reset);
     function reset() {
         display.value = " ";         

}
document.querySelectorAll('.opers button')
   .forEach( button => button.addEventListener('click', digitPressed));
   
function opersPressed(ev) {
   display.value += ev.target.innerText;
}  
document.querySelector('.eq').addEventListener('click', calculate);

function calculate(){
    display.value = eval(display.value);

}
calcClear.on('click', function () {
    calcDisplay.val('');
});
function Decimal () 
{
		var curReadOut = Fcalc.ReadOut.value;
		if (FlagNewNum) 
		{
			curReadOut = "0.";
			FlagNewNum = false;
		}
		else
		{
			if (curReadOut.indexOf(".") == -1)
				curReadOut += ".";
		}
		Fcalc.ReadOut.value = curReadOut;
}

