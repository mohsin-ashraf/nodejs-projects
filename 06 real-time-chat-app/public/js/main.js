$(document).ready(function() {
  let messages = [];
  let socket = io.connect("http://localhost:3000");
  let chatForm = $("#chatForm");
  let message = $("#chatInput");
  let chatWindow = $("#chatWindow");
  let userForm = $("#userForm");
  let username = $("#username");
  let users = $("#users");
  let error = $("#error");

  //   Submit userform
  userForm.on("submit", function(e) {
    e.preventDefault();
    socket.emit("set user", username.val(), function(data) {
      if (data) {
        $("#userFormWrap").hide();
        $("#mainWrap").show();
      } else {
        error.html("Username is taken.");
      }
    });
  });
  //   Chat Form display
  chatForm.on("submit", function(e) {
    e.preventDefault();
    socket.emit("send message", message.val());
    message.val("");
  });

  //   Display Message
  socket.on("show message", function(data) {
    chatWindow.append(
      "<strong>" + data.user + "</strong> : " + data.msg + "<br>"
    );
  });
  //   Display Username
  socket.on("users", function(data) {
    var html = "";
    for (let i = 0; i < data.length; i++) {
      html += '<li class="list-group-item">' + data[i] + "</li>";
    }
    users.html(html);
  });
});
