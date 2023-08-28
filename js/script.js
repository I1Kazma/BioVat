const arrowLinks = document.querySelectorAll("#arrow_link");

arrowLinks.forEach((svg) => {
  const line_1 = svg.querySelector("#Line_1");
  const line_2 = svg.querySelector("#Line_2");

  svg.addEventListener("mouseover", () => {
    line_1.setAttribute("x2", "125");
    line_2.setAttribute("x2", "125");
    line_2.setAttribute("x1", "78.1611");
  });

  svg.addEventListener("mouseout", () => {
    line_1.setAttribute("x2", "113");
    line_2.setAttribute("x2", "113");
    line_2.setAttribute("x1", "66.1611");
  });
});
