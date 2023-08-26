window.onload = function () {
	
    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        dataPointWidth:35,

        // width:340,
        title: {
            text: "Social Media views Graph Bar"
        },
        axisX: {
            interval: 1
        },
        axisY: {
            title: "Views in a week",
            includeZero: true,
            scaleBreaks: {
                type: "straight",
                customBreaks: [{
                    startValue:50000,
                    endValue: 52000
                    },
                    {
                        startValue:80000,
                        endValue:82000
                    }
            ]}
        },
        data: [{
            type: "column",
            color:"#3490F3",
            indexLabel: "{y}",
          indexLabelPlacement: "outside",
            toolTipContent: " <b>{label}</b><br>Views:{y}",
            dataPoints: [
                { label: "Facebook", y: 100000},
                { label: "Tweeter", y: 20000},
                { label: "Instagram", y: 80000},
                { label: "Linkedin", y:20000},
                { label: "expluser", y: 30000},
                { label: "Youtub", y: 60000},
                
            ]
        }]
    });
    chart.render();
    
    }