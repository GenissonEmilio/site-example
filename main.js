document.addEventListener("DOMContentLoaded", () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  let pFooter = document.getElementById('rodape');
  
  //Update footer date
  pFooter.textContent = `2006 - ${currentYear}`;
})