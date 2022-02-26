var clock = document.getElementById('clock');
var date = document.getElementById('date');

var interval = setInterval(() =>{

    var dateT = new Date();
    
    var day = dateT.getDate();
    var month = dateT.getMonth();
    var year = dateT.getFullYear();

    clock.innerHTML = dateT.toLocaleTimeString();
    date.innerHTML = dateT.toLocaleDateString();
},1000);