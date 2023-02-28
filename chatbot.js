// Define chatbot response.
const responses = {
    "hello": "Hey there! How can I assist you today?",
    "what is html": "HTML is the best language ever and is used to create and structure content on the web.",
    "why learn html": "I was told that you can impress a lot of people by creating your own website but what do I know?",
    "how to get started": "Make you own website! Google is your friend bud. I'm usless for these kind of things.",
    "thanks": "You are welcome.",
    "default": "Sorry, I'm very stupid and couldn't understand that. ヽ(。_°)ノ"
};

// Chatbot input and response fields.
const chatbotInput = document.querySelector('#chatbot-input');
const chatbotSubmit = document.querySelector('#chatbot-submit');
const chatbotResp = document.querySelector('#chatbot-response');

// Define response function.
function handleChatResp() {
    const userIn = chatbotInput.value.toLowerCase();

    // Empty the input area.
    chatbotInput.value = "";

    // Check if input matches possible responses.
    if (responses[userIn]) {
        chatbotResp.textContent = responses[userIn];
    } else {
        chatbotResp.textContent = responses['default']
    }
}

// Event listner enter key
chatbotInput.addEventListener('keydown', (event) => {
    // Check if Enter key pressed.
    if (event.keyCode === 13) {
        // Return response
        handleChatResp();
    }
});

// Add an event listener to the submit button
chatbotSubmit.addEventListener('click', () => {
    // Handle the chatbot response
    handleChatResp();
});