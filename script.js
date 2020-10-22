const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    const details = document.getElementById('details');
    const resetBtn = document.getElementById('reset-btn');

    const bmi = (weight / ((height*height)/10000)).toFixed(2);
    
    if((height === '') || (height < 0) || (isNaN(height))){
        //NaN !== NaN
        results.innerHTML = "Please provide a valid height";
        
    } else if (weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = "Please provide a valid weight";
    } else {
    //calculate BMI
    
    //display the results
    results.innerHTML = `<span>${bmi}</span>`
    }

    if(bmi < 18.6){
        details.innerHTML = "You are underweight";
    } else if(bmi >= 18.6 && bmi <= 24.9 ){
        details.innerHTML = "You are normal";
    } else if(bmi > 24.9){
        details.innerHTML = "You are overweight";
    }

    
    
});

