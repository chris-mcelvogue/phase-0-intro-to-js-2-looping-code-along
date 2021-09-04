// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    return gifts;
}

function writeCards(names, eventName) {
    let thankYouCard = [];
    for (let i = 0; i < names.length; i++) {
        thankYouCard.push(`"Thank you ${names[i]} for the wonderful ${eventName} gift!`);
    }
    return thankYouCard;
}

let countdown = 10;
    while (countdown >= 0) {
        console.log(countdown--);
    }

