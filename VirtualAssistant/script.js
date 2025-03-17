let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");

function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    text_speak.lang = "en-GB"; // British English or "hi-IN" for Hindi
    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    let day = new Date();
    let hours = day.getHours();
    if (hours >= 0 && hours < 12) {
        speak("Good Morning mam");
    } else if (hours >= 12 && hours < 16) {
        speak("Good Afternoon mam");
    } else {
        speak("Good Evening mam");
    }
}

wishMe();

// Speech Recognition Setup
let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();

recognition.lang = "en-US"; // Set the language for recognition
recognition.continuous = true; // Allows continuous listening
recognition.interimResults = false; // Ensures complete results

// Event handler for when speech recognition produces a result
recognition.onresult = (event) => {
    let currentIndex = event.resultIndex;
    let transcript = event.results[currentIndex][0].transcript;
    content.innerText = transcript; // Display recognized text
    takeCommand(transcript.toLowerCase()); // Process recognized command
};

// Restart recognition when it ends
recognition.onend = () => {
    recognition.start(); // Automatically restart recognition when it stops
};

// Start recognition on button click
btn.addEventListener("click", () => {
    recognition.start();
    voice.style.display = "block";
    btn.style.display = "none";
});

function takeCommand(message) {
    voice.style.display = "none";
    btn.style.display = "flex";
    
    if (message.includes("hello") || message.includes("hey")) {
        speak("Hello mam, what can I help you with?");
    } else if (message.includes("who are you")) {
        speak("I am a virtual assistant, created by Pankti mam.");
    } else if (message.includes("open youtube")) {
        speak("Opening YouTube...");
        window.open("https://youtube.com/", "_blank");
    } else if (message.includes("open google")) {
        speak("Opening Google...");
        window.open("https://google.com/", "_blank");
    } else if (message.includes("Hii sifra")) {
        speak("Hello, good afternoon");
    } else if (message.includes("open facebook")) {
        speak("Opening Facebook...");
        window.open("https://facebook.com/", "_blank");
    } else if (message.includes("open instagram")) {
        speak("Opening Instagram...");
        window.open("https://instagram.com/", "_blank");
    } else if (message.includes("time")) {
        let time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        speak(`The time is ${time}`);
    } else if (message.includes("date")) {
        let date = new Date().toLocaleString(undefined, { day: "numeric", month: "short" });
        speak(`Today's date is ${date}`);
    } else {
        let finalText = "This is what I found on the internet regarding " + message.replace("shipra", "").replace("shifra", "");
        speak(finalText);
        window.open(`https://www.google.com/search?q=${message.replace("shipra", "").replace("shifra", "")}`, "_blank");
    }
}
