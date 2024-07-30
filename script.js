// scripts.js

// Data for the chart
const trafficData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
        label: 'Network Traffic (MB)',
        data: [120000, 150000, 180000, 200000, 250000, 300000],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
    }]
};

// Config for the chart
const config = {
    type: 'line',
    data: trafficData,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

// Create and render the chart
const trafficChart = new Chart(
    document.getElementById('trafficChart'),
    config
);

// Simulate real-time data update (you can replace this with actual data fetching)
setInterval(() => {
    const newTrafficData = Math.floor(Math.random() * 50000) + 150000;
    const newAlerts = Math.floor(Math.random() * 50) + 50;

    document.getElementById('total-traffic').innerText = `${newTrafficData} MB`;
    document.getElementById('suspicious-activity').innerText = `${newAlerts} Alerts`;

    // Update chart data
    trafficData.datasets[0].data.push(newTrafficData);
    trafficData.datasets[0].data.shift();
    trafficChart.update();
}, 5000);  // Update every 5 seconds

// Simulate threat and vulnerability updates (you can replace this with actual data fetching)
setInterval(() => {
    const threats = [
        'DDoS Attack',
        'Malware Attempt',
        'Unauthorized Access',
        'Phishing Attempt',
        'SQL Injection'
    ];

    const vulnerabilities = [
        'Open Ports',
        'Outdated Software',
        'Weak Passwords',
        'Unpatched Vulnerabilities',
        'Misconfigured Firewalls'
    ];

    const threatList = document.getElementById('threat-list');
    const vulnerabilityList = document.getElementById('vulnerability-list');

    // Update threats
    threatList.innerHTML = threats.map(threat => `<li>Threat: ${threat}</li>`).join('');

    // Update vulnerabilities
    vulnerabilityList.innerHTML = vulnerabilities.map(vulnerability => `<li>Vulnerability: ${vulnerability}</li>`).join('');
}, 10000);  // Update every 10 seconds
