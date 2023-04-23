function BMICalculator(){
    //take input weight
    var weightInput = document.getElementById("weightInput").value
    //take input height
    var heightInput = document.getElementById("heightInput").value
    //apply formula:  weight (lb) / [height (in)]2 x 703
    var result = ((weightInput/(heightInput * heightInput)) * 703);
    //show Outpiut
    var messageOutput;
    if(result<18.5){
        messageOutput = "You are Underweight.";
    }
    else if(18.6<result<24.9)
    {
        messageOutput = "You are having a Healthy Weight." ;
    }
    else{
        messageOutput = "You are Overweight.";
    }
    
    
    
    document.getElementById("resultArea").innerHTML
     =
      `<p>${result}</p><p>${messageOutput}</p>`;
    }
    
    