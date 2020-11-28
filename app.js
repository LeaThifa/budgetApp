

var valueList = [];

function countTotal(event){

    // Prevents the page to refresh (all data is stored in browser memory)
    event.preventDefault();

    // Selects + and - in select form in HTML and saves it as a value in var options.
    
    var options = document.querySelector("#selectOption");

    //If "+" is selected, run code below

    if(options.value === "+"){

        /* Selects the input fields (input:text and input:number) and stores the
           "value" to the declared elements */
        var description = document.querySelector("#description").value;
        var amount = document.querySelector("#amount").value;

        //Push amounts entered by the user in the array "valueList" and converts string to number

        valueList.push(Number(amount));

        // Adds all the income togeather with a for loop and final value is stored in addSum

        var earnings = document.querySelector(".earnings");
        earnings.innerText = amount + " kr";

        // Create a "li" element
        // Adds content from the input fields inside the created "li" element
        // Push the created "li" element inside the "ul" element
        var li = document.createElement("li");
        li.innerText = description + ": " + amount + " kr";
        var ul = document.querySelector(".profit");
        ul.appendChild(li);
    
    }

    // Same as above but if selects option to be populated when user selects "-"

    else if(options.value === "-"){

        var description = document.querySelector("#description").value;
        var amount = document.querySelector("#amount").value;

        valueList.push(Number(-amount));

        var expenditure = document.querySelector(".expenditure");
        expenditure.innerText = "-" + amount + " kr";

        var li = document.createElement("li");
        li.innerText = description + ": " + amount + " kr";
        var ul = document.querySelector(".cost");
        ul.appendChild(li);
    }

    // Calculation of Profit/Loss 

    var sum = 0;

    for(var i=0; i<valueList.length; i++){

        sum += valueList[i];
    }

    // Insert the value of "sum" in the span element (.profitOrLoss) in HTML

    var profitOrLoss = document.querySelector(".profitOrLoss");
    profitOrLoss.innerText = sum + " kr";


}

// Select the button in the HTML document
// When the button is clicked run function countTotal

var btn = document.querySelector(".add");
btn.addEventListener("click", countTotal);