
function pinGenerator(){
    const generatePin = Math.round(Math.random()*10000) + '';
    return generatePin;
};

function getPin(){
    const creatPin = pinGenerator();
    if(creatPin.length == 4){
        return creatPin;
    }else{
        console.log('PIN not four digits:', creatPin);
        return getPin();
    };
};

document.getElementById('pin-generator-btn').addEventListener('click', function(){
    const getPinNumber = getPin();
    console.log(getPinNumber);
    const pinDisplayField = document.getElementById('display-pin');
    // pinDisplayField.vlue = getPinNumber;
    pinDisplayField.value = getPinNumber;
});