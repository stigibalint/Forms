function focusFunction(id) {
    document.getElementById(id).style.background = "mediumslateblue";
}

function blurFunction(id) {
    document.getElementById(id).style.background = "white";
}

function submit(){
    console.log(document.getElementById('mNeve').innerHTML)
    console.log(document.getElementById('mCim').innerHTML)
    console.log(document.getElementById('phone').innerHTML)
    document.getElementById('visszaigazol_nev').innerHTML = document.getElementById('mNeve').value;
    document.getElementById('visszaigazol_cim').innerHTML = document.getElementById('mCim').value;
    document.getElementById('visszaigazol_tel').innerHTML = document.getElementById('phone').value;
}