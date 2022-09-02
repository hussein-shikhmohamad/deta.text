window.onload = setupRefresh;
function setupRefresh()
 {setInterval("refreshBlock();",1000);}
function refreshBlock()
 {$('#r').load("https://raw.githubusercontent.com/hussein-shikhmohamad/deta.text/main/date.text");}
 