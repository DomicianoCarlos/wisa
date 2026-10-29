const data = window.linkBioContent;

const icons = {
  spark: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6L12 3Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="m19 15 .7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7L19 15Z" fill="none" stroke="currentColor" stroke-width="1.2"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5.5" width="18" height="13" rx="2.5" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="m4 7 8 6 8-6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>',
  catalog: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4.5h10.5A3.5 3.5 0 0 1 19 8v11.5H7.5A2.5 2.5 0 0 1 5 17V4.5Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M5 17a2.5 2.5 0 0 1 2.5-2.5H19M9 8h6M9 11h4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
  phone: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.2 4.5 9.5 4l2 4.5-1.8 1.5a13.5 13.5 0 0 0 4.3 4.3l1.5-1.8 4.5 2-.5 2.3c-.2.9-1 1.5-1.9 1.5A14.6 14.6 0 0 1 5.7 6.4c0-.9.6-1.7 1.5-1.9Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="4.5" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="12" r="3.5" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="17.4" cy="6.7" r=".8" fill="currentColor"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9v9M6 6.2v.1M10.5 18v-5.1a3 3 0 0 1 6 0V18M10.5 9v9" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
  facebook: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 20v-7h2.4l.4-2.8h-2.8V8.4c0-.8.2-1.4 1.4-1.4h1.5V4.5c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2h-2.4V13h2.4v7" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>'
};

const $ = (id) => document.getElementById(id);
const escapeHtml = (value) => String(value).replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[char]);

$('profileBio').textContent = data.profile.bio;
$('wisaLogo').src = data.profile.logo;
$('linksHeading').textContent = data.section.title;
$('footerText').textContent = data.footer;
$('repCount').textContent = `${data.representatives.length} contatos`;
$('locationLink').href = data.location.url;
$('locationLabel').textContent = `${data.location.label} `;
$('locationAddress').textContent = data.location.address;
$('locationCity').textContent = data.location.city;

data.links.forEach((link) => {
  const anchor = document.createElement('a');
  anchor.className = `link-card${link.featured ? ' featured' : ''}`;
  anchor.href = link.url;
  anchor.target = '_blank';
  anchor.rel = 'noopener noreferrer';
  anchor.innerHTML = `<span class="link-icon">${icons[link.icon] || icons.arrow}</span><span class="link-copy"><span class="link-eyebrow">${escapeHtml(link.eyebrow)}</span><span class="link-title">${escapeHtml(link.title)}</span><span class="link-description">${escapeHtml(link.description)}</span></span><span class="link-arrow" aria-hidden="true">↗</span>`;
  $('linksList').appendChild(anchor);
});

const stateNames = { AC: 'Acre', AL: 'Alagoas', AP: 'Amapá', AM: 'Amazonas', BA: 'Bahia', CE: 'Ceará', DF: 'Distrito Federal', ES: 'Espírito Santo', GO: 'Goiás', MA: 'Maranhão', MT: 'Mato Grosso', MS: 'Mato Grosso do Sul', MG: 'Minas Gerais', PA: 'Pará', PB: 'Paraíba', PR: 'Paraná', PE: 'Pernambuco', PI: 'Piauí', RJ: 'Rio de Janeiro', RN: 'Rio Grande do Norte', RS: 'Rio Grande do Sul', RO: 'Rondônia', RR: 'Roraima', SC: 'Santa Catarina', SP: 'São Paulo', SE: 'Sergipe', TO: 'Tocantins' };
const stateAssignments = { AC: ['Gottardi Representações'], AM: ['Gottardi Representações'], RR: ['Gottardi Representações'], RO: ['Gottardi Representações'], BA: ['Almaza Comércio e Representações'], SE: ['Almaza Comércio e Representações'], CE: ['MX Representações'], ES: ['Minelli Representações Automotivas'], RJ: ['Minelli Representações Automotivas'], GO: ['Guimarães Representações'], DF: ['Guimarães Representações'], TO: ['Guimarães Representações'], MT: ['Marcial Evandro Lopes Beraldo'], MS: ['Marcial Evandro Lopes Beraldo'], MG: ['Lucas e Ferreira'], PR: ['Marcelo Fossatti Representações', '3R7 Representações'], SC: ['3R7 Representações'], RS: ['JPS Representações LTDA'], SP: ['André Prado'], PE: ['Mais Representações'], AL: ['Mais Representações'], PB: ['Mais Representações'], RN: ['Mais Representações'], PI: ['Lucas Representações'] };

const renderState = (stateCode, focusPanel = false) => {
  const code = String(stateCode || 'SP').toUpperCase();
  const names = stateAssignments[code] || [];
  const statePanel = document.querySelector('.state-panel');
  $('stateTitle').textContent = `${stateNames[code] || 'Brasil'} · ${code}`;
  $('stateHint').textContent = names.length ? (names.length === 1 ? '1 representante disponível para este estado.' : `${names.length} representantes disponíveis para este estado.`) : 'Ainda não há representante cadastrado para este estado.';
  statePanel?.classList.remove('state-panel-updated');
  requestAnimationFrame(() => statePanel?.classList.add('state-panel-updated'));
  const list = $('representativesList');
  list.innerHTML = '';
  data.representatives.filter((rep) => names.includes(rep.name)).forEach((representative) => {
    const card = document.createElement('div');
    card.className = 'representative-card state-card';
    const contactText = representative.phone || representative.email;
    card.innerHTML = `<img class="representative-avatar" src="${escapeHtml(representative.image)}" alt="Logo ou imagem de ${escapeHtml(representative.name)}" loading="lazy" /><div class="representative-copy"><span class="representative-name">${escapeHtml(representative.name)}</span><span class="representative-area">${escapeHtml(representative.area)} · ${escapeHtml(representative.city)}</span><span class="representative-contact">${escapeHtml(contactText)}</span></div><a class="representative-button" href="${escapeHtml(representative.contactUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(representative.contactLabel)} <span aria-hidden="true">↗</span></a>`;
    list.appendChild(card);
  });
  if (!names.length) list.innerHTML = '<div class="empty-state">Selecione outro estado para ver os contatos disponíveis.</div>';
  list.querySelectorAll('.state-card').forEach((card) => requestAnimationFrame(() => card.classList.add('is-visible')));
  if (focusPanel && window.matchMedia('(max-width: 820px)').matches) statePanel?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const setupMap = async () => {
  const map = $('brazilMap');
  try {
    let svg = map.querySelector('svg');
    if (!svg) {
      const svgMarkup = await fetch('brazil-map.svg').then((response) => response.text());
      map.innerHTML = svgMarkup;
      svg = map.querySelector('svg');
    }
    svg.setAttribute('viewBox', '0 0 1080 1080');
    svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
    const svgRect = svg.getBoundingClientRect();
    const viewBox = svg.viewBox.baseVal;
    const points = [...svg.querySelectorAll('path[id^="BR-"]')].flatMap((path) => {
      const rect = path.getBoundingClientRect();
      return [[rect.left, rect.top], [rect.right, rect.top], [rect.left, rect.bottom], [rect.right, rect.bottom]].map(([x, y]) => ({ x: viewBox.x + ((x - svgRect.left) / svgRect.width) * viewBox.width, y: viewBox.y + ((y - svgRect.top) / svgRect.height) * viewBox.height }));
    });
    if (points.length) {
      const minX = Math.min(...points.map((point) => point.x));
      const minY = Math.min(...points.map((point) => point.y));
      const maxX = Math.max(...points.map((point) => point.x));
      const maxY = Math.max(...points.map((point) => point.y));
      const padding = Math.max(maxX - minX, maxY - minY) * 0.02;
    svg.setAttribute('viewBox', `${minX - padding} ${minY - padding} ${maxX - minX + padding * 2} ${maxY - minY + padding * 2}`);
    }
    const selectState = (code) => {
      map.querySelectorAll('path[id^="BR-"]').forEach((element) => { element.classList.remove('is-selected-state'); element.style.fill = '#292a2e'; element.style.stroke = '#777980'; });
      map.querySelectorAll(`#BR-${code}, text#${code}`).forEach((element) => { element.classList.add('is-selected-state'); if (element.tagName.toLowerCase() === 'path') { element.style.fill = '#ed1c24'; element.style.stroke = '#ffffff'; } });
      renderState(code, true);
    };
    map.querySelectorAll('path[id^="BR-"], text[id]').forEach((element) => {
      const code = element.id.replace('BR-', '').toUpperCase();
      element.setAttribute('tabindex', '0');
      element.setAttribute('role', 'button');
      element.addEventListener('click', () => selectState(code));
      element.addEventListener('keydown', (event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); selectState(code); } });
    });
    selectState('SP');
  } catch (error) {
    map.textContent = 'Mapa indisponível';
    renderState('SP');
  }
};
setupMap();

data.socials.forEach((social) => {
  const anchor = document.createElement('a');
  anchor.className = 'social-link';
  anchor.href = social.url;
  anchor.target = '_blank';
  anchor.rel = 'noopener noreferrer';
  anchor.setAttribute('aria-label', social.label);
  anchor.innerHTML = `<span class="social-icon">${icons[social.icon] || escapeHtml(social.shortLabel)}</span><span>${escapeHtml(social.label)}</span>`;
  $('socialLinks').appendChild(anchor);
});

const revealElements = document.querySelectorAll('.link-card, .social-link, .location-link');
revealElements.forEach((element) => element.classList.add('reveal'));
if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), { threshold: 0.12, rootMargin: '0px 0px -35px' });
  revealElements.forEach((element) => revealObserver.observe(element));
} else revealElements.forEach((element) => element.classList.add('is-visible'));

const progressBar = $('scrollProgress');
const backToTop = $('backToTop');
const updateScrollUI = () => { const scrollable = document.documentElement.scrollHeight - window.innerHeight; progressBar.style.width = `${scrollable > 0 ? Math.min(100, (window.scrollY / scrollable) * 100) : 0}%`; backToTop.classList.toggle('show', window.scrollY > 520); };
window.addEventListener('scroll', updateScrollUI, { passive: true });
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
updateScrollUI();

const toast = $('toast');
let toastTimeout;
const showToast = (message) => { toast.textContent = message; toast.classList.add('show'); clearTimeout(toastTimeout); toastTimeout = setTimeout(() => toast.classList.remove('show'), 2400); };
$('shareButton').addEventListener('click', async () => {
  const shareData = { title: data.profile.name, text: data.profile.bio, url: window.location.href };
  try { if (navigator.share) { await navigator.share(shareData); showToast('Compartilhado'); } else if (navigator.clipboard) { await navigator.clipboard.writeText(window.location.href); showToast('Link copiado'); } else showToast('Copie o endereço da página'); } catch (error) { if (error.name !== 'AbortError') showToast('Não foi possível compartilhar'); }
});
