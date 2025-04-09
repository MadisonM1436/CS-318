
document.addEventListener('DOMContentLoaded', function () {
    var rotate = function (component, step) {
      var slide = component.querySelector('.slide');
      let slideWidthVw = ((slide.offsetWidth / document.documentElement.clientWidth) - 1) * 100;
      var left = Number(slide.style.left.replace('vw', '')) || 0;
      left += step * 100;
      if (left > 0) left = 0;
      if (left < -slideWidthVw) left = -slideWidthVw;
      slide.style.left = left + 'vw';
    };
  
    var components = document.querySelectorAll('.gallery');
    for (var i = 0; i < components.length; i++) {
      let component = components[i];
      component.querySelector('.left').addEventListener('click', function () {
        rotate(component, 1);
      });
      component.querySelector('.right').addEventListener('click', function () {
        rotate(component, -1);
      });
    }
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.cloner').forEach(function (cloner) {
      cloner.querySelector('.add-button').addEventListener('click', function () {
        cloneRow(cloner);
      });
      cloneRow(cloner); 
    });
  });
  
  function cloneRow(cloner) {
    let container = cloner.querySelector('.container');
    let template = cloner.querySelector('template');
    let clon = template.content.cloneNode(true);
    container.appendChild(clon);
  }
  
  function removeRow(e) {
    let button = e.target;
    let row = button.closest('.row');
    row.remove();
  }

  document.addEventListener("DOMContentLoaded", function () {
    let orderButton = document.querySelector('form a[href="#"]');
    let dialog = document.querySelector('form dialog');
    let closeBtn = document.querySelector('.close');
  
    if (orderButton && dialog && closeBtn) {
      orderButton.addEventListener('click', function (e) {
        e.preventDefault(); 
        dialog.classList.toggle('show');
      });
  
      closeBtn.addEventListener('click', function () {
        dialog.classList.toggle('show');
      });
    }
  });
  