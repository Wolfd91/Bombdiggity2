<script>
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting normally
  var form = event.target;
  var data = new FormData(form);
  var xhr = new XMLHttpRequest();
  xhr.open(form.method, form.action, true);
  xhr.onload = function() {
    if (xhr.status === 200) {
      // Show success message
      var successMessage = document.createElement("div");
      successMessage.innerText = "Message sent!";
      form.parentNode.replaceChild(successMessage, form);
    } else {
      // Show error message
      var errorMessage = document.createElement("div");
      errorMessage.innerText = "An error occurred while sending the message.";
      form.parentNode.replaceChild(errorMessage, form);
    }
  };
  xhr.send(data);
});
</script>
