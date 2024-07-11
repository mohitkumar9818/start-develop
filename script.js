document.addEventListener('DOMContentLoaded', () => {
    const prices = [
        { material: 'Aluminum', price: 60 },
        { material: 'Copper', price: 35 },
        { material: 'Iron', price: 75 },
        { material: 'Steel', price: 90 },
        { material: 'Plastic', price: 45 },
        { material: 'Battery', price: 32 },

        // { material: 'Aluminum', price: '140' },
        // { material: 'Copper', price: '700' },
        // { material: 'Iron', price: '32' },
        // { material: 'Steel', price: '60' },
        // { material: 'Plastic', price: '15' },
        // { material: 'Waste cloth', price: '140' },
        // { material: 'solder', price: '700' },
        // { material: 'Battery', price: '32' },
        // { material: 'motor', price: '60' },
        // { material: 'lead', price: '15' },
    ];

    const priceTable = document.getElementById('price-table');
    
    prices.forEach(price => {
        const row = document.createElement('tr');
        const materialCell = document.createElement('td');
        const priceCell = document.createElement('td');

        materialCell.textContent = price.material;
        priceCell.textContent = price.price.toFixed(2);

        row.appendChild(materialCell);
        row.appendChild(priceCell);
        priceTable.appendChild(row);
    });

    const ctx = document.getElementById('myChart').getContext('2d');
    const labels = prices.map(price => price.material);
    const data = prices.map(price => price.price);

    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Price per kg',
                data: data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
