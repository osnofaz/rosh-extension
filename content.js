// Specify the emotes you want to count
const emoteToCount1 = 'roshteinsatchel';
const emoteToCount2 = 'roshteingoldsatchel';
const emoteToCount3 = 'roshteinClap';
const emoteToCount4 = 'roshteinKEKR';
const emoteToCount5 = 'roshteinYUCK';
const emoteToCount6 = 'roshteindiamondsatchel';

let previousCount1 = 0;
let previousCount2 = 0;
let previousCount3 = 0;
let previousCount4 = 0;
let previousCount5 = 0;
let previousCount6 = 0;

// Function to count emotes and calculate differences
const countEmotesAndCalculateDifference = (emoteToCount, previousCount) => {
    const chatMessages = document.querySelectorAll('.chat-entry'); // Adjust the selector to match the chat message elements
    let emoteCount = 0;

    chatMessages.forEach(message => {
        if (message.innerHTML.includes(emoteToCount)) {
            emoteCount++;
        }
    });

    let difference = emoteCount - previousCount;
    //console.log(`Current ${emoteToCount} amount: ${emoteCount}, Difference: ${difference}`);

    return { count: emoteCount, difference: difference };
};

// Function to click on emote if difference threshold is met
const clickEmoteIfThresholdMet = (emoteUrl, difference, emoteName) => {
    const elements = document.getElementsByClassName('quick-emote-item');

    for (let i = 0; i < elements.length; i++) {
        const firstChildInnerHTML = elements[i].childNodes[0].innerHTML;

        if (firstChildInnerHTML.includes(emoteUrl)) {
            if (difference > 4) {
                elements[i].click();
                //console.log(`Clicked on ${emoteName} emote.`);
            }
            break;
        }
    }
};

// Function to handle the counting and clicking logic for emote 1
const handleEmote1 = () => {
    const result = countEmotesAndCalculateDifference(emoteToCount1, previousCount1);
    previousCount1 = result.count;

    clickEmoteIfThresholdMet('https://files.kick.com/emotes/2049349/fullsize', result.difference, emoteToCount1);
};

// Function to handle the counting and clicking logic for emote 2
const handleEmote2 = () => {
    const result = countEmotesAndCalculateDifference(emoteToCount2, previousCount2);
    previousCount2 = result.count;

    clickEmoteIfThresholdMet('https://files.kick.com/emotes/2036252/fullsize', result.difference, emoteToCount2);
};

// Function to handle the counting and clicking logic for emote 3
const handleEmote3 = () => {
    const result = countEmotesAndCalculateDifference(emoteToCount3, previousCount3);
    previousCount3 = result.count;

    clickEmoteIfThresholdMet('https://files.kick.com/emotes/11155/fullsize', result.difference, emoteToCount3);
};

// Function to handle the counting and clicking logic for emote 4
const handleEmote4 = () => {
    const result = countEmotesAndCalculateDifference(emoteToCount4, previousCount4);
    previousCount4 = result.count;

    clickEmoteIfThresholdMet('https://files.kick.com/emotes/18/fullsize', result.difference, emoteToCount4);
};

// Function to handle the counting and clicking logic for emote 5
const handleEmote5 = () => {
    const result = countEmotesAndCalculateDifference(emoteToCount5, previousCount5);
    previousCount5 = result.count;

    clickEmoteIfThresholdMet('https://files.kick.com/emotes/56/fullsize', result.difference, emoteToCount5);
};

// Function to handle the counting and clicking logic for emote 6
const handleEmote6 = () => {
    const result = countEmotesAndCalculateDifference(emoteToCount6, previousCount6);
    previousCount6 = result.count;

    clickEmoteIfThresholdMet('https://files.kick.com/emotes/2851938/fullsize', result.difference, emoteToCount6);
};

// Initial counts
handleEmote1();
handleEmote2();
handleEmote3();
handleEmote4();
handleEmote5();
handleEmote6();

// Set intervals for continuous counting and processing
setInterval(handleEmote1, 7000);
setInterval(handleEmote2, 7000);
setInterval(handleEmote3, 7000);
setInterval(handleEmote4, 7000);
setInterval(handleEmote5, 7000);
setInterval(handleEmote6, 7000);