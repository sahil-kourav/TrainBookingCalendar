const daysContainer = document.getElementById('days');
const monthYear = document.getElementById('monthYear');

let currentDate = new Date();
const flightPrices = {
    1: 1500, 2: 1200, 3: 1800, 4: 1700, 5: 1400, 6: 1600, 7: 1100,
    8: 1350, 9: 1550, 10: 1450, 11: 1650, 12: 1750, 13: 1850, 14: 1500,
    15: 1150, 16: 1250, 17: 1350, 18: 1450, 19: 1550, 20: 1650, 21: 1750,
    22: 1600, 23: 1300, 24: 1400, 25: 2000, 26: 1800, 27: 1900, 28: 1950,
    29: 1650, 30: 1750, 31: 1850
};

function renderCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    const firstDay = new Date(year, month, 1).getDay(); // Day of the week (0-6)
    const daysInMonth = new Date(year, month + 1, 0).getDate(); // Number of days in the current month
    
    monthYear.textContent = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });
    
    daysContainer.innerHTML = '';
    
    // Padding empty days for starting
    for (let i = 0; i < (firstDay === 0 ? 6 : firstDay - 1); i++) {
        const emptyDay = document.createElement('div');
        emptyDay.classList.add('empty');
        daysContainer.appendChild(emptyDay);
    }

    // Creating actual days
    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('day');
        
        dayElement.innerHTML = `
            <div>${day}</div>
            <span>${flightPrices[day] ? flightPrices[day] + ' INR' : 'N/A'}</span>
        `;
        
        daysContainer.appendChild(dayElement);
    }
}

function prevMonth() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
}

function nextMonth() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
}

renderCalendar();
