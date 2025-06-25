document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("fade-in");
});

const links = document.querySelectorAll("a[href]");

links.forEach(link => {
  if (link.hostname === window.location.hostname) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const url = this.href;
      document.body.classList.add("fade-out");
      setTimeout(() => {
        window.location.href = url;
      }, 300);
    });
  }
});
