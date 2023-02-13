$(document).ready(function() {
    $("form").submit(function(event) {
      event.preventDefault();
  
      var name = $("#name").val();
      var email = $("#email").val();
      var feedback = $("#feedback").val();
  
      $.ajax({
        type: "POST",
        url: "https://lopastudio.sk/morsecodetutor/submit_feedback.php/",
        data: { name: name, email: email, feedback: feedback },
        success: function(response) {
          alert("Feedback submitted successfully!");
        },
        error: function(jqXHR, textStatus, errorThrown) {
          alert("An error occurred: " + errorThrown);
        }
      });
    });
  });
  