document.getElementById("signup-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const nameInput = document.getElementById("name-field");
  const emailInput = document.getElementById("email-field");
  const phoneInput = document.getElementById("phone-field");
  const messageInput = document.getElementById("message-field");

  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const phoneValue = phoneInput.value.trim();
  const messageValue = messageInput.value.trim();

  if (nameValue === "") {
    alert("Please fill in user name");
    nameInput.focus();
    return;
  }

  if (emailValue === "") {
    alert("Please fill in email");
    emailInput.focus();
    return;
  }

  if (phoneValue === "") {
    alert("Please fill in your phone number");
    phoneInput.focus();
    return;
  }

  if (messageValue === "") {
    alert("Please add a message and tell us about yourself");
    messageInput.focus();
    return;
  }

  console.log({ nameValue, emailValue, phoneValue, messageValue });

  const subject = "Spokane Rugby Inquiry";

  const body = `Name: ${nameValue}%0D%0AEmail: ${emailValue}%0D%0APhone Number: ${phoneValue}%0D%0A%0D%0AMessage: ${messageValue}`;
  const modal = document.getElementById("membershipForm");
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", !0);
  modal.removeAttribute("aria-modal");

  document.querySelector(".modal-backdrop").remove();
  document.querySelector("body").classList.remove("modal-open");

  window.open(
    `mailto:communications@spokanerugby.club?subject=${subject}&body=${body}`
  );
});
