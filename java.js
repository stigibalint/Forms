function focusFunction(id) {
    document.getElementById(id).style.background = "rgb(200,200,250)";
}

function blurFunction(id) {
    document.getElementById(id).style.background = "white";
}

function submit(){
   
    document.getElementById('visszaigazol_nev').innerHTML = document.getElementById('mNeve').value;
    document.getElementById('visszaigazol_cim').innerHTML = document.getElementById('mCim').value;
    document.getElementById('visszaigazol_tel').innerHTML = document.getElementById('phone').value;
}
