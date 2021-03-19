if(window.localStorage){var d=document,h=location.hash,name='note'+h+'.text',input=d.getElementsByTagName('textarea')[0],text=localStorage[name];if(text){input.value=text;}
if(h.length>1){d.title='Note '+h;}
input.addEventListener('input',function(){try{localStorage.setItem(name,input.value);}catch(e){}});}