document.getElementById('notifyBtn').addEventListener('click', () => {
  window.electron.notify('Hello from Renderer!');
});
