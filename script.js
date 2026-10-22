const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const name = form.elements.name.value.trim();
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  // Replace YOUR_EMAIL@example.com with your own email address.
  const recipient = "YOUR_EMAIL@example.com";
  const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
  const body = encodeURIComponent(`Hi Blessing,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`);
  document.getElementById("form-note").textContent =
    recipient === "YOUR_EMAIL@example.com"
      ? "Before using this form, open script.js and replace YOUR_EMAIL@example.com with your email address."
      : "Opening your email app…";
  if (recipient !== "YOUR_EMAIL@example.com") {
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  }
});
