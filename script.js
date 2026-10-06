document.addEventListener('DOMContentLoaded', () => {
  const copyButton = document.getElementById('copyEmail');
  const status = document.getElementById('copyStatus');
  if (copyButton) {
    copyButton.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText('saikiran@kondurix.com');
        if (status) status.textContent = 'Email copied.';
      } catch (e) {
        if (status) status.textContent = 'Email: saikiran@kondurix.com';
      }
    });
  }
});
