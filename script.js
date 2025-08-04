
document.addEventListener("DOMContentLoaded", () => {
  const typewriter = document.getElementById("typewriter");
  const roles = ["Frontend Developer", "UI/UX Enthusiast", "Creative Thinker"];
  let roleIndex = 0;
  let charIndex = 0;
  let typing = true;

  function type() {
    if (typing) {
      if (charIndex < roles[roleIndex].length) {
        typewriter.textContent += roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
      } else {
        typing = false;
        setTimeout(type, 2000);
      }
    } else {
      if (charIndex > 0) {
        typewriter.textContent = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(type, 50);
      } else {
        typing = true;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(type, 500);
      }
    }
  }

  type();

  document.getElementById("theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
  });
});
