const panels = document.querySelectorAll(".panel");
console.log(panels);

panels.forEach((panel) => {
    panel.addEventListener("click", (e) => {
      console.log(e.target);
      e.target.classList.add("click-panel");
    //   e.target.style.transform = "scale(0.7)";
    });
  });