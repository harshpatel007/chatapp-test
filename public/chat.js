$(function() {
    //make connection
    var socket = io();

    //buttons and inputs
    var message = $("#message")
    var send_message = $("#send_message")
    var chatroom = $("#chatroom")


    //Emit message
    send_message.click(function() {
        socket.emit('new_message', {
            message: message.val()
        })
    })

    //Listen on new_message
    socket.on("new_message", (data) => {
        message.val('');
        chatroom.append("<div class='d-flex justify-content-start mb-4'><div class='img_cont_msg'><img src='https://devilsworkshop.org/files/2013/01/enlarged-facebook-profile-picture.jpg' class='rounded-circle user_img_msg'></div><div class='msg_cotainer'>" + data.message + "</div></div>")

    })

    socket.on("new_message_server", (data) => {
        message.val('');
        chatroom.append("<div class='d-flex justify-content-end mb-4'><div class='img_cont_msg'><img src='https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/santa_clous_christmas-512.png' class='rounded-circle user_img_msg'></div><div class='msg_cotainer_send'>Word Count is: " + data.message +
            "</div></div>")

    })
});