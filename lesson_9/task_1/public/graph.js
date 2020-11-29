    let colors = ['#28a745','#c3e6cb'];

    let myChart = document.getElementById('myChart')

    let dataChart = [ ];

    function y(x) {
        if( x >= 1) {
          return 5/x;
        } else {
            return x*x - 4*x;
        }
    }

    for (let i = -5; i <= 5; i += 0.01) {
        let a = {x: i, y: y(i)}
        dataChart.push(a)
    }

    var scatterChart = new Chart(myChart, {
        type: 'line',
        data: {
            datasets: [{
                label: 'Scatter Dataset',
                data: dataChart,
                backgroundColor: colors[1],
                borderWidth: 4,
                pointBackgroundColor: colors[0]
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    type: 'linear',
                    position: 'bottom'
                }]
            }
        }
    });

    