function loadTemplate(templateId, templateUrl) {
  fetch(templateUrl)
      .then(response => response.text())
      .then(data => {
          document.getElementById(templateId).innerHTML = data;
      })
      .catch(error => console.error("Error loading template:", error));
}

window.onload = function() {
  loadTemplate('header', 'templates/header.html');
  loadTemplate('footer', 'templates/footer.html');
  loadTemplate('sidebar', 'templates/sidebar.html'); 
};
