system={started:!1,encPassword:"bf0dbd74174039131b667de9f31b5d8012baaf82011b934b2cc0e3bd53a02a1f",global:{volume:50,brightness:100,css:{}},changeBrightness:function(e){this.global.brightness=e,document.querySelector("html").style.filter=`brightness(${system.global.brightness/100})`},changeVolume:function(e){this.global.volume=e,X.services.volume.update()},startup:function(){if(this.started)return!1;this.started=!0,(async()=>{system.build=await(async()=>(await fetch("./build.ver")).text())()})(),X.initialize(),X.services.clock.update.add(document.querySelector("dateTime"),"month>str date  time-s"),X.notification.create(),X.notification.create("Virus Alert","Your computer has a virus","X.cta('JK','No virus here...')","./img/network.svg","persistent")},validatePassword:function(e){return sha256(btoa(e))==system.encPassword},cli:{i:function(e=!1,t=!1){let s=null,a=(e.trim()+" ").split(" "),n=a.splice(0,1)[0].trim();if(console.log(a),0!=a.length&&(1!=a.length||0!==a[0].trim().length)){s={"":[]};let e="";a.forEach(t=>{t.startsWith("-")?(""!=e.trim()&&(s[e]=""),e=t):""!=t.trim()&&(""==e.trim()?s[""].push(t):s[e]=t,e="")})}console.log(s);try{return null!=system.cli.commands[n]?system.cli.commands[n].method(s):n+": command not found"}catch(e){throw console.log(e),`${n}: ${e}`}},commands:{help:{shortHelp:"Displays help pages for commands",help:"Displays a help page for commands\n                    \n    USAGE\n        help\n        help <command>\n                ",method:e=>{let t="";if(null==e)t="-----help-----\n",t+="For more information about a specific command type: help <command>\n\n",t+=Object.entries(system.cli.commands).map(e=>`${e[0]}        ${e[1].shortHelp??"*No short help available*"}\n`).join("");else{let s=Object.values(e)[0];null==system.cli.commands[s]||null==system.cli.commands[s].help?t=`No help for '${s}' try: help help`:(t=`----- ${s} help-----\n\n`,t+=system.cli.commands[s].help+"\n")}return t}},echo:{shortHelp:"Echos your message back to you",help:"Echos your message back to you\n    USAGE\n        echo < message >\n         ----------------\n        echo Hello Word",method:e=>{if(null!=e){let t=e[""].join(" ");return t=t.trim(),'"'==t[0]&&'"'==t.slice(-1)&&(t=t.slice(1,-1)[0]),t}}},app:{shortHelp:"Starts an app",help:"Starts an app\n    USAGE\n        app < app name >\n        ----------------\n        app terminal\n        app notepad\n",method:e=>{let t=e[""][0];if(console.log(t,e[""][0]),null==apps[t])throw t+": No such app";processes.create(t)}}}},shutdown:()=>page.changePage("./html/shutdown.html"),logout:()=>page.changePage("./html/X.html","(async()=>{await retrieveMainJs(false);system.startup();})();"),restart:()=>page.changePage("./html/shutdown.html","afterShutdown='restart'",!1)};