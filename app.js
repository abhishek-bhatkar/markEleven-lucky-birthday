const dateOfBirth = document.querySelector("#date-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumber = document.querySelector("#check-number");
const message = document.querySelector("#message-Field");
const error = document.querySelector(".error");

checkNumber.addEventListener('click',() => {
    console.log(dateOfBirth.value,luckyNumber.value);
    birthdayIsLucky();
});


function calculateSum(dateBirth){
    var str = dateBirth.split(""),sum = 0;

    for(i = 0 ; i < str.length ; i++){
        if(!isNaN(str[i])){
            sum += parseInt(str[i]);
        }
    }
    //console.log(sum);
    return sum;
};

function birthdayIsLucky(){
    
    const luckyNo = luckyNumber.value;
    const dateBirth = dateOfBirth.value;

    if(luckyNo =="" || dateBirth == ""){
        console.log("Invalid");
        error.style.display = "flex";
        message.innerText = "Please provide both values!";
        message.style = "color: red";
    }
   
    
    const sum = calculateSum(dateBirth);

    if(sum%luckyNo === 0){

    } else {
        
    }

};
