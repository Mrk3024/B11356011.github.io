function toggleDescription(id) {
  const desc = document.getElementById(id);
  desc.classList.toggle("show");
}

const cursor = document.getElementById("turtle-cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});