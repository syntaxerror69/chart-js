var ctx = document.getElementById('myChart').getContext('2d');
var earning = document.getElementById('earning').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ['RedTube', 'BlueWhale','GoGreen'],
        datasets: [{
            label: 'Used Website',
            data: [32, 36, 40,],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
           
        }]
    },
    options: {
        responsive:true,
    }
});
 
var myChart = new Chart(earning, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue','Yellow','Teal','purple','orange'],
        datasets: [{
            label: 'earning',
            data: [32, 36, 40,25,12,17],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
           
        }]
    },
    options: {
        responsive:true,
    }
});
 