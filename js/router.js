function loadPage(page) {
    fetch(`pages/${page}.html`)
      .then(response => response.text())
      .then(data => {
        document.getElementById('content').innerHTML = data;
      });
  }
  
  window.onhashchange = function() {
    const page = window.location.hash.substr(1) || 'home';
    loadPage(page);
  };
  
  // Load the default page
  loadPage('home');
  