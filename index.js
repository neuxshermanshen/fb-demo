function loadPage(p) {
  const iframe = document.getElementById('iframe');
  const file = `${p < 10 ? '0' + p : p}.html`
  iframe.src = `${file}`;
}

window.onload = function () {
  const totalPages = 40;
  const baseUrl = location.origin + location.pathname;

  const url = window.location.href;
  const index = url.indexOf('?');
  const page = index > -1 ? url.substr(index + 1) : 1;

  const btnsContainer = document.getElementById('btns');
  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement('button');
    btn.innerText = i;
    const uri = `${baseUrl}?${i}`;
    btn.onclick = function () {
      location.replace(uri);
    }
    if (`${i}` == `${page}`) {
      btn.style.background = 'yellow';
    }
    btnsContainer.appendChild(btn);
  }

  loadPage(page);
}