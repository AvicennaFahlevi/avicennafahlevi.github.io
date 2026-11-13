/* Optional, consent-based GA4. No advertising features or visitor identity fields. */
(()=>{
 const config=window.CV_ANALYTICS_CONFIG||{};
 const key='cv_analytics_choice_v1',maxAge=180*24*60*60*1000;
 const validDocs=['cv','icofr','fraud-risk','ermcp','math-thesis','icmeb-2018'];
 const params=new URLSearchParams(location.search);
 const enabled=/^G-[A-Z0-9]+$/.test(config.measurementId||'')&&location.hostname===config.productionHost;
 let active=false,tagLoaded=false,choice=readChoice(),panel;
 function readChoice(){try{const saved=JSON.parse(localStorage.getItem(key));return saved&&Date.now()-saved.at<maxAge&&['accepted','declined'].includes(saved.value)?saved.value:null;}catch{return null;}}
 function saveChoice(value){choice=value;try{localStorage.setItem(key,JSON.stringify({value,at:Date.now()}));}catch{}}
 function cleanLocation(){const url=new URL(location.pathname,location.origin);for(const k of ['utm_source','utm_medium','utm_campaign','utm_content','utm_term']){const value=params.get(k);if(value&&!value.includes('@'))url.searchParams.set(k,value.slice(0,100));}const doc=params.get('doc');if(validDocs.includes(doc))url.searchParams.set('doc',doc);return url.href;}
 function track(name,detail={}){if(!active||choice!=='accepted')return;window.gtag('event',name,{...detail,site_language:document.documentElement.lang==='id'?'id':'en'});}
 function start(){
  if(active||!enabled||choice!=='accepted')return;
  active=true;window['ga-disable-'+config.measurementId]=false;
  window.dataLayer=window.dataLayer||[];
  window.gtag=window.gtag||function(){window.dataLayer.push(arguments);};
  window.gtag('consent',tagLoaded?'update':'default',{analytics_storage:'granted',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});
  window.gtag('js',new Date());
  window.gtag('config',config.measurementId,{allow_google_signals:false,allow_ad_personalization_signals:false,cookie_expires:15552000,page_location:cleanLocation(),...(params.get('analytics_debug')==='1'?{debug_mode:true}:{})});
  if(!tagLoaded){const script=document.createElement('script');script.async=true;script.src='https://www.googletagmanager.com/gtag/js?id='+encodeURIComponent(config.measurementId);document.head.append(script);tagLoaded=true;}
  const doc=params.get('doc');if(validDocs.includes(doc))track('document_view',{document_id:doc});
 }
 function stop(){
  active=false;window['ga-disable-'+config.measurementId]=true;
  if(window.gtag)window.gtag('consent','update',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});
  for(const cookie of document.cookie.split(';')){const name=cookie.trim().split('=')[0];if(name==='_ga'||name.startsWith('_ga_'))for(const domain of ['',location.hostname,'.'+location.hostname])document.cookie=name+'=; Max-Age=0; path=/'+(domain?'; domain='+domain:'');}
 }
 function renderPanel(){
  if(!enabled)return;
  if(panel)panel.remove();
  const id=document.documentElement.lang==='id';
  panel=document.createElement('section');panel.className='analytics-consent';panel.setAttribute('role','region');panel.setAttribute('aria-label',id?'Preferensi analitik':'Analytics preferences');
  panel.innerHTML=`<div><b>${id?'Analitik website':'Website analytics'}</b><p>${id?'Izinkan Google Analytics untuk mengukur kunjungan dan interaksi di profil ini. Pilihan Anda tidak memengaruhi akses ke website.':'Allow Google Analytics to measure visits and interactions on this profile. Your choice does not affect access to the website.'} <a href="privacy.html">${id?'Privasi':'Privacy'}</a></p></div><div class="analytics-actions"><button type="button" data-choice="declined">${id?'Tolak':'Decline'}</button><button type="button" data-choice="accepted">${id?'Izinkan analitik':'Allow analytics'}</button></div>`;
  panel.querySelectorAll('[data-choice]').forEach(button=>button.onclick=()=>{saveChoice(button.dataset.choice);if(choice==='accepted')start();else stop();panel.remove();panel=null;});
  document.body.append(panel);
 }
 window.cvAnalytics={track,preferences:renderPanel};
 function updateLabels(){document.querySelectorAll('[data-analytics-preferences]').forEach(el=>{el.textContent=document.documentElement.lang==='id'?'Preferensi analitik':'Analytics preferences';});}
 updateLabels();
 document.addEventListener('click',event=>{
  const target=event.target.closest('a,button');if(!target)return;
  if(target.matches('[data-analytics-preferences]')){event.preventDefault();renderPanel();return;}
  if(target.matches('#language')){updateLabels();if(panel)renderPanel();return;}
  if(target.matches('a[download]')&&target.getAttribute('href')==='Dzulfikar-Fahlevi-CV.pdf')track('cv_download',{file_name:'Dzulfikar-Fahlevi-CV.pdf',placement:target.closest('#contact')?'contact':'hero'});
  else if(target.matches('a[href^="mailto:"]'))track('contact_click',{contact_method:'email',placement:target.closest('#contact')?'contact':'other'});
  else if(target.matches('.certificate-link')){const url=new URL(target.href,location.href),doc=url.searchParams.get('doc');track('certification_click',{certificate_id:validDocs.includes(doc)?doc:'qwp-directory'});}
  else if(target.matches('[data-category]'))track('journey_tab_select',{journey_category:target.dataset.category});
 });
 window.addEventListener('storage',event=>{if(event.key===key){choice=readChoice();if(choice==='accepted')start();else stop();}});
 if(enabled){if(choice==='accepted')start();else if(!choice)renderPanel();}
})();
