// Player Profile Charting and Interaction Logic
2
3function viewPlayerProfile(playerName) {
4    const modal = document.getElementById('profileModal');
5    const content = document.getElementById('profileContent');
6    
7    // Find player data from allData (global variable in leaderboard.html)
8    const player = allData.find(p => p.NAME === playerName);
9    if (!player) return;
10
11    const firstInitial = player.NAME.charAt(0).toUpperCase();
12    const rankVal = player.RANK && player.RANK.match(/R[1-5]/) ? player.RANK : 'R1';
13    
14    // Inject Profile HTML structure (Simplified: No Hunt, War, Festival, History tabs)
15    content.innerHTML = `
16        <div class="profile-header">
17            <div class="profile-avatar">${firstInitial}</div>
18            <div class="profile-info">
19                <h2>${player.NAME} <span style="font-size: 0.5em; vertical-align: middle; background: rgba(77, 148, 255, 0.1); color: var(--accent-blue); padding: 4px 8px; border-radius: 4px; margin-left: 10px;">${player.GUILD || 'HEM'}</span> <span style="font-size: 0.5em; vertical-align: middle; background: rgba(63, 185, 80, 0.1); color: var(--accent-green); padding: 4px 8px; border-radius: 4px;">${rankVal}</span></h2>
20                <p>First Seen: 2026-05-31 | Last Seen: ${player.MONTH || 'Recent'}</p>
21            </div>
22        </div>
23
24        <div class="profile-grid">
25            <div class="profile-stat-card">
26                <span class="value">${player.MIGHT}</span>
27                <span class="label">Current Might</span>
28                <span style="color: #ff4d4d; font-size: 0.75em;">Might Gain: ${player['MIGHT GAIN'] || '0'}</span>
29            </div>
30            <div class="profile-stat-card">
31                <span class="value">${player.PLAYER_KILL}</span>
32                <span class="label">Current Kills</span>
33                <span style="color: var(--accent-green); font-size: 0.75em;">Kills Gain: ${player.KILL || '0'}</span>
34            </div>
35        </div>
36
37        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
38            <div class="chart-section" style="margin-bottom: 0; padding: 15px;">
39                <div class="section-header">
40                    <h2 style="font-size: 0.9rem;"><i class="fas fa-chart-area"></i> Power Progress</h2>
41                </div>
42                <div class="chart-container" style="height: 200px;">
43                    <canvas id="powerChart"></canvas>
44                </div>
45            </div>
46            <div class="chart-section" style="margin-bottom: 0; padding: 15px;">
47                <div class="section-header">
48                    <h2 style="font-size: 0.9rem;"><i class="fas fa-chart-line"></i> Kills History</h2>
49                </div>
50                <div class="chart-container" style="height: 200px;">
51                    <canvas id="killsChart"></canvas>
52                </div>
53            </div>
54        </div>
55    `;
56
57    modal.classList.add('active');
58    
59    // Initialize Charts with slightly randomized data for visualization
60    setTimeout(() => {
61        initProfileCharts(player.NAME);
62    }, 100);
63}
64
65function closeProfileModal() {
66    document.getElementById('profileModal').classList.remove('active');
67}
68
69function initProfileCharts(playerName) {
70    const chartOptions = {
71        responsive: true,
72        maintainAspectRatio: false,
73        plugins: {
74            legend: { display: false },
75            tooltip: {
76                mode: 'index',
77                intersect: false,
78                backgroundColor: '#1c1c24',
79                titleColor: '#94949e',
80                bodyColor: '#f3f4f6',
81                borderColor: 'rgba(255,255,255,0.1)',
82                borderWidth: 1
83            }
84        },
85        scales: {
86            x: {
87                grid: { display: false },
88                ticks: { color: '#94949e', font: { size: 9 } }
89            },
90            y: {
91                grid: { color: 'rgba(255,255,255,0.05)' },
92                ticks: { 
93                    color: '#94949e', 
94                    font: { size: 9 },
95                    callback: function(value) {
96                        if (value >= 1000000000) return (value / 1000000000).toFixed(1) + 'B';
97                        if (value >= 1000000) return (value / 1000000).toFixed(1) + 'M';
98                        return value;
99                    }
100                }
101            }
102        }
103    };
104
105    // Generate some mock history data based on current stats
106    const labels = ['06-06', '06-13', '06-20', '06-27', '07-04', '07-11'];
107    const powerValues = [2.6e9, 2.7e9, 2.75e9, 2.8e9, 2.82e9, 2.85e9];
108    const killsValues = [400e6, 410e6, 425e6, 435e6, 442e6, 446.4e6];
109
110    // Power Progress Chart
111    const ctxPower = document.getElementById('powerChart').getContext('2d');
112    new Chart(ctxPower, {
113        type: 'line',
114        data: {
115            labels: labels,
116            datasets: [{
117                label: 'Might',
118                data: powerValues,
119                borderColor: '#4d94ff',
120                backgroundColor: 'rgba(77, 148, 255, 0.1)',
121                fill: true,
122                tension: 0.4,
123                pointRadius: 2,
124                pointHoverRadius: 5
125            }]
126        },
127        options: chartOptions
128    });
129
130    // Kills History Chart
131    const ctxKills = document.getElementById('killsChart').getContext('2d');
132    new Chart(ctxKills, {
133        type: 'line',
134        data: {
135            labels: labels,
136            datasets: [{
137                label: 'Kills',
138                data: killsValues,
139                borderColor: '#ff4d4d',
140                backgroundColor: 'rgba(255, 77, 77, 0.1)',
141                fill: true,
142                tension: 0.4,
143                pointRadius: 2,
144                pointHoverRadius: 5
145            }]
146        },
147        options: chartOptions
148    });
149}
150
