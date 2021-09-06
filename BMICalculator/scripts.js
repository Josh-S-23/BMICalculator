function calcBMI() {

    valueOne = document.getElementById("height").value;
    valueTwo = document.getElementById("weight").value;
    var bmi = valueTwo / (valueOne * valueOne) * 703;
    bmi = bmi.toFixed(1);
    document.getElementById("result").innerHTML = `Your BMI is ${bmi}`;
    if(bmi < 18.5) {
        document.getElementById("information").innerHTML = `You are underweight`;
    }
    else if (bmi > 18.5 && bmi < 24.9) {
        document.getElementById("information").innerHTML = `You are a healthy weight!`;
    }
    else if (bmi > 25.0 && bmi < 29.9 ) {
        document.getElementById("information").innerHTML = `You are overweight`;
    }
    else
    document.getElementById("information").innerHTML = 'You are obese';
}

