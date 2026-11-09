// Career entries: [date, title, organization, Indonesian bullets, English bullets]
const roles=[
['Aug — Sep 2026','Business Process Improvement and Management System Assistant Manager','Eka Jaya International',
 ['Menyusun SOP agar proses lebih standar, peran tiap pihak jelas, dan operasional berjalan konsisten.',
  'Membantu process owner lewat SOP generator berbasis AI, sehingga membuat dan memperbarui SOP jadi lebih mudah.'],
 ['Developed SOPs to standardize processes, clarify responsibilities, and keep operations consistent.',
  'Supported process owners with an AI-powered SOP generator to make creating and updating SOPs easier.']],
['Dec 2025 — Aug 2026','Business Process Improvement Associate Manager','Wings Group',
 ['Merancang framework manajemen risiko dari nol: governance, risk appetite &amp; tolerance, metode asesmen, serta monitoring dan pelaporan.',
  'Membangun sistem manajemen risiko di Google AppSheet untuk risk register, progres mitigasi, dan pemantauan risiko.',
  'Melakukan review proses bisnis dan risk assessment untuk menemukan risiko operasional, potensi fraud, inefisiensi, dan kelemahan kontrol.'],
 ['Designed a risk management framework from the ground up: governance, risk appetite and tolerance, assessment methodology, monitoring, and reporting.',
  'Built a Google AppSheet risk management system for risk registers, mitigation progress, and ongoing monitoring.',
  'Conducted business process reviews and risk assessments to identify operational risks, potential fraud, inefficiencies, and control weaknesses.']],
['Dec 2022 — Dec 2025','Senior Risk Analyst','Nabati Group',
 ['Melakukan asesmen risiko operasional di supply chain, manufaktur, QSR, serta sales &amp; distribution dalam dan luar negeri.',
  'Merancang dan menerapkan continuous monitoring Key Risk Indicators (KRI) sebagai early warning system.',
  'Menyampaikan Strategic Risk Assessment beserta rekomendasi mitigasi kepada Board of Directors.'],
 ['Performed operational risk assessments across supply chain, manufacturing, QSR, and domestic and overseas sales &amp; distribution.',
  'Designed and implemented continuous monitoring of Key Risk Indicators (KRIs) as an early warning system.',
  'Presented Strategic Risk Assessments and mitigation recommendations to the Board of Directors.']],
['Dec 2020 — Dec 2022','Strategic and Risk Executive','Armila Syari Group',
 ['Melakukan Strategic Risk Assessment untuk memetakan risiko sekaligus peluang pengembangan bisnis.',
  'Mendorong pertumbuhan bisnis lewat penambahan lini produk yang sejalan dengan arah strategis perusahaan.'],
 ['Conducted Strategic Risk Assessments to map risks and business development opportunities.',
  'Drove business growth through product line expansion aligned with the company’s strategic direction.']],
['Jul 2018 — Nov 2020','Strategic Risk and Compliance Lead','Treasury Gold Indonesia',
 ['Memastikan kepatuhan terhadap regulasi keuangan, termasuk kebijakan AML dan KYC untuk transaksi emas.',
  'Menganalisis risiko yang memengaruhi harga emas dan dampaknya terhadap target perusahaan.'],
 ['Ensured compliance with financial regulations, including AML and KYC policies for gold transactions.',
  'Analyzed risks affecting gold prices and their potential impact on company objectives.']],
['Jul — Dec 2018','Business Assistant to Director','Indonesia Commodity and Derivatives Exchange',
 ['Mendampingi Direktur dalam menjalankan inisiatif perluasan lini bisnis.',
  'Melakukan asesmen risiko operasional clearing house untuk menemukan titik-titik yang rawan.',
  'Mengikuti perkembangan regulasi keuangan dan praktik industri sebagai dasar pengelolaan risiko clearing house.'],
 ['Supported the Director in carrying out business line expansion initiatives.',
  'Performed in-depth risk assessments of clearing house operations to identify vulnerabilities.',
  'Kept up with financial regulations and industry practices to support clearing house risk management.']],
['Jun — Dec 2017','Supply Planning Intern','Mondelez International (Kraft Ultrajaya)',
 ['Membantu tim supply planning dengan meninjau dan mengevaluasi model safety stock yang dipakai untuk perencanaan persediaan.'],
 ['Supported supply planning by reviewing and evaluating the safety stock model used in inventory planning.']]
];

const skills=[
 {title:'Enterprise Risk Management',
  id:'Menyusun framework manajemen risiko dari nol, mulai dari governance, risk appetite dan tolerance, metode asesmen, sampai monitoring dan pelaporan.',
  en:'Developed a risk management framework from the ground up, covering governance, risk appetite and tolerance, assessment methodology, monitoring, and reporting.'},
 {title:'Risk Assessment & Internal Control',
  id:'Mereview proses bisnis untuk menemukan risiko operasional, potensi fraud, inefisiensi, dan kelemahan kontrol. Asesmen yang pernah saya lakukan mencakup supply chain, manufaktur, QSR, serta sales &amp; distribution.',
  en:'Reviewed business processes to identify operational risks, potential fraud, inefficiencies, and control weaknesses. Assessment experience spans supply chain, manufacturing, QSR, and sales and distribution.'},
 {title:'Business Process Improvement & SOP',
  id:'Menyusun SOP supaya alur kerja, peran, dan tanggung jawab jelas. Saya juga menyiapkan SOP generator berbasis AI untuk membantu process owner membuat dan memperbarui dokumen.',
  en:'Developed SOPs to clarify workflows, roles, and responsibilities. Supported process owners with an AI-assisted SOP generator for creating and updating documentation.'},
 {title:'Digital Risk Monitoring',
  id:'Membangun sistem Google AppSheet untuk risk register dan pemantauan progres mitigasi, serta merancang dan menerapkan monitoring Key Risk Indicators sebagai early warning system.',
  en:'Built a Google AppSheet system for risk registers and mitigation tracking. Designed and implemented Key Risk Indicator monitoring as an early warning system.'},
 {title:'Strategic Risk & Leadership Reporting',
  id:'Menyampaikan Strategic Risk Assessment ke Board of Directors, lengkap dengan rekomendasi mitigasi sebagai bahan pengambilan keputusan.',
  en:'Presented Strategic Risk Assessments to the Board of Directors, with mitigation recommendations to support decision-making.'},
 {title:'Financial Compliance & Market Risk',
  id:'Menangani kepatuhan AML dan KYC untuk transaksi emas, serta menganalisis risiko yang memengaruhi harga emas dan dampaknya ke target perusahaan.',
  en:'Handled AML and KYC compliance for gold transactions, and analyzed risks affecting gold prices and their impact on company objectives.'}
];

const toolsUsed=[
 [{id:'Analisis data',en:'Data analysis'},'Excel · SPSS · Python'],
 [{id:'Visualisasi data',en:'Data visualization'},'Power BI · Tableau · Looker'],
 [{id:'Workflow &amp; aplikasi',en:'Workflow &amp; apps'},'Google AppSheet · Apps Script'],
 [{id:'ERP',en:'ERP'},'SAP']
];

// Certificates: [date, title, issuer, link, {id, en}, timeline year]
const certs=[
 ['Mar 2026','Internal Control over Financial Reporting','The Indonesian Capital Market Institute',null,
  {id:'Program pengembangan profesional tentang Internal Control over Financial Reporting (ICFR) dari The Indonesian Capital Market Institute (TICMI). Materinya membahas peran kontrol internal dalam menjaga keandalan laporan keuangan, sejalan dengan fokus saya di risk management dan internal control.',
   en:'Professional development in Internal Control over Financial Reporting (ICFR) through The Indonesian Capital Market Institute (TICMI). It covers how internal controls support reliable financial reporting, which ties in with my focus on risk management and internal control.'},2026],
 ['26–27 Jan 2026','Fraud Risk Management','Upskillz','certificates/Fraud-Risk-Management-Upskillz.pdf',
  {id:'Sertifikat penyelesaian kelas online Fraud Risk Management dari Upskillz pada 26–27 Januari 2026. Pelatihan ini menambah pemahaman saya soal pengelolaan risiko fraud dan kaitannya dengan kontrol internal serta proses bisnis.',
   en:'Training completion certificate for the online Fraud Risk Management class by Upskillz, held on 26–27 January 2026. It added to my understanding of fraud risk management and how it connects to internal controls and business processes.'},2026],
 ['22 Dec 2023 — 22 Dec 2025','Enterprise Risk Management Certified Professional','Enterprise Risk Management Academy','certificates/ERMCP-3111238.pdf',
  {id:'Sertifikasi Enterprise Risk Management Certified Professional (ERMCP) dari Enterprise Risk Management Academy (ERMA) dengan pendekatan ISO 31000. Materinya mencakup manajemen risiko perusahaan, dari identifikasi dan penilaian risiko sampai menyusun langkah penanganannya.',
   en:'Earned the Enterprise Risk Management Certified Professional (ERMCP) qualification from the Enterprise Risk Management Academy (ERMA), using an ISO 31000 approach. It covers enterprise risk management, from identifying and assessing risks to planning risk treatment.'},2023],
 ['2019','Qualified Wealth Planner','Financial Planning Standard Board','https://qwpacademy.com/member',
  {id:'Kualifikasi Qualified Wealth Planner (QWP) yang saya peroleh pada 2019, sebagai bagian dari pengembangan saya di bidang perencanaan keuangan. Kualifikasi ini melengkapi latar belakang saya di matematika keuangan dan manajemen keuangan.',
   en:'Qualified Wealth Planner (QWP) qualification obtained in 2019, as part of my development in financial planning. It complements my background in financial mathematics and financial management.'},2019]
];

let lang='id';

function certificateLink(c){
 if(!c[3])return '';
 const directory=c[3].startsWith('https://');
 const label=directory?(lang==='id'?'Direktori anggota QWP':'QWP member directory'):(lang==='id'?'Lihat sertifikat':'View certificate')+' · PDF';
 const aria=directory?label:(lang==='id'?'Buka sertifikat':'Open certificate')+': '+c[1]+' (PDF)';
 return `<a class="certificate-link" href="${c[3]}" target="_blank" rel="noopener noreferrer" aria-label="${aria}">${label} ↗</a>`;
}

function renderSkills(){
 document.querySelector('#skills').innerHTML=
  `<div class="capability-grid">${skills.map((s,i)=>`<article class="capability"><span class="capability-number">${String(i+1).padStart(2,'0')}</span><h3>${s.title}</h3><p>${s[lang]}</p></article>`).join('')}</div>`+
  `<div class="tools-used"><h3>${lang==='id'?'Tools yang biasa saya pakai':'Tools I work with'}</h3><div class="tool-groups">${toolsUsed.map(t=>`<div><span>${t[0][lang]}</span><div class="chips">${t[1].split(" · ").map(x=>`<span class="chip">${x}</span>`).join("")}</div></div>`).join('')}</div></div>`;
}

renderSkills();

document.querySelector('#language').addEventListener('click',()=>{
 lang=lang==='id'?'en':'id';
 document.documentElement.lang=lang;
 document.querySelectorAll('[data-id]').forEach(e=>e.innerHTML=e.dataset[lang]);
 const b=document.querySelector('#language');
 b.textContent=lang==='id'?'EN':'ID';
 b.setAttribute('aria-label',lang==='id'?'Switch to English':'Ganti ke Bahasa Indonesia');
 document.querySelector('#status').textContent='';
 renderSkills();
});

document.querySelector('#copy').addEventListener('click',async()=>{
 const status=document.querySelector('#status');
 try{await navigator.clipboard.writeText('fahlevi.dzulfikar@gmail.com');status.textContent=lang==='id'?'Email sudah disalin.':'Email copied.'}
 catch{status.textContent=lang==='id'?'Silakan salin manual: fahlevi.dzulfikar@gmail.com':'Please copy: fahlevi.dzulfikar@gmail.com'}
});
