const clock = document.getElementById('clock');
const date = document.getElementById('date');

const interval = setInterval(() =>{

    const dateT = new Date();
    
    let day = dateT.getDate();
    let month = dateT.getMonth();
    let year = dateT.getFullYear();

    clock.innerHTML = dateT.toLocaleTimeString();
    date.innerHTML = dateT.toLocaleDateString();
},1000);