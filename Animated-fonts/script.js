// DOM elements
const chain = document.getElementById('chain');
const battery = document.getElementById('battery');
const hourglass = document.getElementById('hourglass');

// Break chain animation
const brakeChain = () => {
    chain.className = 'fas fa-link';

    setTimeout(() => {
        chain.className = 'fas fa-unlink';
    }, 1000);
};

setInterval(brakeChain, 2000);

// Charge battery Animation
const chargeBattery = () => {

    battery.className = 'fas fa-battery-empty';

    setTimeout(() => {
        battery.className = 'fas fa-battery-quarter';
    }, 1000)

    setTimeout(() => {
        battery.className = 'fas fa-battery-half';
    }, 2000)

    setTimeout(() => {
        battery.className = 'fas fa-battery-three-quarters';
    }, 3000)

    setTimeout(() => {
        battery.className = 'fas fa-battery-full';
    }, 4000)
};

setInterval(chargeBattery, 5000);

// Hourglass flow Animation
const hourglassFlow = () => {
    hourglass.className = 'far fa-hourglass';

    setTimeout(() => {
        hourglass.className = 'fas fa-hourglass-start';
    }, 1000);

    setTimeout(() => {
        hourglass.className = 'fas fa-hourglass-half';
    }, 2000);

    setTimeout(() => {
        hourglass.className = 'fas fa-hourglass-end';
    }, 3000);

    setTimeout(() => {
        hourglass.className = 'fas fa-hourglass';
    }, 4000);
}

setInterval(hourglassFlow, 5000);