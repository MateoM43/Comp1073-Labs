// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1Button = document.getElementById("noun1");
const verbButton = document.getElementById("verb");
const adjectiveButton = document.getElementById("adjective");
const noun2Button = document.getElementById("noun2");
const settingButton = document.getElementById("setting");
const playbackButton = document.getElementById("playback");
const randomButton = document.getElementById("random");

// Constants for p tag to display query selectors
const choosenNoun1 = document.getElementById("choosenNoun1");
const choosenVerb = document.getElementById("choosenVerb");
const choosenAdjective = document.getElementById("choosenAdjective");
const choosenNoun2 = document.getElementById("choosenNoun2");
const choosenSetting = document.getElementById("choosenSetting");
const storyDisplay = document.getElementById("story");
const studentIdDisplay = document.getElementById("studentId");

// Constants for final buttons and p tags
const allButtons = [noun1Button, verbButton, adjectiveButton, noun2Button, settingButton, playbackButton, randomButton];
const allParagraphs = [choosenNoun1, choosenVerb, choosenAdjective, choosenNoun2, choosenSetting, storyDisplay, studentIdDisplay];

// Variables for pre-defined arrays
const nouns1 = ["Dog", "Cat", "Bird", "Fish", "Rabbit"];
const verbs = ["jumps", "runs", "flies", "swims", "sings"];
const adjectives = ["happy", "sad", "excited", "angry", "sleepy"];
const nouns2 = ["ball", "tree", "car", "house", "mountain"];
const settings = ["in the park", "at the beach", "on the moon", "in the jungle", "underwater"];

// Variables for count to grab array elements
let noun1Index = 0;
let verbIndex = 0;
let adjectiveIndex = 0;
let noun2Index = 0;
let settingIndex = 0;

/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    // variable to get array element and displaying it
    choosenNoun1.textContent = nouns1[noun1Index];
        
    // if-else to change count setting
    if (noun1Index < nouns1.length - 1) {
        noun1Index++;
    } else {
        noun1Index = 0;
    }
}

function verb_on_click() {
    choosenVerb.textContent = verbs[verbIndex];
    verbIndex = (verbIndex + 1) % verbs.length;
}

function adjective_on_click() {
    choosenAdjective.textContent = adjectives[adjectiveIndex];
    adjectiveIndex = (adjectiveIndex + 1) % adjectives.length;
}

function noun2_on_click() {
    choosenNoun2.textContent = nouns2[noun2Index];
    noun2Index = (noun2Index + 1) % nouns2.length;
}

function setting_on_click() {
    choosenSetting.textContent = settings[settingIndex];
    settingIndex = (settingIndex + 1) % settings.length;
}

// concatenate the user story and display
function playback_on_click() {
    storyDisplay.textContent = `${choosenNoun1.textContent} ${choosenVerb.textContent} ${choosenAdjective.textContent} ${choosenNoun2.textContent} ${choosenSetting.textContent}.`;
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
    choosenNoun1.textContent = nouns1[Math.floor(Math.random() * nouns1.length)];
    choosenVerb.textContent = verbs[Math.floor(Math.random() * verbs.length)];
    choosenAdjective.textContent = adjectives[Math.floor(Math.random() * adjectives.length)];
    choosenNoun2.textContent = nouns2[Math.floor(Math.random() * nouns2.length)];
    choosenSetting.textContent = settings[Math.floor(Math.random() * settings.length)];
    playback_on_click();
}

/* Event Listeners
-------------------------------------------------- */
noun1Button.addEventListener("click", noun1_on_click);
verbButton.addEventListener("click", verb_on_click);
adjectiveButton.addEventListener("click", adjective_on_click);
noun2Button.addEventListener("click", noun2_on_click);
settingButton.addEventListener("click", setting_on_click);
playbackButton.addEventListener("click", playback_on_click);
randomButton.addEventListener("click", random_on_click);
window.addEventListener("load", addStudentId);

// Function to add student ID dynamically
function addStudentId() {
    studentIdDisplay.textContent = "Student ID: 200604575";
}
