$(document).ready(function() {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');    
    var url = "https://api.github.com/users/" + username + "/repos";
  
    $.getJSON(url, function(data) {

        $("#repository-list").empty();
    // Create new table rows for each repository
    $.each(data, function(index, repo) {
      var row = "<tr>" +
                "<td>" + repo.name + "</td>" +
                "<td><a href='" + repo.html_url + "' target='_blank'>" + repo.html_url + "</a></td>" +
                "<td>" + repo.language + "</td>" +
                "<td>" + repo.stargazers_count + "</td>" +
                "<td>" + repo.created_at + "</td>" +
                "<td>" + repo.open_issues_count + "</td>" +
                "</tr>";
      $("#repository-list").append(row);
      });
    });
  });
  