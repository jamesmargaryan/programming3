function main() {
    var socket = io.connect('http://localhost:3000');
    var chatDiv = document.getElementById('chat');
    var input = document.getElementById('message');
    var button = document.getElementById('submit');
    var del = document.getElementById('delete');

    function handleSubmit(evt) {
        var val = input.value;
        if (val != "") {
            socket.emit("send message", val);
        }
    }
    function handlekeydown(evt) {
        if (evt.keyCode == 13) {
            var val = input.value;
            if (val != "") {
                socket.emit("send message", val);
            }
        }
    }
    button.onclick = handleSubmit;
    window.onkeydown = handlekeydown;


    function handleMessage(msg) {
        var p = document.createElement('p');
        p.innerText = msg;
        chatDiv.appendChild(p);
        input.value = "";
    }

    socket.on('display message', handleMessage);

    del.onclick = deleteMessages;

    function deleteMessages() {
        socket.emit('jnjel');
    }

    socket.on('jnjeq tagery', deleteTags);

    function deleteTags() {
        var elements = document.getElementsByTagName('p');

        for (var i in elements) {
            elements[0].remove();

            if (elements.length == 0) {
                break;
            }
        }
    }

}

window.onload = main;
