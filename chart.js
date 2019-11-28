
document.getElementById("logout_button").addEventListener("click", signout);
document.getElementById("home_button").addEventListener("click", account_page);

var start_time = retrieve_value("start_time");
var end_time = retrieve_value("end_time");
var first_emoji = retrieve_value("first_emoji");
var second_emoji = retrieve_value("second_emoji");
var prev_time = retrieve_value("prevTime")
var prev_mood_val_beg = retrieve_value("prevMoodValBeg")
var prev_mood_val_after = retrieve_value("prevMoodValAfter")
var avg_mood_val_beg = retrieve_value("averageValueBeg")
var avg_mood_val_after = retrieve_value("averageValueAfter")
var avg_time = retrieve_value("averageTime")

datasets = []
datasets.push({
    label: 'Current mood over time',
    fill: false, 
    data: [{x: 0, y: first_emoji}, 
    {x: ((end_time - start_time) / 1000)
    , y: second_emoji}],
    backgroundColor: [
        'rgba(255, 99, 132, 1)',

    ],
    borderColor: [
        'rgba(255, 99, 132, 1)',

    ],
    borderWidth: 1,
});
if(prev_time != 0) {
    datasets.push({
        label: 'Previous mood',
        fill: false, 
        data: [{x: 0, y: prev_mood_val_beg}, 
        {x: ((prev_time) / 1000)
        , y: prev_mood_val_after}],
        backgroundColor: [
            'rgba(15, 20, 100, 1)'
        ],
        borderColor: [
            'rgba(15, 20, 100, 1)'
        ],
        borderWidth: 1,
    })
}

if(avg_time != 0) {
    datasets.push({
        label: 'Average (' + retrieve_value("total") + ' instances)',
        fill: false, 
        data: [{x: 0, y: avg_mood_val_beg}, 
        {x: ((avg_time) / 1000)
        , y: avg_mood_val_after}],
        backgroundColor: [
            'rgba(153, 255, 192, 1)'
        ],
        borderColor: [
            'rgba(153, 255, 192, 1)'
        ],
        borderWidth: 1,
    })
}

console.log((end_time - start_time) / 1000);

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    xAxisID: 'Time in seconds',
    yAxisID: 'Mood Rating',
    data: {
        datasets: datasets
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

var request = new XMLHttpRequest()
var diff = end_time - start_time;
request.open('POST', 'https://imoodypopup-backend-1.herokuapp.com/data/' + localStorage.getItem("email") + '?time=' + diff + "&prevVal="+ first_emoji + "&postVal=" + second_emoji, false)
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
    Object.keys(data).forEach(function(key) {
      localStorage.setItem(key, data[key]);
  });
  
  } else {
    console.log('error')
  }
}

request.send();