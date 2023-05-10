$(document).ready(function() {
  // Event listener for the stats button
  $("#get-repo-stats-btn").click(function(event) {
    event.preventDefault();
    var username = $("#username-input").val();
    var url = "https://api.github.com/users/" + username + "/repos";

    if(!username)
    {
      alert("please enter valid username");
      window.location.href = "login.html";
      return;
    }

    $.ajax({
      url: url,
      success: function(data) {
        window.location.href = "repos-table.html?username=" + username;
      },
      error: function() {alert("Invalid GitHub username. Please try again.");
      window.location.href = "login.html";
      }
    });
  });
});

