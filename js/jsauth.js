function loadPage(page) {
  fetch(`pages/${page}.html`)
    .then(res => {
      if (!res.ok) throw new Error('Page not found');
      return res.text();
    })
    .then(html => {
      document.getElementById('app').innerHTML = html;
      history.pushState({}, '', `/${page}`);
    })
    .catch(err => {
      document.getElementById('app').innerHTML = '<h2>Error loading page</h2>';
    });
}

window.addEventListener('popstate', () => {
  const page = location.pathname.replace('/', '') || 'dashboard';
  loadPage(page);
});