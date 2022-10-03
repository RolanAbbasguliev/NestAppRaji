let loadClient = document.getElementById("load-info-client");
let before_loadtime = new Date().getTime();

window.onload = Pageloadtime;
function Pageloadtime() {
  let aftr_loadtime = new Date().getTime();
  let pgloadtime = (aftr_loadtime - before_loadtime)
  let text = document.createTextNode('Load time client: ' + pgloadtime + ' ms (client)');
  loadClient.innerHTML = 'Load time client: ' + pgloadtime + ' ms (client)'
}
