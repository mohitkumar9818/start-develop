document.addEventListener('DOMContentLoaded', () => {
    const prices = [
        { material: 'Aluminum', price: '140' },
        { material: 'Copper', price: '700' },
        { material: 'Iron', price: '32' },
        { material: 'Steel', price: '60' },
        { material: 'Plastic', price: '15' },
        { material: 'Waste cloth', price: '140' },
        { material: 'solder', price: '700' },
        { material: '', price: '32' },
        { material: 'Steel', price: '60' },
        { material: 'Plastic', price: '15' }
    ];

    const priceTable = document.getElementById('price-table');
    
    prices.forEach(price => {
        const row = document.createElement('tr');
        const materialCell = document.createElement('td');
        const priceCell = document.createElement('td');

        materialCell.textContent = price.material;
        priceCell.textContent = price.price;

        row.appendChild(materialCell);
        row.appendChild(priceCell);
        priceTable.appendChild(row);
    });
});
