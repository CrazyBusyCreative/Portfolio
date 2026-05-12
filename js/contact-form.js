document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-message-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = form.querySelector('[name="name"]');
    const emailInput = form.querySelector('[name="email"]');
    const messageInput = form.querySelector('[name="message"]');
    const name = (nameInput?.value ?? '').trim();
    const email = (emailInput?.value ?? '').trim();
    const message = (messageInput?.value ?? '').trim();
    if (!name || !email || !message) return;

    const subject = encodeURIComponent(`Message from ${name} (tballad.me contact form)`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:tballad@me.com?subject=${subject}&body=${body}`;
  });
});
