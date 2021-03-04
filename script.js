// function to take user input and return a statement 
function compute()
{   
    // declare variables
    rate = Number(document.getElementById("rate").value);
    principal = Number(document.getElementById("principal").value);
    years = Number(document.getElementById("years").value);
    // write logic to determine interest from user input 
    interest = principal * rate * years/100;    
    // get current year and calculate return year from user input  
    date = new Date().getFullYear();
    year = date + years;
    // get location for return statemnt from elementID 
    result = document.getElementById('result');
    // if statement to determine if principal value entered is a positive integer 
    if (principal <=0) {
        alert('Enter a positive number')
        document.getElementById('principal').focus();
    }else {
    // return message broken into segments to accomodate highlighted values
    result.innerHTML = 'If you deposit ' + `<i>${principal}</i>` + ',<br>'
                     + 'at an interest rate of ' + `<i>${rate}%</i>` + '.<br>'
                     + 'You will receive an amount of ' + `<i>${interest}</i>`+ ',<br>'
                     + 'in the year ' + `<i>${year}</i>`
    }
}
// function to update rangeslider value 
function returnRate(){
    rate = Number(document.getElementById("rate").value)
    result = document.getElementById('return')
    result.innerHTML= rate + '%';
}
