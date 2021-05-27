

function outputUpdate(value) {
	document.querySelector('#Rate').value = value;
}



function compute()  {
   
        
// this is the input value program
    
    
    
    
    let p = document.getElementById('principal').value;
    let r = document.getElementById('Rate').value;
    let t = document.getElementById('years').value;
    if (p <= 0) 
    {
         alert("Enter a positive number");
         document.getElementById("principal").focus();
         return false;
    }
    
    
   
    let result = (p * t * r) / 100;
    let ts = new Date().getFullYear()+parseInt(t);
    
    document.getElementById("result").innerHTML = "<br/> If you deposit <mark>" + p + "</mark><br/>" +
        "at an interest rate of <mark>" + r + "</mark><br/>" +
        "You will receive an amount of <mark>" + result.toFixed(2) + "</mark><br/> " +
        "in the year <mark>" + ts + "</mark><br/>";

}





