const params=new URLSearchParams(location.search);
const language=params.get('lang')==='id'?'id':'en';
const labels=language==='id'?{back:'← Kembali ke profil',eyebrow:'DOKUMEN',previous:'← Sebelumnya',next:'Berikutnya →',zoom:'Perbesar',fit:'Sesuaikan',loading:'Memuat halaman…',error:'Dokumen tidak dapat dimuat. Silakan coba lagi.',page:'Halaman',of:'dari'}:{back:'← Back to profile',eyebrow:'DOCUMENT',previous:'← Previous',next:'Next →',zoom:'Zoom in',fit:'Fit page',loading:'Loading page…',error:'The document could not be loaded. Please try again.',page:'Page',of:'of'};
document.documentElement.lang=language;
for(const key of ['back','eyebrow','previous','next'])document.getElementById(key).textContent=labels[key];
const image=document.getElementById('page'),stage=document.getElementById('stage'),status=document.getElementById('status');
const previous=document.getElementById('previous'),next=document.getElementById('next'),zoom=document.getElementById('zoom');
let entry,index=0;
zoom.textContent=labels.zoom;
function renderPage(){
 status.textContent=labels.loading;image.hidden=true;
 image.alt=`${entry.title} — ${labels.page} ${index+1}`;
 image.src=entry.pages[index];
 document.getElementById('count').textContent=`${index+1} ${labels.of} ${entry.pages.length}`;
 previous.disabled=index===0;next.disabled=index===entry.pages.length-1;
 stage.scrollTop=0;stage.scrollLeft=0;
}
image.onload=()=>{image.hidden=false;status.textContent='';window.cvAnalytics?.track('document_page_view',{document_id:params.get('doc'),page_number:index+1});};
image.onerror=()=>{status.textContent=labels.error;};
previous.onclick=()=>{if(index>0){index--;renderPage();}};
next.onclick=()=>{if(entry&&index<entry.pages.length-1){index++;renderPage();}};
zoom.onclick=()=>{const active=stage.classList.toggle('zoomed');zoom.setAttribute('aria-pressed',String(active));zoom.textContent=active?labels.fit:labels.zoom;};
stage.addEventListener('keydown',event=>{if(event.key==='ArrowRight'&&!next.disabled){next.click();event.preventDefault();}if(event.key==='ArrowLeft'&&!previous.disabled){previous.click();event.preventDefault();}});
fetch('assets/documents/manifest.json').then(response=>{if(!response.ok)throw Error('manifest');return response.json();}).then(manifest=>{
 entry=manifest[params.get('doc')];if(!entry)throw Error('document');
 document.getElementById('title').textContent=entry.title;
 document.title=`${entry.title} · Dzulfikar Fahlevi`;
 renderPage();
}).catch(()=>{document.getElementById('title').textContent=language==='id'?'Dokumen tidak tersedia':'Document unavailable';status.textContent=labels.error;zoom.disabled=true;});
