function loadTemplate(templateId, templateUrl) {
    fetch(templateUrl)
      .then(response => response.text())
      .then(data => {
        document.getElementById(templateId).innerHTML = data;
      });
  }
  
  window.onload = function() {
    loadTemplate('header', 'templates/header.html');
    loadTemplate('footer', 'templates/footer.html');
  };
  