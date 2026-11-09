const identity={
 'Mondelez International (Kraft Ultrajaya)':{initials:'MDLZ',image:'assets/mondelez.png',url:'https://www.mondelezinternational.com/'},
 'Eka Jaya International':{initials:'EJI',image:'assets/eji.png',url:'https://eji.co.id/'},
 'Wings Group':{initials:'WG',image:'assets/wings.png'},
 'Nabati Group':{initials:'NG',image:'assets/nabati.png'},
 'Armila Syari Group':{initials:'AS',image:'assets/armila-transparent.png'},
 'Treasury Gold Indonesia':{initials:'TG',image:'assets/treasury.png',url:'https://www.treasury.id/'},
 'Indonesia Commodity and Derivatives Exchange':{initials:'ICDX',image:'assets/icdx.png',url:'https://www.icdx.co.id/'},
 'Institut Teknologi Bandung':{initials:'ITB',image:'assets/itb-emblem.png',url:'https://itb.ac.id/'},
 'The Indonesian Capital Market Institute':{initials:'TICMI',image:'assets/ticmi.png'},
 'Upskillz':{initials:'U',image:'assets/upskillz.png'},
 'Enterprise Risk Management Academy':{initials:'ERMA',image:'assets/erma.png'},
 'Financial Planning Standard Board':{initials:'QWP',image:'assets/qwp.png'}
};

function companyMark(name){
 const c=identity[name]||{initials:name.split(' ').slice(0,2).map(s=>s[0]).join('')};
 const itb=name==='Institut Teknologi Bandung';
 return `<span class="company-mark${itb?' itb-mark':''}">${c.image?`<img src="${c.image}" alt="${name}" loading="eager" decoding="async" width="${itb?42:90}" height="${itb?42:56}">`:`<span aria-label="${name}">${c.initials}</span>`}</span>`;
}

const thesis='https://scholar.itb.ac.id/thesis/usulan-penambahan-sediaan-untuk-mengoptimalkan-lev_26824';
const journeys={
 career:roles.map(r=>({date:r[0],title:r[1],org:r[2],bodyId:r[3],bodyEn:r[4],type:'career'})),
 education:[
  {date:'Jan 2016 — Feb 2018',title:'Master of Business Administration',org:'Institut Teknologi Bandung',
   bodyId:['Saya mengambil MBA di ITB dengan fokus manajemen operasi dan manajemen keuangan. Di sini saya belajar bagaimana keputusan operasional dan keputusan keuangan saling memengaruhi dalam bisnis.',`<a class="org-source" href="${thesis}" target="_blank" rel="noopener noreferrer">Tesis: Usulan Penambahan Sediaan untuk Mengoptimalkan Level Inventori PT. XYZ ↗</a>`],
   bodyEn:['I completed my MBA at ITB, focusing on operations management and financial management. I learned how operational and financial decisions affect each other in a business.',`<a class="org-source" href="${thesis}" target="_blank" rel="noopener noreferrer">Thesis: Usulan Penambahan Sediaan untuk Mengoptimalkan Level Inventori PT. XYZ ↗</a>`],type:'education'},
  {date:'Jul 2011 — Oct 2015',title:'Bachelor Degree · Mathematics',org:'Institut Teknologi Bandung',
   bodyId:['Saya kuliah Matematika di ITB dengan fokus matematika keuangan, yaitu memakai pendekatan matematika untuk memahami persoalan keuangan dan risiko.'],
   bodyEn:['I studied Mathematics at ITB with a focus on financial mathematics, using mathematical approaches to understand financial problems and risk.'],type:'education'}
 ],
 certification:certs.map(c=>({date:c[0],title:c[1],org:c[2],certificate:c,bodyId:[c[4].id],bodyEn:[c[4].en],type:'certification'}))
};

let journeyTab='career',selectedJourney=0;
const words={
 id:{career:'Karier',education:'Pendidikan',certification:'Sertifikat',source:'Situs organisasi ↗',tabs:'Kategori perjalanan'},
 en:{career:'Career',education:'Education',certification:'Certificates',source:'Organization website ↗',tabs:'Journey category'}
};

function renderJourneyBody(item){
 const body=lang==='id'?item.bodyId:item.bodyEn;
 if(item.type==='career')return `<ul>${body.map(b=>`<li>${b}</li>`).join('')}</ul>`;
 return `<p class="journey-description">${body[0]}</p>${body.length>1?`<div class="education-links">${body.slice(1).join('')}</div>`:''}`;
}

function renderEntry(item){
 const org=identity[item.org];
 const links=(item.certificate?certificateLink(item.certificate):'')+(org?.url?`<a class="org-source" href="${org.url}" target="_blank" rel="noopener noreferrer">${words[lang].source}</a>`:'');
 return `<li class="entry entry-${item.type}">
  <article class="entry-card">
   <div class="entry-head">${companyMark(item.org)}<div class="entry-title"><h3>${item.title}</h3><p class="entry-org">${item.org}</p></div><span class="entry-date">${item.date}</span></div>
   ${renderJourneyBody(item)}
   ${links?`<div class="entry-links">${links}</div>`:''}
  </article>
 </li>`;
}

function renderJourney(){
 const w=words[lang];
 const items=journeys[journeyTab];
 document.querySelector('#roles').innerHTML=
  `<div class="journey-tabs" role="group" aria-label="${w.tabs}">${['career','education','certification'].map(k=>`<button type="button" data-category="${k}" aria-pressed="${journeyTab===k}">${w[k]}<span class="tab-count">${journeys[k].length}</span></button>`).join('')}</div>`+
  `<ol class="timeline">${items.map(renderEntry).join('')}</ol>`;
 document.querySelectorAll('[data-category]').forEach(b=>b.onclick=()=>{
  journeyTab=b.dataset.category;selectedJourney=0;renderJourney();
  document.querySelector(`[data-category="${journeyTab}"]`).focus();
 });
}

document.querySelector('#language').addEventListener('click',()=>renderJourney());
renderJourney();

// Reading progress bar and active nav link
const progress=document.createElement('div');progress.className='reading-progress';progress.setAttribute('aria-hidden','true');document.body.append(progress);
let scheduled=false;
window.addEventListener('scroll',()=>{if(scheduled)return;scheduled=true;requestAnimationFrame(()=>{const max=document.documentElement.scrollHeight-innerHeight;progress.style.width=(max>0?scrollY/max*100:0)+'%';scheduled=false})},{passive:true});
const sectionObserver=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){document.querySelectorAll('nav a').forEach(a=>{if(a.hash==='#'+e.target.id)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current')})}})},{rootMargin:'-15% 0px -55% 0px'});
document.querySelectorAll('main section[id]').forEach(s=>sectionObserver.observe(s));
