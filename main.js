emailjs.init("JOQITFY8yWBN6qS8I");

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs
    .send("service_chls5gg", "template_zjctbfj", {
      from_name: document.getElementById("name").value,
      name: document.getElementById("name").value,
      from_email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      message: document.getElementById("message").value,
    })
    .then(
      () => {
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "Thanks! Your message was delivered successfully.",
          background: "#1e1e2f",
          color: "#f0f0f0",
          confirmButtonColor: "#4caf50",
        });
      },
      (error) => {
        Swal.fire({
          icon: "error",
          title: "Oops!",
          text: "Something went wrong:\n" + error.text,
          background: "#1e1e2f",
          color: "#f0f0f0",
          confirmButtonColor: "#e53935",
        });
      }
    );

  this.reset();
});
