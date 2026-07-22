/* =========================================
   Digital ZN — Main JavaScript
   ========================================= */

/* ── Translations ── */
const i18n = {
  en: {
    nav: { home: 'Home', services: 'Services', portfolio: 'Portfolio', about: 'About', contact: 'Contact' },
    hero: {
      badge: 'Digital Marketing Agency',
      the: 'The', feed: 'Feed',
      we: 'We', lead: 'Lead',
      tagline: 'Digital excellence meets creative power.',
      sub: 'Creative digital agency based in Morocco. We design, build, and film for brands that want to stand out.',
      cta: 'Start Your Journey', see: 'See Our Portfolio', scroll: 'Scroll to explore',
    },
    services: {
      title: 'What We Do',
      subtitle: 'End-to-end digital solutions for brands that dare to lead.',
      items: [
        {icon: '📱',id: 'social-media-design', title: 'Social Media Design', desc: 'Eye-catching posts, stories, covers, and templates tailored for your brand voice across all platforms.', num: '01' },
        {icon: '🖨️',id: 'graphic-design',      title: 'Graphic Design',      desc: 'Print-on-demand, books, roll-ups, brochures, animated PowerPoint presentations, and more.', num: '02' },
        {icon: '💎', id: 'brand-identity',      title: 'Brand Identity',      desc: 'Full brand systems — concept, logo, color palette, typography, mockups, and brand guidelines.', num: '03' },
        {icon: '🌐', id: 'landing-pages',       title: 'Landing Pages',       desc: 'High-converting landing pages built with HTML, CSS & JavaScript — clean, fast, and responsive.', num: '04' },
        {icon: '🎬', id: 'video-editing',       title: 'Video Editing',       desc: 'Professional video editing for reels, ads, and promotional content that captivates your audience.', num: '05' },
        {icon: '🎥', id: 'videography',         title: 'Videography',         desc: 'Photography and videography sessions to produce stunning visual content for your brand.', num: '06' },
      ],
    },
    stats: {
      label: 'By The Numbers',
      title: 'The Numbers Speak',
      items: [
        { value: 100, suffix: '%', label: 'Commitment' },
        { value: 6,   suffix: '',  label: 'Services' },
        { value: 3,   suffix: '',  label: 'Experts' },
      ],
    },
    portfolio: {
      title: 'Selected Portfolio',
      subtitle: 'A glimpse of projects we are proud of. Click any item to view it.',
      viewAll: 'View All Portfolio →',
      visit: 'View project',
    },
    about: {
      title: 'We Are Digital ZN',
      body: 'Born in the digital age, Digital ZN is a full-service creative and digital marketing agency. We partner with ambitious brands to craft strategies that cut through the noise and lead the conversation. Our team of strategists, creators, and technologists work in sync — turning visions into viral moments.',
      vision: 'Our vision is simple: to lead the feed wherever our clients are present.',
      pillars: ['Creative Excellence','Data-Driven Results','Cultural Intelligence','Speed to Market','Transparent Partnership','Measurable ROI'],
    },
    contact: {
      title: "Let's Build Something Great",
      subtitle: 'Ready to lead the feed? Tell us about your project.',
      name: 'Your Name', email: 'Your Email', msg: 'Tell us about your project...',
      servicesLabel: "Services you're interested in (select one or more)",
      servicesError: 'Please select at least one service.',
      send: 'Send Message',
      sending: 'Sending...',
      successTitle: 'Message Sent!', successMsg: "We'll get back to you within 24 hours.",
      errInvalid: 'Please fill in all fields with valid information.',
      errEmail: 'Please enter a valid email address.',
      errLength: 'Message must be between 10 and 2000 characters.',
      errRate: 'You just sent a message. Please wait a moment before sending another.',
    },
    footer: { tagline: '"We Lead The Feed"', rights: 'All rights reserved.' },
  },

  fr: {
    nav: { home: 'Accueil', services: 'Services', portfolio: 'Portfolio', about: 'À Propos', contact: 'Contact' },
    hero: {
      badge: 'Agence de Marketing Digital',
      the: 'The', feed: 'Feed',
      we: 'We', lead: 'Lead',
      tagline: "L'excellence numérique rencontre la puissance créative.",
      sub: "Agence digitale créative basée au Maroc. Nous concevons, développons et réalisons des films pour les marques qui souhaitent se démarquer.",
      cta: 'Commencer', see: 'Voir Notre Portfolio', scroll: 'Défiler pour explorer',
    },
    services: {
      title: 'Ce Que Nous Faisons',
      subtitle: 'Solutions digitales complètes pour les marques qui osent mener.',
      items: [
        {icon: '📱', id: 'social-media-design', title: 'Design pour Réseaux Sociaux', desc: 'Publications, stories, couvertures et modèles attrayants adaptés à la voix de votre marque sur toutes les plateformes.', num: '01' },
        {icon: '🖨️',id: 'graphic-design',      title: 'Design Graphique', desc: 'Impression à la demande, livres, roll-ups, brochures, présentations PowerPoint animées, et plus encore.', num: '02' },
        {icon: '💎', id: 'brand-identity',      title: 'Identité de Marque', desc: 'Systèmes de marque complets — concept, logo, palette de couleurs, typographie, maquettes et charte graphique.', num: '03' },
        {icon: '🌐', id: 'landing-pages',       title: "Pages d'Atterrissage", desc: "Pages d'atterrissage à forte conversion créées avec HTML, CSS et JavaScript — propres, rapides et responsives.", num: '04' },
        {icon: '🎬', id: 'video-editing',       title: 'Montage Vidéo', desc: 'Montage vidéo professionnel pour reels, publicités et contenus promotionnels qui captivent votre audience.', num: '05' },
        {icon: '🎥', id: 'videography',         title: 'Vidéographie', desc: 'Séances de photographie et vidéographie pour produire un contenu visuel impressionnant pour votre marque.', num: '06' },
      ],
    },
    stats: {
      label: 'Par Les Chiffres',
      title: 'Les Chiffres Parlent',
      items: [
        { value: 100, suffix: '%', label: 'Engagement' },
        { value: 6,   suffix: '',  label: 'Services' },
        { value: 3,   suffix: '',  label: 'Experts' },
      ],
    },
    portfolio: {
      title: 'Portfolio Sélectionné',
      subtitle: "Un aperçu des projets dont nous sommes fiers. Cliquez sur un projet pour le voir.",
      viewAll: 'Voir Tout →',
      visit: 'Voir le projet',
    },
    about: {
      title: 'Nous Sommes Digital ZN',
      body: "Né à l'ère numérique, Digital ZN est une agence de marketing créatif et digital à service complet. Nous nous associons avec des marques ambitieuses pour créer des stratégies qui traversent le bruit et mènent la conversation.",
      vision: "Notre vision est simple : mener le fil partout où nos clients sont présents.",
      pillars: ['Excellence Créative','Résultats Data-Driven','Intelligence Culturelle','Rapidité de Mise en Marché','Partenariat Transparent','ROI Mesurable'],
    },
    contact: {
      title: 'Construisons Quelque Chose de Grand',
      subtitle: 'Prêt à mener le fil? Parlez-nous de votre projet.',
      name: 'Votre Nom', email: 'Votre Email', msg: 'Parlez-nous de votre projet...',
      servicesLabel: 'Services qui vous intéressent (sélectionnez un ou plusieurs)',
      servicesError: 'Veuillez sélectionner au moins un service.',
      send: 'Envoyer le Message',
      sending: 'Envoi...',
      successTitle: 'Message Envoyé!', successMsg: 'Nous vous répondrons dans les 24 heures.',
      errInvalid: 'Veuillez remplir tous les champs avec des informations valides.',
      errEmail: 'Veuillez entrer une adresse email valide.',
      errLength: 'Le message doit contenir entre 10 et 2000 caractères.',
      errRate: 'Vous venez d\'envoyer un message. Veuillez patienter avant d\'en envoyer un autre.',
    },
    footer: { tagline: '"We Lead The Feed"', rights: 'Tous droits réservés.' },
  },

  ar: {
    nav: { home: 'الرئيسية', services: 'الخدمات', portfolio: 'أعمالنا', about: 'من نحن', contact: 'اتصل بنا' },
    hero: {
      badge: 'وكالة تسويق رقمي',
      the: 'نحن نَقُودُ',
      we: '', lead: '',
      feed: 'المحتوى',
      tagline: 'حيث يلتقي التميز الرقمي بالقوة الإبداعية.',
      sub: 'وكالة إبداعية رقمية مقرها المغرب. نقوم بالتصميم والبناء والتصوير للعلامات التجارية التي ترغب في التميز.',
      cta: 'ابدأ رحلتك', see: 'شاهد أعمالنا', scroll: 'انتقل للاستكشاف',
    },
    services: {
      title: 'ما نقدمه',
      subtitle: 'حلول رقمية متكاملة للعلامات التجارية الجريئة.',
      items: [
        { icon: '📱',id: 'social-media-design', title: 'تصميم وسائل التواصل الاجتماعي', desc: 'منشورات وقصص وأغلفة وقوالب جذابة مصممة بما يتناسب مع هوية علامتك التجارية على جميع المنصات.', num: '01' },
        { icon: '🖨️',id: 'graphic-design',      title: 'التصميم الجرافيكي', desc: 'الطباعة حسب الطلب، الكتب، الرول أب، الكتيبات، عروض PowerPoint المتحركة، والمزيد.', num: '02' },
        { icon: '💎',id: 'brand-identity',      title: 'هوية العلامة التجارية', desc: 'أنظمة متكاملة للعلامة التجارية — الفكرة، الشعار، لوحة الألوان، الخطوط، النماذج الإعلانية، ودليل الهوية.', num: '03' },
        { icon: '🌐',id: 'landing-pages',       title: 'صفحات الهبوط', desc: 'صفحات هبوط عالية التحويل مبنية باستخدام HTML وCSS وJavaScript — نظيفة، سريعة ومتجاوبة.', num: '04' },
        { icon: '🎬',id: 'video-editing',       title: 'تحرير الفيديو', desc: 'تحرير فيديو احترافي للريلز والإعلانات والمحتوى الترويجي الذي يجذب جمهورك.', num: '05' },
        { icon: '🎥',id: 'videography',         title: 'التصوير', desc: 'جلسات تصوير فوتوغرافي وفيديو لإنتاج محتوى بصري مميز لعلامتك التجارية.', num: '06' },
      ],
    },
    stats: {
      label: 'بالأرقام',
      title: 'الأرقام تتكلم',
      items: [
        { value: 100, suffix: '%', label: 'الالتزام' },
        { value: 6,   suffix: '',  label: 'الخدمات' },
        { value: 3,   suffix: '',  label: 'الخبراء' },
      ],
    },
    portfolio: {
      title: 'أعمال مختارة',
      subtitle: 'لمحة عن مشاريع نفخر بها. انقر على أي عنصر لعرضه.',
      viewAll: 'عرض الكل →',
      visit: 'عرض المشروع',
    },
    about: {
      title: 'نحن ديجيتال ZN',
      body: 'وُلد ديجيتال ZN في العصر الرقمي ليكون وكالة إبداعية وتسويقية رقمية متكاملة الخدمات. نتشارك مع العلامات التجارية الطموحة لصياغة استراتيجيات تخترق الضجيج وتقود الحوار.',
      vision: 'رؤيتنا بسيطة: قيادة الخلاصة أينما تواجد عملاؤنا.',
      pillars: ['التميز الإبداعي','نتائج مبنية على البيانات','الذكاء الثقافي','السرعة في السوق','شراكة شفافة','عائد استثمار قابل للقياس'],
    },
    contact: {
      title: 'لنبنِ شيئاً عظيماً',
      subtitle: 'هل أنت مستعد لقيادة الخلاصة؟ أخبرنا عن مشروعك.',
      name: 'اسمك', email: 'بريدك الإلكتروني', msg: 'أخبرنا عن مشروعك...',
      servicesLabel: 'الخدمات التي تهمك (اختر واحدة أو أكثر)',
      servicesError: 'يرجى اختيار خدمة واحدة على الأقل.',
      send: 'إرسال الرسالة',
      sending: 'جارٍ الإرسال...',
      successTitle: 'تم الإرسال!', successMsg: 'سنتواصل معك خلال 24 ساعة.',
      errInvalid: 'يرجى ملء جميع الحقول بمعلومات صحيحة.',
      errEmail: 'يرجى إدخال بريد إلكتروني صحيح.',
      errLength: 'يجب أن تكون الرسالة بين 10 و 2000 حرف.',
      errRate: 'لقد أرسلت رسالة للتو. يرجى الانتظار قبل إرسال أخرى.',
    },
    footer: { tagline: '"نحن نقود الخلاصة"', rights: 'جميع الحقوق محفوظة.' },
  },
};

/* ── Portfolio data: edit here to add/remove items ── */
const projects = [
  {
    title: 'Graphic Design Showcase',
    cat: 'Branding',
    tags: ['Illustrator', 'InDesign', 'Photoshop'],
    image: 'assets/portfolio-brand.png',
    link: 'https://www.behance.net/',
  },
  {
    title: 'Editing & Videography',
    cat: 'Video',
    tags: ['Premiere Pro', 'Sony FX3', 'After Effects'],
    image: 'assets/intro logo .gif',
    link: 'https://www.youtube.com/',
  },
  {
    title: 'Web Development — Full Stack',
    cat: 'Web',
    tags: ['Website', 'Backend', 'Hosting'],
    image: 'assets/portfolio-landing.png',
    link: 'https://digital-zn.com/',
  },
];

/* ── State ── */
let currentLang = 'en';
let videoPlaying = true;
let statsAnimated = false;
const selectedServices = new Set();

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();
  buildMarquee();
  buildServices();
  buildStats();
  buildWork();
  buildPillars();
  buildServiceChips();
  initScrollReveal();
  initNavbarScroll();
  initHeroTitle();
  initCursor();
  initHamburger();
  applyLang('en');
});

/* ── Language ── */
function setLang(lang) {
  if (!i18n[lang]) return;
  currentLang = lang;
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  const isRTL = lang === 'ar';
  document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  document.documentElement.lang = lang;
  applyLang(lang);
  rebuildDynamic(lang);
}

function applyLang(lang) {
  const t = i18n[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = getNestedKey(t, key);
    if (val !== undefined) el.textContent = val;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    const val = getNestedKey(t, key);
    if (val !== undefined) el.placeholder = val;
  });
}

function getNestedKey(obj, path) {
  return path.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), obj);
}

function rebuildDynamic(lang) {
  buildServices(lang);
  buildStats(lang);
  buildWork(lang);
  buildPillars(lang);
  buildServiceChips(lang);
  updateFooterTagline(lang);
}

/* ── Security helpers ── */
function escapeHTML(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function sanitizeText(str, max = 2000) {
  return String(str ?? '')
    .replace(/<[^>]*>/g, '')
    .replace(/[\u0000-\u001F\u007F]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, max);
}

function isValidEmail(email) {
  if (typeof email !== 'string' || email.length > 254) return false;
  return /^[^\s@<>"']+@[^\s@<>"']+\.[^\s@<>"']{2,}$/.test(email);
}

function isSafeUrl(url) {
  try {
    const u = new URL(url, window.location.origin);
    return u.protocol === 'http:' || u.protocol === 'https:' || u.protocol === 'mailto:';
  } catch (_) {
    return false;
  }
}

/* ── Build Marquee ── */
function buildMarquee() {
  const items = ['Social Media','Content Creation','Logo Design','Digital Marketing','Video Production','Landing Pages','Video Editing','Web Design','Photography','Motion Graphics','Graphic Design','Presentations'];
  const doubled = [...items, ...items];
  const track = document.getElementById('marquee-track');
  if (!track) return;
  track.innerHTML = doubled.map(item =>
    `<div class="marquee-item"><span>${escapeHTML(item)}</span><div class="marquee-dot"></div></div>`
  ).join('');
}

/* ── Build Services ── */
function buildServices(lang = 'en') {
  const t = i18n[lang];
  const grid = document.getElementById('services-grid');
  if (!grid) return;
  grid.innerHTML = t.services.items.map((s, i) =>
    `<div class="service-card reveal reveal-delay-${Math.min(i+1,5)}">
      <div class="card-top">
        <div class="card-icon" >${s.icon}</div>
        <div class="card-num">${escapeHTML(s.num)}</div>
      </div>
      <div class="card-title">${escapeHTML(s.title)}</div>
      <div class="card-desc">${escapeHTML(s.desc)}</div>
      <div class="card-link">Learn more <span>→</span></div>
    </div>`
  ).join('');
  initScrollReveal();
}

/* ── Build Stats ── */
function buildStats(lang = 'en') {
  const t = i18n[lang];
  const grid = document.getElementById('stats-grid');
  if (!grid) return;
  statsAnimated = false;
  grid.innerHTML = t.stats.items.map((s, i) =>
    `<div class="stat-item reveal reveal-delay-${i+1}">
      <div class="stat-value" data-target="${s.value}" data-suffix="${escapeHTML(s.suffix)}">0${escapeHTML(s.suffix)}</div>
      <div class="stat-label">${escapeHTML(s.label)}</div>
    </div>`
  ).join('');
  initScrollReveal();
  observeStats();
}

function observeStats() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !statsAnimated) {
        statsAnimated = true;
        animateCounters();
        observer.disconnect();
      }
    });
  }, { threshold: 0.3 });
  const grid = document.getElementById('stats-grid');
  if (grid) observer.observe(grid);
}

function animateCounters() {
  document.querySelectorAll('.stat-value[data-target]').forEach(el => {
    const target = parseInt(el.dataset.target, 10);
    const suffix = el.dataset.suffix || '';
    const duration = 2000;
    const step = 16;
    let current = 0;
    const increment = target / (duration / step);
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) { current = target; clearInterval(timer); }
      el.textContent = Math.floor(current) + suffix;
    }, step);
  });
}

/* ── Build Portfolio ── */
function buildWork(lang = 'en') {
  const t = i18n[lang];
  const grid = document.getElementById('work-grid');
  if (!grid) return;
  grid.innerHTML = projects.map((p, i) => {
    const safeImage = encodeURI(p.image);
    const safeLink = isSafeUrl(p.link) ? p.link : '#';
    return `<a class="work-card reveal reveal-delay-${Math.min(i+1,4)}" href="${escapeHTML(safeLink)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHTML(p.title)}">
      <div class="work-bg" style="background-image:url('${safeImage}')"></div>
      <div class="work-overlay"></div>
      <div class="work-hover-icon"><div class="work-icon-circle">↗</div></div>
      <div class="work-content">
        <div class="work-tags">${p.tags.map(tag => `<span class="work-tag">${escapeHTML(tag)}</span>`).join('')}</div>
        <div class="work-cat">${escapeHTML(p.cat)}</div>
        <div class="work-title">${escapeHTML(p.title)}</div>
        <div class="work-visit">${escapeHTML(t.portfolio.visit)} →</div>
      </div>
    </a>`;
  }).join('');
  document.querySelectorAll('[data-i18n="portfolio.viewAll"]').forEach(el => {
    el.textContent = t.portfolio.viewAll;
  });
  initScrollReveal();
}

/* ── Build Pillars ── */
function buildPillars(lang = 'en') {
  const t = i18n[lang];
  const list = document.getElementById('pillars-list');
  if (!list) return;
  list.innerHTML = t.about.pillars.map(p =>
    `<div class="pillar"><div class="pillar-check">✓</div><span>${escapeHTML(p)}</span></div>`
  ).join('');
}

/* ── Build Service Chips (multi-select) ── */
function buildServiceChips(lang = 'en') {
  const t = i18n[lang];
  const wrap = document.getElementById('services-chips');
  if (!wrap) return;
  wrap.innerHTML = t.services.items.map(s => {
    const isActive = selectedServices.has(s.id);
    return `<button type="button" class="service-chip${isActive ? ' active' : ''}" data-service-id="${escapeHTML(s.id)}" aria-pressed="${isActive}">
      <span class="chip-check" aria-hidden="true">✓</span>
      <span>${escapeHTML(s.title)}</span>
    </button>`;
  }).join('');

  wrap.querySelectorAll('.service-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.serviceId;
      if (!id) return;
      if (selectedServices.has(id)) {
        selectedServices.delete(id);
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      } else {
        selectedServices.add(id);
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
      }
      const err = document.getElementById('services-error');
      if (err && selectedServices.size > 0) err.hidden = true;
    });
  });
}

function updateFooterTagline(lang) {
  const t = i18n[lang];
  document.querySelectorAll('[data-i18n="footer.tagline"]').forEach(el => {
    el.textContent = t.footer.tagline;
  });
  document.querySelectorAll('[data-i18n="footer.rights"]').forEach(el => {
    el.textContent = t.footer.rights;
  });
}

/* ── Scroll Reveal ── */
function initScrollReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
}

/* ── Hero Title Animation ── */
function initHeroTitle() {
  const words = document.querySelectorAll('#hero-title .word span');
  words.forEach((span, i) => {
    span.style.transition = `transform 0.7s cubic-bezier(0.22,1,0.36,1) ${0.4 + i * 0.12}s, opacity 0.7s ${0.4 + i * 0.12}s`;
    span.style.display = 'inline-block';
    setTimeout(() => {
      span.style.transform = 'translateY(0)';
      span.style.opacity = '1';
    }, 50);
  });
}

/* ── Navbar Scroll ── */
function initNavbarScroll() {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = link.getAttribute('href').substring(1);
      const el = document.getElementById(target);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

function smoothScroll(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

/* ── Hamburger ── */
function initHamburger() {
  const ham  = document.getElementById('hamburger');
  const menu = document.getElementById('mobile-menu');
  if (!ham || !menu) return;
  ham.addEventListener('click', () => {
    ham.classList.toggle('open');
    menu.classList.toggle('open');
    document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
  });
}

function closeMobileMenu() {
  const ham = document.getElementById('hamburger');
  const menu = document.getElementById('mobile-menu');
  if (ham) ham.classList.remove('open');
  if (menu) menu.classList.remove('open');
  document.body.style.overflow = '';
}

/* ── Custom Cursor ── */
function initCursor() {
  if (window.innerWidth < 768) return;
  const dot  = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;

  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; }, { passive: true });

  (function animateCursor() {
    dot.style.left = mx + 'px';
    dot.style.top  = my + 'px';
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animateCursor);
  })();

  document.addEventListener('mouseover', e => {
    if (e.target.closest('a, button, .service-card, .work-card')) {
      ring.style.transform = 'translate(-50%,-50%) scale(1.6)';
      ring.style.borderColor = 'rgba(247,112,21,0.8)';
    }
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest('a, button, .service-card, .work-card')) {
      ring.style.transform = 'translate(-50%,-50%) scale(1)';
      ring.style.borderColor = 'rgba(247,112,21,0.5)';
    }
  });
}

/* ── Contact Form (with validation, sanitization, rate limiting) ── */
function showFormError(messageKey, fallback) {
  const t = i18n[currentLang] || i18n.en;
  const el = document.getElementById('form-error');
  if (!el) return;
  el.textContent = (t.contact && t.contact[messageKey]) || fallback || 'Error';
  el.hidden = false;
}
function clearFormError() {
  const el = document.getElementById('form-error');
  if (el) { el.hidden = true; el.textContent = ''; }
}

function handleFormSubmit(e) {
  e.preventDefault();
  clearFormError();

  const form = e.target;
  const t = i18n[currentLang] || i18n.en;

  // Rate limit: 1 submission per 30 seconds, persisted in localStorage.
  try {
    const last = parseInt(localStorage.getItem('dz_last_submit') || '0', 10);
    if (Date.now() - last < 30_000) {
      showFormError('errRate');
      return;
    }
  } catch (_) { /* localStorage unavailable: skip */ }

  const rawName    = form.elements.name.value;
  const rawEmail   = form.elements.email.value;
  const rawPhone   = form.elements.Phone.value;
  const rawMessage = form.elements.message.value;

  const name    = sanitizeText(rawName, 80);
  const email   = sanitizeText(rawEmail, 120);
  const phone   = sanitizeText(rawPhone, 20);
  const message = sanitizeText(rawMessage, 2000);
  const services = Array.from(selectedServices);

  if (!name || !email || !message || !phone) {
    showFormError('errInvalid');
    return;
  }
  if (!isValidEmail(email)) {
    showFormError('errEmail');
    return;
  }
  if (message.length < 10) {
    showFormError('errLength');
    return;
  }
  if (services.length === 0) {
    const err = document.getElementById('services-error');
    if (err) err.hidden = false;
    return;
  }

  const submitBtn = document.getElementById('form-submit');
  if (submitBtn) {
    submitBtn.disabled = true;
    const label = submitBtn.querySelector('span[data-i18n="contact.send"]');
    if (label) label.textContent = t.contact.sending || 'Sending...';
  }

  // Persist submission in console + localStorage for the static build.
  // Wire this to your backend / mail provider when you have one.
  const payload = { name, email,phone, services, message, submittedAt: new Date().toISOString() };
  try {
    console.info('Digital ZN contact submission:', payload);
    const log = JSON.parse(localStorage.getItem('dz_submissions') || '[]');
    log.push(payload);
    localStorage.setItem('dz_submissions', JSON.stringify(log.slice(-20)));
    localStorage.setItem('dz_last_submit', String(Date.now()));
  } catch (_) { /* ignore */ }

  setTimeout(() => {
    form.style.display = 'none';
    const success = document.getElementById('form-success');
    if (success) success.classList.add('show');
  }, 400);
}
