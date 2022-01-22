const labels = [
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Domingo'
];

const workingDataSet = {
    label: 'Ventas',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: [8, 10, 5, 2, 20, 30, 45]
};

const config = {
    type: 'line',
    data: {
        labels: labels,
        datasets: [workingDataSet]
    },
    options: {}
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);

$("#btnGuardar").on("click", () => {
    var dia = parseInt($("#dia_semana").val());
    var cant = parseFloat($("#cantidad").val());

    workingDataSet.data[dia] += cant;
    myChart.update();
});