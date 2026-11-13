const identity={
 'Universitas Mercu Buana':{initials:'UMB',image:'assets/logos/mercu-buana.png',url:'https://www.mercubuana.ac.id/'},
 'Mondelez International (Kraft Ultrajaya)':{initials:'MDLZ',image:'assets/logos/mondelez.png',url:'https://www.mondelezinternational.com/'},
 'Eka Jaya International':{initials:'EJI',image:'assets/logos/eji.png',url:'https://eji.co.id/'},
 'Wings Group':{initials:'WG',image:'assets/logos/wings.png',url:'https://wingscorp.com/',color:'#b93536'},
 'Nabati Group':{initials:'NG',image:'assets/logos/nabati.png',url:'https://www.nabatigroup.com/',color:'#cf9d21'},
 'Armila Syari Group':{initials:'AS',image:'assets/logos/armila-transparent.png',url:'https://www.instagram.com/armila_official/',color:'#687b48'},
 'Treasury Gold Indonesia':{initials:'TG',image:'assets/logos/treasury.png',url:'https://www.treasury.id/'},
 'Indonesia Commodity and Derivatives Exchange':{initials:'ICDX',image:'assets/logos/icdx.png',url:'https://www.icdx.co.id/'},
 'Institut Teknologi Bandung':{initials:'ITB',image:'assets/logos/itb-emblem.png',url:'https://itb.ac.id/'},
 'The Indonesian Capital Market Institute':{initials:'TICMI',image:'assets/logos/ticmi.png',url:'https://ticmi.co.id/'},
 'Upskillz':{initials:'U',image:'assets/logos/upskillz.png',url:'https://upskillz.id/'},
 'Enterprise Risk Management Academy':{initials:'ERMA',image:'assets/logos/erma.png',url:'https://www.erm-academy.org/'},
 'Financial Planning Standard Board':{initials:'QWP',image:'assets/logos/qwp.png',url:'https://qwpacademy.com/'}
};

// Warm the small logo files once, before switching journey tabs.
if(typeof Image!=='undefined'){
 Object.values(identity).forEach(({image})=>{if(image){const logo=new Image();logo.src=image;}});
}
function companyMark(name){const c=identity[name]||{initials:name.split(' ').slice(0,2).map(s=>s[0]).join('')};return `<span class="company-mark${name==='Institut Teknologi Bandung'?' itb-mark':''}" style="--mark:${c.color||'#284f4c'}">${c.image?`<img src="${c.image}" alt="${name}" loading="eager" decoding="async" width="${name==='Institut Teknologi Bandung'?42:90}" height="${name==='Institut Teknologi Bandung'?42:56}">`:`<span aria-label="${name}">${c.initials}</span>`}</span>`}
const journeys={
 career:roles.map((r,i)=>({year:[2026,2025,2022,2020,2018,2018,2017][i],date:r[0],title:r[1],org:r[2],bodyId:r[3],bodyEn:r[4],type:'career'})),
 education:[{year:2016,date:'Jan 2016 — Feb 2018',title:'Master of Business Administration',org:'Institut Teknologi Bandung',bodyId:['Program Master of Business Administration di Institut Teknologi Bandung dengan fokus pada manajemen operasi dan keuangan, mencakup keterkaitan proses operasional, pengelolaan sumber daya, dan keuangan dalam bisnis.','<a class="org-source" href="https://scholar.itb.ac.id/thesis/usulan-penambahan-sediaan-untuk-mengoptimalkan-lev_26824" target="_blank" rel="noopener noreferrer">Tesis: Usulan Penambahan Sediaan untuk Mengoptimalkan Level Inventori PT. XYZ ↗</a>'],bodyEn:['Master of Business Administration program at Institut Teknologi Bandung, focused on operations and financial management and the relationships between business operations, resource management, and finance.','<a class="org-source" href="https://scholar.itb.ac.id/thesis/usulan-penambahan-sediaan-untuk-mengoptimalkan-lev_26824" target="_blank" rel="noopener noreferrer">Thesis: A Proposal to Increase Stock to Optimize Inventory Levels at PT. XYZ ↗</a>'],type:'education'},{year:2011,date:'Jul 2011 — Oct 2015',title:'Bachelor Degree · Mathematics',org:'Institut Teknologi Bandung',bodyId:['Program Sarjana Matematika di Institut Teknologi Bandung dengan fokus pada matematika keuangan dan penerapan metode matematika untuk menganalisis persoalan keuangan serta risiko.','<a class="org-source thesis-link" href="document.html?doc=math-thesis&lang=id" target="_blank" rel="noopener noreferrer">Skripsi: Penentuan Harga Path Dependent Options dengan Menggunakan Metode Kombinatorika · Abstrak ↗</a>'],bodyEn:['Undergraduate program in Mathematics at Institut Teknologi Bandung, focused on financial mathematics and the application of mathematical methods to financial problems and risk.','<a class="org-source thesis-link" href="document.html?doc=math-thesis&lang=en" target="_blank" rel="noopener noreferrer">Undergraduate thesis: Combinatorial Method for Pricing Path Dependent Options · Abstracts ↗</a>'],type:'education'}],
 certification:certs.map((c,i)=>({year:c[5],date:c[0],title:c[1],org:c[2],certificate:c,bodyId:[c[4].id],bodyEn:[c[4].en],type:'certification'}))
};
let journeyTab='career',selectedJourney=0;
const words={id:{career:'Karier',education:'Pendidikan',certification:'Sertifikasi',previous:'Sebelumnya',next:'Berikutnya',count:'dari',early:'Awal perjalanan',now:'Peran terakhir di CV'},en:{career:'Career',education:'Education',certification:'Certifications',previous:'Previous',next:'Next',count:'of',early:'Journey begins',now:'Latest role in CV'}};
function journeyItems(){return journeys[journeyTab]}
function renderJourneyBody(item){const body=lang==='id'?item.bodyId:item.bodyEn;if(item.type==='career')return `<ul>${body.map(b=>`<li>${b}</li>`).join('')}</ul>`;return `<p class="journey-description">${body[0]}</p>${body.length>1?`<div class="education-links">${body.slice(1).join('')}</div>`:''}`}
function journeyWebsite(item){
 const url=identity[item.org]?.url;
 if(!url)return '';
 const domain=url.replace(/^https?:\/\/(www\.)?/,'').replace(/\/$/,'');
 return `<a class="milestone-site" href="${url}" target="_blank" rel="noopener noreferrer" aria-label="${lang==='id'?'Kunjungi':'Visit'} ${item.org}">${domain} ↗</a>`;
}
function renderJourney(focus=false){
 const w=words[lang],items=journeyItems();
 selectedJourney=Math.min(selectedJourney,items.length-1);
 const item=items[selectedJourney];
 document.querySelector('#roles').innerHTML=`
 <div class="journey-controls"><div class="journey-tabs" role="group" aria-label="${lang==='id'?'Jenis perjalanan':'Journey category'}">${['career','education','certification'].map(k=>`<button type="button" data-category="${k}" aria-pressed="${journeyTab===k}">${w[k]}</button>`).join('')}</div></div>
 <div class="journey-layout"><div class="milestone-rail" aria-label="Timeline">${items.map((r,i)=>`
  <div class="milestone ${i===selectedJourney?'selected':''}">
   <button type="button" class="milestone-select" data-milestone="${i}" aria-pressed="${i===selectedJourney}" aria-label="${r.year} ${r.org} ${r.date}"></button>
   <span class="rail-dot"></span><span class="rail-year">${r.year}</span>${companyMark(r.org)}
   <span class="milestone-text"><b>${r.org}</b><small>${r.date}</small>${journeyWebsite(r)}</span><span class="rail-arrow" aria-hidden="true">↗</span>
  </div>`).join('')}</div>
 <article class="journey-detail" id="journey-detail" tabindex="-1">
  <div class="detail-top">${companyMark(item.org)}<span class="detail-count">${String(selectedJourney+1).padStart(2,'0')} / ${String(items.length).padStart(2,'0')}</span></div>
  <div class="detail-category">${item.date}</div><h3>${item.title}</h3><p class="detail-org">${item.org}</p>
  ${renderJourneyBody(item)}${item.certificate?certificateLink(item.certificate):''}
  <div class="journey-pager"><button type="button" data-direction="-1" ${selectedJourney===0?'disabled':''} aria-label="${w.previous}">← <span>${w.previous}</span></button><span aria-live="polite">${selectedJourney+1} ${w.count} ${items.length}</span><button type="button" data-direction="1" ${selectedJourney===items.length-1?'disabled':''} aria-label="${w.next}"><span>${w.next}</span> →</button></div>
 </article></div>`;
 document.querySelectorAll('[data-category]').forEach(b=>b.onclick=()=>{journeyTab=b.dataset.category;selectedJourney=0;renderJourney();document.querySelector(`[data-category="${journeyTab}"]`).focus()});
 document.querySelectorAll('.milestone').forEach(card=>card.onclick=event=>{
  if(event.target.closest('a'))return;
  const button=card.querySelector('[data-milestone]');
  selectedJourney=+button.dataset.milestone;renderJourney();document.querySelector(`[data-milestone="${selectedJourney}"]`).focus();
 });
 document.querySelectorAll('[data-direction]').forEach(b=>b.onclick=()=>{selectedJourney+=+b.dataset.direction;renderJourney(true)});
 if(focus)document.querySelector('#journey-detail').focus();
}
document.querySelector('#language').addEventListener('click',()=>renderJourney());renderJourney();
const progress=document.createElement('div');progress.className='reading-progress';progress.setAttribute('aria-hidden','true');document.body.append(progress);let scheduled=false;window.addEventListener('scroll',()=>{if(scheduled)return;scheduled=true;requestAnimationFrame(()=>{const max=document.documentElement.scrollHeight-innerHeight;progress.style.width=(max>0?scrollY/max*100:0)+'%';scheduled=false})},{passive:true});
const sectionObserver=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){document.querySelectorAll('nav a').forEach(a=>{const active=a.hash==='#'+e.target.id;if(active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current')})}})},{rootMargin:'-15% 0px -55% 0px'});document.querySelectorAll('main section[id]').forEach(s=>sectionObserver.observe(s));


