

let canvas = document.getElementById('canvas');
let increment = document.getElementById('increment');
let decrement = document.getElementById('decrement');
let context = canvas.getContext('2d');

for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 6; j++) {
    context.fillStyle = `rgb(${255-42.5*i}, ${255-42.5*j}, ${42.5*i})`;
    context.fillRect(j * 25, i * 25, 25, 25);
  }
  
}
var mod = 0
// setInterval(() => {
// mod ++;
// // console.log(mod)
// }, 100);
context.fillRect(5, 5, mod, 10);
  
console.log(canvas.clientWidth)
console.log(canvas.clientHeight)

increment.addEventListener('click', (e) => {
  mod+=10
})
decrement.addEventListener('click', (e) => {
  mod-=10
})

window.addEventListener('resize', draw);


// {
//   "editor.tabSize": 2,
//   "window.zoomLevel": -1,
//   "git.autofetch": true,
//   "editor.suggestSelection": "first",
//   "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
//   "files.exclude": {
//       "**/.classpath": true,
//       "**/.project": true,
//       "**/.settings": true,
//       "**/.factorypath": true
//   },
//   "python.jediEnabled": false,
//   "php.validate.executablePath": "D:\\xampp\\php\\php.exe",
//   "php.executablePath": "D:\\xampp\\php\\php.exe",
//   "php.suggest.basic": false,
//   "diffEditor.ignoreTrimWhitespace": true,
//   "plsql-language.oracleConnection.enable": true,
//   "editor.renameOnType": true,
//   "cSpell.language": "en",
//   "workbench.iconTheme": "material-icon-theme",
//   "terminal.integrated.shell.windows": "C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe",
//   "java.jdt.ls.vmargs": "-XX:+UseParallelGC -XX:GCTimeRatio=4 -XX:AdaptiveSizePolicyWeight=90 -Dsun.zip.disableMemoryMapping=true -Xmx1G -Xms100m -javaagent:\"c:\\Users\\Indra\\.vscode\\extensions\\gabrielbb.vscode-lombok-1.0.1\\server\\lombok.jar\"",
//   // "editor.fontFamily": "Fira Code",
//   "editor.fontFamily": "CascadiaCode Nerd Font, Consolas, 'Courier New', monospace",
//   "editor.fontLigatures": true,
//   "java.semanticHighlighting.enabled": true,
//   "editor.fontSize": 15,
//   "python.languageServer": "Microsoft"
// }