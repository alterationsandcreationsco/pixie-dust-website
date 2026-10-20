
const contactForm = document.getElementById('contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const status = document.getElementById('form-status');
    const button = contactForm.querySelector('button[type="submit"]');

    button.disabled = true;
    button.textContent = 'Sending your message...';
    status.textContent = '';

    try {
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: {
          Accept: 'application/json'
        }
      });

      if (response.ok) {
        status.textContent =
          'Thank you for reaching out! ✳ Your message has been sent. We will be in touch soon.';
        contactForm.reset();
      } else {
        status.textContent =
          'Oops! Something went wrong. Please try again.';
      }
    } catch (error) {
      status.textContent =
        'Unable to send your message. Please try again later.';
    } finally {
      button.disabled = false;
      button.textContent = 'Send Your Message ↗';
    }
  });
}
