/*
  [Business Name] website interactions.
  IMPORTANT: Replace FORM_ENDPOINT with your real form handler/API endpoint.
  The endpoint must accept a POST request with JSON and return a 2xx status.
*/
const FORM_ENDPOINT = "https://your-domain.com/api/service-requests";

document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("open", !expanded);
      navToggle.setAttribute("aria-label", expanded ? "Open navigation" : "Close navigation");
    });
  }

  document.querySelectorAll(".nav-dropdown").forEach((button) => {
    button.addEventListener("click", () => {
      const group = button.closest(".nav-group");
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));
      group.classList.toggle("open", !expanded);
    });
  });

  document.querySelectorAll("[data-year]").forEach((node) => {
    node.textContent = new Date().getFullYear();
  });

  document.querySelectorAll("[data-request-form]").forEach((form) => {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const message = form.querySelector(".form-message");
      const submitButton = form.querySelector('button[type="submit"]');
      message.className = "form-message";
      message.textContent = "";

      if (!form.reportValidity()) return;

      const payload = Object.fromEntries(new FormData(form).entries());
      payload.form_type = form.dataset.formType || "general";
      payload.page_url = window.location.href;
      payload.submitted_at = new Date().toISOString();

      submitButton.disabled = true;
      submitButton.textContent = "Sending…";

      try {
        if (FORM_ENDPOINT.includes("your-domain.com")) {
          throw new Error("The form endpoint has not been configured yet.");
        }
        const response = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", "Accept": "application/json" },
          body: JSON.stringify(payload)
        });
        if (!response.ok) throw new Error("The server could not accept the request.");
        form.reset();
        message.textContent = "Thank you. Your request has been submitted successfully. [Business Name] will contact you soon.";
        message.classList.add("success");
      } catch (error) {
        message.textContent = error.message.includes("not been configured")
          ? "This form is ready, but the owner must connect it to a form endpoint before it can send enquiries. Please call or email us using the contact details on this page."
          : "We could not submit your request right now. Please try again or contact us by phone or email.";
        message.classList.add("error");
      } finally {
        submitButton.disabled = false;
        submitButton.innerHTML = 'Send request <span aria-hidden="true">→</span>';
      }
    });
  });
});
