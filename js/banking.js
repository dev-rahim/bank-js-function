//Update Total ammount after diposite and withdrow

function totalAmmounts(inputFildId, totalAmmountID) {
    const inputFild = document.getElementById(inputFildId);
    const inputFildNumber = parseFloat(inputFild.value);
    const previousTotalAmmountText = document.getElementById(totalAmmountID).innerText;
    const previousTotalAmmountNumber = parseFloat(previousTotalAmmountText);
    document.getElementById(totalAmmountID).innerText = previousTotalAmmountNumber + inputFildNumber;
    inputFild.value = '';
    return inputFildNumber;
}

//Update Total Balance after diposite and withdrow
function totalBalance(inputFildAmmount, ifAdd) {
    const totalBalanceText = document.getElementById('total-balance').innerText;
    const totalBalanceAmmount = parseFloat(totalBalanceText);
    if (ifAdd == true) {
        document.getElementById('total-balance').innerText = totalBalanceAmmount + inputFildAmmount;
    } else {
        document.getElementById('total-balance').innerText = totalBalanceAmmount - inputFildAmmount;
    }

}


// update  diposite total 
document.getElementById('diposit-button').addEventListener('click', function () {
    const dipositeFildAmmount = totalAmmounts('diposit-fild', 'diposite-total-ammount');
    totalBalance(dipositeFildAmmount, true);

    // const previousTotalDipositeAmmountText = document.getElementById('diposite-total-ammount').innerText;
    // const previousTotalDipositeAmmountFloatingNumber = parseFloat(previousTotalDipositeAmmountText);
    // const ammountOfNewdipositinText = dipositeInputFild.value;
    // const ammountOfNewdipositInFlotingNumber = parseFloat(ammountOfNewdipositinText);
    // document.getElementById('diposite-total-ammount').innerText = previousTotalDipositeAmmountFloatingNumber + ammountOfNewdipositInFlotingNumber;


    // update  balance total

    // const totalBalanceText = document.getElementById('total-balance').innerText;
    // const totalBalanceAmmount = parseFloat(totalBalanceText);
    // document.getElementById('total-balance').innerText = totalBalanceAmmount + ammountOfNewdipositInFlotingNumber;

    // console.log(totalBalanceAmmount + ammountOfNewdipositInFlotingNumber);

    // CLEAR FILD
    // dipositeInputFild.value = '';

})




// update  withdeow total 

document.getElementById('withdrow-button').addEventListener('click', function () {
    const widthrowAmmount = totalAmmounts('withdrow-fild', 'withdrow-total-ammount')
    totalBalance(widthrowAmmount, false);

    // const widthrowInputFild = document.getElementById('withdrow-fild');
    // const widthrowInputFildText = widthrowInputFild.value;
    // const widthrowAmmount = parseFloat(widthrowInputFildText);

    // const previusWithdeowTotalText = document.getElementById('withdrow-total-ammount').innerText;
    // const previusWithdeowTotalFloatNumber = parseFloat(previusWithdeowTotalText);

    // document.getElementById('withdrow-total-ammount').innerText = widthrowAmmount + previusWithdeowTotalFloatNumber;

    // UPDATE BALANCE 

    // const totalBalanceText = document.getElementById('total-balance').innerText;
    // const totalBalanceAmmount = parseFloat(totalBalanceText);
    // document.getElementById('total-balance').innerText = totalBalanceAmmount - widthrowAmmount;

    // CLEAR FILD 
    // widthrowInputFild.value = '';

})