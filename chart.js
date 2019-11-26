document.getElementById("logout_button").addEventListener("click", signout);
document.getElementById("home_button").addEventListener("click", account_page);

var start_time = retrieve_value("start_time");
var end_time = retrieve_value("end_time");
var first_emoji = retrieve_value("first_emoji");
var second_emoji = retrieve_value("second_emoji");
console.log((end_time - start_time) / 1000);

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    xAxisID: 'Time in seconds',
    yAxisID: 'Mood Rating',
    data: {
        datasets: [{
            label: 'Your mood over time',
            data: [{x: 0, y: first_emoji}, 
            {x: ((end_time - start_time) / 1000)
            , y: second_emoji}],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        },
        {
            label: 'Previous mood',
            data: [{x: 0, y: first_emoji}, 
            {x: ((end_time - start_time) / 1000)
            , y: second_emoji}],
            backgroundColor: "rgba(225,0,0,0.4)",
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Mood Rating',
                },

                ticks: {
                    min: 1,
                    max: 5,
                    stepSize: 1
                }
            }],

            xAxes: [{
                type: 'linear',
                scaleLabel: {
                    display: true,
                    labelString: 'Time in seconds'
                },

                position: 'bottom'
            }]
        }
    }
});