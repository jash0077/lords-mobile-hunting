// Player Profile Charting and Interaction Logic
2
3function initProfileCharts(powerData, killsData) {
4    const chartOptions = {
5        responsive: true,
6        maintainAspectRatio: false,
7        plugins: {
8            legend: { display: false },
9            tooltip: {
10                mode: 'index',
11                intersect: false,
12                backgroundColor: '#1c1c24',
13                titleColor: '#94949e',
14                bodyColor: '#f3f4f6',
15                borderColor: 'rgba(255,255,255,0.1)',
16                borderWidth: 1
17            }
18        },
19        scales: {
20            x: {
21                grid: { display: false },
22                ticks: { color: '#94949e', font: { size: 10 } }
23            },
24            y: {
25                grid: { color: 'rgba(255,255,255,0.05)' },
26                ticks: { 
27                    color: '#94949e', 
28                    font: { size: 10 },
29                    callback: function(value) {
30                        if (value >= 1000000000) return (value / 1000000000).toFixed(1) + 'B';
31                        if (value >= 1000000) return (value / 1000000).toFixed(1) + 'M';
32                        return value;
33                    }
34                }
35            }
36        }
37    };
38
39    // Power Progress Chart
40    const ctxPower = document.getElementById('powerChart').getContext('2d');
41    new Chart(ctxPower, {
42        type: 'line',
43        data: {
44            labels: powerData.labels,
45            datasets: [{
46                label: 'Might',
47                data: powerData.values,
48                borderColor: '#4d94ff',
49                backgroundColor: 'rgba(77, 148, 255, 0.1)',
50                fill: true,
51                tension: 0.4,
52                pointRadius: 0,
53                pointHoverRadius: 5
54            }]
55        },
56        options: chartOptions
57    });
58
59    // Kills History Chart
60    const ctxKills = document.getElementById('killsChart').getContext('2d');
61    new Chart(ctxKills, {
62        type: 'line',
63        data: {
64            labels: killsData.labels,
65            datasets: [{
66                label: 'Kills',
67                data: killsData.values,
68                borderColor: '#ff4d4d',
69                backgroundColor: 'rgba(255, 77, 77, 0.1)',
70                fill: true,
71                tension: 0.4,
72                pointRadius: 0,
73                pointHoverRadius: 5
74            }]
75        },
76        options: chartOptions
77    });
78}
79
80// Sample Data and Initialization
81document.addEventListener('DOMContentLoaded', () => {
82    // Sample Power Data (30 Days)
83    const powerData = {
84        labels: ['06-06', '06-10', '06-14', '06-18', '06-22', '06-26', '06-30', '07-04'],
85        values: [3.1e9, 3.0e9, 2.95e9, 2.88e9, 2.86e9, 2.87e9, 2.85e9, 2.85e9]
86    };
87
88    // Sample Kills Data (30 Days)
89    const killsData = {
90        labels: ['06-06', '06-10', '06-14', '06-18', '06-22', '06-26', '06-30', '07-04'],
91        values: [360e6, 380e6, 420e6, 425e6, 428e6, 432e6, 440e6, 446.4e6]
92    };
93
94    if (document.getElementById('powerChart')) {
95        initProfileCharts(powerData, killsData);
96    }
97});
98
