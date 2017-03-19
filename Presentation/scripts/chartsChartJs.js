// Chart.js code

Chart.defaults.global.legend.display = false;

// Demo 1
var chartjsConfig1 = {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March'],
        datasets: [
            {   
                data: [10, 30, 100]
            }
        ],
    }
};

var chartjsContext1 = document.getElementById('chartJsDemo1').getContext('2d');
var chartjsDemo1 = new Chart(chartjsContext1, chartjsConfig1);

// Demo 2
chartjsContext2 = document.getElementById('chartJsDemo2').getContext('2d');
var chartjsDemo2 = new Chart(chartjsContext2, chartjsConfig1);

// line
document.getElementById('chartjs-line').onclick = function(event) {
    event.preventDefault();
    chartjsDemo2.destroy();

    chartjsDemo2 = new Chart(chartjsContext2, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March'],
            datasets: [
                {   data: [10, 30, 100],
                    backgroundColor: [
                        'rgba(255, 99, 132, 1)'
                    ]
                }
            ]
        }
    });
};

// bar
document.getElementById('chartjs-bar').onclick = function(event) {
    event.preventDefault();
    chartjsDemo2.destroy();

    chartjsDemo2 = new Chart(chartjsContext2, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March'],
            datasets: [
                {   data: [10, 30, 100],
                    backgroundColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)'
                    ]
                }
            ]
        }
    });
};

// polar
document.getElementById('chartjs-polar').onclick = function(event) {
    event.preventDefault();
    chartjsDemo2.destroy();

    chartjsDemo2 = new Chart(chartjsContext2, {
        type: 'polarArea',
        data: {
            labels: ['January', 'February', 'March'],
            datasets: [
                {   data: [40, 100, 20],
                    backgroundColor: [
                        'rgba(255, 99, 132, .4)',
                        'rgba(54, 162, 235, .4)',
                        'rgba(255, 206, 86, .4)'
                    ]
                }
            ]
        }
    });
};

// polar
document.getElementById('chartjs-pie').onclick = function(event) {
    event.preventDefault();
    chartjsDemo2.destroy();

    chartjsDemo2 = new Chart(chartjsContext2, {
        type: 'pie',
        data: {
            labels: ['January', 'February', 'March'],
            datasets: [
                {   data: [40, 100, 20],
                    backgroundColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)'
                    ]
                }
            ]
        }
    });
};

// radar
document.getElementById('chartjs-radar').onclick = function(event) {
    event.preventDefault();
    chartjsDemo2.destroy();

    chartjsDemo2 = new Chart(chartjsContext2, {
        type: 'radar',
        data: {
            labels: ["a", "b", "c", "d", "e"],
            datasets: [
                {
                    label: "Group B",
                    backgroundColor: 'rgba(255, 206, 86, .1)',
                    borderColor: 'rgba(255, 206, 86, 1)',
                    data: [80, 100, 10, 70, 30]
                },
                {
                    label: "Group A",
                    backgroundColor: 'rgba(255, 99, 132, .1)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    data: [65, 59, 90, 81, 56]
                },
                {
                    label: "Group B",
                    backgroundColor: 'rgba(54, 162, 235, .1)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    data: [28, 48, 40, 19, 96]
                }
            ]
        }
    });
};

// bubble
document.getElementById('chartjs-bubble').onclick = function(event) {
    event.preventDefault();
    chartjsDemo2.destroy();

    chartjsDemo2 = new Chart(chartjsContext2, {
        type: 'bubble',
        data: {
            datasets: [
                {
                    data: [
                        {x: 20, y: 30, r: 15 },
                        {x: 40, y: 100,r: 10 },
                        {x: 50, y: 10, r: 40 },
                        {x: 70, y: 20, r: 50 },
                        {x: 30, y: 40, r: 70 },
                        {x: 100,y: 10, r: 10 }
                    ],
                    backgroundColor: [
                        '#EC0B43', '#58355E', '#7AE7C7', '#D6FFB7', '#FFF689', 'blue'
                    ]
                }
            ]
        }
    });
};