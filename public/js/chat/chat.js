const socket = io("https://raji-records-web.herokuapp.com")
// const socket = io("http://localhost:5000")


if (localStorage.getItem("JoinedRoomStatus") !== "true") {
    document.getElementById("chat__container").style.display = "none";
} else {
    document.getElementById("chat__registration").style.display = "none";
}

let messages = [];
let messageText = '';
let joined = false;
let userName = '';
let typingDisplay = '';

const messageUserName = document.getElementById("messageUserName");
const messageUserText = document.getElementById("messageUserText");

// let message = {
//     userName: "none",
//     userText: "none",
// }


let counter = 0;
socket.emit("findAllMessages", {}, (response) => {
    messages.push({
        name: response[0].name,
        text: response[0].text,
    });
    messageUserName.innerHTML = messages[counter].name;
    messageUserText.innerHTML = messages[counter].text;
});


socket.on('message', (message) => {
    counter++;
    messages.push(message);
    var divName = document.createElement('div');
    divName.className = 'message__user__name';
    divName.innerHTML = messages[counter].name;

    var divMessage = document.createElement('div');
    divMessage.className = 'message__user__text';
    divMessage.innerHTML = messages[counter].text;

    document.getElementById('message__container').appendChild(divName);
    document.getElementById('message__container').appendChild(divMessage);
});




const sendMessage = () => {
    socket.emit('createMessage', { text: messageText }, () => {
        messageText = "";
    })
}

const join = () => {
    socket.emit('join', { name: userName }, () => {  //callback return names of joined
        joined = true;
    })
}





document.getElementById('chatRegBtn').addEventListener('click', (e) => {
    e.preventDefault();
    userName = document.getElementById('chatName').value;
    if (userName !== "") {
        localStorage.setItem("JoinedRoomStatus", "true");

        document.getElementById("chat__registration").style.display = "none";
        document.getElementById("chat__container").style.display = "flex";
        join();
    }
})

document.getElementById('chatName').addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        userName = document.getElementById('chatName').value;
        if (userName !== "") {
            localStorage.setItem("JoinedRoomStatus", "true");
            document.getElementById("chat__registration").style.display = "none";
            document.getElementById("chat__container").style.display = "flex";
            join();
        }
    }
})

document.getElementById('sendMessageBtn').addEventListener('click', (e) => {
    e.preventDefault();
    let messageInput = document.getElementById("messageInput");
    if (messageInput.value === "")
        return false;
    else {
        messageText = messageInput.value;
        console.log(messageText);
        sendMessage();
        document.getElementById('messageInput').value = "";
    }
})

document.getElementById('messageInput').addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        let messageInput = document.getElementById("messageInput");
        if (messageInput.value === "") {
            return false;
        }
        else {
            messageText = messageInput.value;
            sendMessage();
            document.getElementById('messageInput').value = "";
        }
    }
});

document.getElementById('homeBtnChat').addEventListener('click', () => {
    localStorage.removeItem("JoinedRoomStatus");
    localStorage.removeItem("UserName");
})

let message = document.getElementById('messageInput');

let timeout;

function timeoutFunction() {
    let isTyping = false
    console.log("timepit")
    socket.emit("typing", { userName, isTyping });
}
message.addEventListener('keyup', () => {
    let isTyping = true;
    socket.emit('typing', { userName, isTyping });
    clearTimeout(timeout)
    timeout = setTimeout(timeoutFunction, 2000);
})


var typingDisplayDiv = document.getElementById('typingDisplay');

socket.on('typing', ({ name, isTyping }) => {
    if (isTyping) {
        typingDisplay = `${name} is typing...`;
        typingDisplayDiv.innerHTML = `${typingDisplay}`;
    } else {
        typingDisplayDiv.innerHTML = "";
    }
})  
