/* Aggregate, cookie-free analytics. No Google tag, advertising or visitor identity. */
(()=>{
 const config=window.CV_ANALYTICS_CONFIG||{},disabledKey='cv_analytics_disabled';
 const validDocs=['cv','icofr','fraud-risk','ermcp','math-thesis','icmeb-2018'];
 const eventNames=['cv_download','certification_click','contact_click','journey_tab_select','document_view','document_page_view'];
 const dataKeys=['file_name','placement','contact_method','certificate_id','journey_category','document_id','page_number'];
 const params=new URLSearchParams(location.search),production=location.hostname===config.productionHost;
 const enabled=production&&/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/i.test(config.websiteId||'');
 let disabled=false,loaded=false,script,queue=[];
 try{
  const old=JSON.parse(localStorage.getItem('cv_analytics_choice_v1'));
  if(old?.value==='declined')localStorage.setItem(disabledKey,'true');
  disabled=localStorage.getItem(disabledKey)==='true';
  localStorage.removeItem('cv_analytics_choice_v1');
 }catch{}
 // Retire only the old analytics cookies; no replacement identifier is written.
 if(production)try{for(const item of document.cookie.split(';')){const name=item.trim().split('=')[0];if(name==='_ga'||name.startsWith('_ga_'))for(const domain of ['',location.hostname,'.'+location.hostname])document.cookie=name+'=; Max-Age=0; path=/'+(domain?'; domain='+domain:'');}}catch{}
 function privacySignal(){return navigator.doNotTrack==='1'||navigator.globalPrivacyControl===true;}
 function cleanPath(){const url=new URL(location.pathname,location.origin);for(const key of ['utm_source','utm_medium','utm_campaign','utm_content','utm_term']){const value=params.get(key);if(value&&!value.includes('@'))url.searchParams.set(key,value.slice(0,100));}const doc=params.get('doc');if(validDocs.includes(doc))url.searchParams.set('doc',doc);return url.pathname+url.search;}
 function cleanReferrer(){try{return document.referrer?new URL(document.referrer).origin:'';}catch{return '';}}
 function payload(props){return {...props,url:cleanPath(),referrer:cleanReferrer(),title:document.title};}
 function emit(name,data){try{window.umami.track(props=>({...payload(props),name,data}));}catch{}}
 function track(name,details={}){
  if(!enabled||disabled||privacySignal()||!eventNames.includes(name))return;
  const data={site_language:document.documentElement.lang==='id'?'id':'en'};
  for(const key of dataKeys){const value=details[key];if(typeof value==='number'&&Number.isFinite(value))data[key]=value;else if(typeof value==='string'&&!value.includes('@'))data[key]=value.slice(0,100);}
  if(loaded)emit(name,data);else if(queue.length<40)queue.push([name,data]);
 }
 function start(){
  if(!enabled||disabled||privacySignal()||script)return;
  script=document.createElement('script');script.async=true;script.src=config.scriptUrl;
  script.setAttribute('data-website-id',config.websiteId);
  script.setAttribute('data-auto-pageview','false');
  script.setAttribute('data-do-not-track','true');
  script.setAttribute('data-domains',config.productionHost);
  script.onload=()=>{if(!window.umami?.track||disabled||privacySignal())return;loaded=true;window.umami.track(props=>payload(props));const pending=queue;queue=[];pending.forEach(([name,data])=>emit(name,data));};
  document.head.append(script);
  const doc=params.get('doc');if(validDocs.includes(doc))track('document_view',{document_id:doc});
 }
 function renderPreference(){document.querySelectorAll('[data-analytics-toggle]').forEach(button=>{button.textContent=privacySignal()?'Do Not Track is respected / Do Not Track dihormati':disabled?'Enable anonymous analytics / Aktifkan analitik anonim':'Disable anonymous analytics / Nonaktifkan analitik anonim';button.disabled=privacySignal();});}
 window.cvAnalytics={track};
 document.addEventListener('click',event=>{
  const target=event.target.closest('a,button');if(!target)return;
  if(target.matches('[data-analytics-toggle]')){disabled=!disabled;try{if(disabled)localStorage.setItem(disabledKey,'true');else localStorage.removeItem(disabledKey);}catch{}if(disabled)queue=[];else{if(loaded)window.umami.track(props=>payload(props));else start();}renderPreference();return;}
  if(target.matches('a[download]')&&target.getAttribute('href')==='Dzulfikar-Fahlevi-CV.pdf')track('cv_download',{file_name:'Dzulfikar-Fahlevi-CV.pdf',placement:target.closest('#contact')?'contact':'hero'});
  else if(target.matches('a[href^="mailto:"]'))track('contact_click',{contact_method:'email',placement:target.closest('#contact')?'contact':'other'});
  else if(target.matches('.certificate-link')){const url=new URL(target.href,location.href),doc=url.searchParams.get('doc');track('certification_click',{certificate_id:validDocs.includes(doc)?doc:'qwp-directory'});}
  else if(target.matches('[data-category]'))track('journey_tab_select',{journey_category:target.dataset.category});
 });
 window.addEventListener('storage',event=>{if(event.key===disabledKey){disabled=event.newValue==='true';if(disabled)queue=[];else if(!script)start();renderPreference();}});
 renderPreference();start();
})();
