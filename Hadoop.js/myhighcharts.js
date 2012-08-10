startChart = function() {
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'linechart',
                type: 'line',
                marginRight: 130,
                marginBottom: 25
            },
            title: {
                text: 'Estimated value of Pi v/s Number of Trials',
                x: -20 //center
            },
            subtitle: {
                text: 'Monte Carlo Estimation',
                x: -20
            },
            xAxis: {
				title: {
                    text: 'Number of Trials'
                },
                categories: total_trials
            },
            yAxis: {
                title: {
                    text: 'Estimated value of Pi'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                formatter: function() {
                        return '<b>'+ this.series.name +'</b><br/>'+
                        this.x +': '+ this.y +'°C';
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top',
                x: -10,
                y: 100,
                borderWidth: 0
            },
            series: [{
                name: 'Estimated Value by the Experiment',
                data: total_hits
            }]
        });
    });
    
};
