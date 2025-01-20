const { format } = require('date-fns');
const say = require('say');

function getTimeText(){
    const now = new Date();
    const time = format(now, 'h:mm');
    const seconds = format(now, 'ss');
    return `Il est actuellement ${time} et ${seconds} secondes`;
}

function sayTime(){
    const message = getTimeText();
    console.log(message);
    say.speak(message);
}

setInterval(sayTime, 5000);