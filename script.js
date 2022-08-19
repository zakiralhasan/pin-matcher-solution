/* ****************************  Part-1 (PIN generat section)   ************************ */
// PIN generator function 
function pinGenerator(){
    const generatePin = Math.round(Math.random()*10000) + '';
    return generatePin;
};
// PIN modifying function 
function getPin(){
    const creatPin = pinGenerator();
    if(creatPin.length == 4){
        return creatPin;
    }else{
        console.log('PIN not four digits:', creatPin);
        return getPin();
    };
};
// PIN generate section 
document.getElementById('pin-generator-btn').addEventListener('click', function(){
    const getPinNumber = getPin();
    const pinDisplayField = document.getElementById('display-pin');
    pinDisplayField.value = getPinNumber;
});

/* ****************************  Part-2 (PIN match and submit section)   ************************ */
// key input section 
document.getElementById('key-container').addEventListener('click', function(event){
    const clickedKey = event.target.innerText;
    const getKeyInputNumber = document.getElementById('display-key');
    const previousKeyInputNumber = getKeyInputNumber.value;
    
    if(isNaN(clickedKey)){

        if(clickedKey === 'C'){
            getKeyInputNumber.value = '';

        }else if(clickedKey === '<'){
            const keySplit = previousKeyInputNumber.split('');
            keySplit.pop('');
            const keyJoin = keySplit.join('');
            getKeyInputNumber.value = keyJoin;
        };
    }else{
        let keyInputNumber = previousKeyInputNumber + clickedKey;
        const keyInputDisplay = document.getElementById('displah-key');
        getKeyInputNumber.value = keyInputNumber;
    };
});

// submit section 
document.getElementById('submit-btn').addEventListener('click', function(){
    const pinDisplayField = document.getElementById('display-pin').value;
    const getKeyInputNumber = document.getElementById('display-key').value;

    const pinMachedSymbol = document.getElementById('pin-matched-symbol');
    const pinDidnotMachedSymbol = document.getElementById('pin-didnot-match-symbol');

if(pinDisplayField === getKeyInputNumber){
    pinMachedSymbol.style.display = 'block';
    pinDidnotMachedSymbol.style.display = 'none';
}else{
    pinDidnotMachedSymbol.style.display = 'block';
    pinMachedSymbol.style.display = 'none';
};
});
