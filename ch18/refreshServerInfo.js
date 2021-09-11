function refreshServerInfo() {
  const req = new XMLHttpRequest();
  req.addEventListener('load', function() {
    // this.responseText is a string containing JSON; we use
    // JSON.parse to convert it to an object
    const data = JSON.parse(this.responseText);
    // In this example, we only want to replace text within the <div>
    // that has class "serverInfo"
    const serverInfo = document.querySelector('.serverInfo');
    // Iterate over the keys in the object returned from the server
    // ("platform", "nodeVersion", and "uptime"):
    Object.entries(data).forEach(([key, val]) => {
      // Find elements to replace for this property (if any)
      const replacements =
        serverInfo.querySelectorAll(`[data-replace="${key}"]`);
      // replace all elements with the value returned from the server
      for(let r of replacements) {
        r.textContent = val;
      }
    });
  });
  req.open('GET', 'http://localhost:7070', true);
  req.send();
}

setInterval(refreshServerInfo, 200);
