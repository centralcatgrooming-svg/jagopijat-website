/* JagoPijat shared header. Edit this file once -- updates every page. */
(function () {
  const NAV = [
    { href: 'index.html',         label: 'Beranda' },
    { href: 'layanan.html',       label: 'Layanan &amp; Harga' },
    { href: 'booking.html',       label: 'Booking', badge: 'OPEN' },
    { href: 'tentang.html',       label: 'Tentang Kami' },
    { href: 'brand-profile.html', label: 'Brand Profile' },
  ];

  // Detect current page from URL path (defaults to index.html on root /)
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();

  const css = `
.jp-navbar{position:fixed;top:0;left:0;right:0;z-index:200}
.jp-nav-top{background:rgba(14,5,1,.97);backdrop-filter:blur(16px);padding:12px 48px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid rgba(200,148,58,.2)}
.jp-logo-wrap{display:flex;align-items:center;gap:12px;text-decoration:none}
.jp-logo-img{width:44px;height:44px;object-fit:contain;border-radius:50%;border:1.5px solid rgba(200,148,58,.4)}
.jp-logo-brand{display:flex;flex-direction:column;line-height:1}
.jp-logo-name{font-family:'Cinzel',serif;font-size:1.15rem;font-weight:600;color:#C8943A;letter-spacing:.12em}
.jp-logo-tagline{font-family:'Lora',serif;font-size:.65rem;color:rgba(237,224,192,.65);letter-spacing:.12em;text-transform:uppercase;margin-top:2px}
.jp-nav-right{display:flex;align-items:center;gap:14px}
.jp-nav-phone{display:flex;align-items:center;gap:7px;color:rgba(237,224,192,.78);font-size:.8rem;letter-spacing:.04em}
.jp-nav-phone span{color:#C8943A;font-weight:600}
.jp-navcta{background:linear-gradient(135deg,#C8943A,#DFB254);color:#1C0A02;border:none;padding:10px 24px;font-family:'Cinzel',serif;font-weight:600;font-size:.78rem;letter-spacing:.08em;cursor:pointer;border-radius:2px;transition:all .25s;box-shadow:0 3px 14px rgba(200,148,58,.3);text-decoration:none;display:inline-block}
.jp-navcta:hover{transform:translateY(-1px)}
.jp-nav-sub{background:rgba(28,10,2,.95);backdrop-filter:blur(12px);padding:0 48px;border-bottom:1px solid rgba(200,148,58,.12)}
.jp-sub-links{display:flex;align-items:center;gap:0;list-style:none;margin:0;padding:0}
.jp-sub-links li a{display:block;padding:12px 22px;color:rgba(237,224,192,.72);font-size:.75rem;letter-spacing:.1em;text-transform:uppercase;text-decoration:none;font-family:'Cinzel',serif;transition:all .25s;border-bottom:2px solid transparent}
.jp-sub-links li a:hover,.jp-sub-links li a.active{color:#C8943A;border-bottom-color:#C8943A}
.jp-sub-divider{width:1px;height:14px;background:rgba(200,148,58,.2);margin:0 4px}
.jp-sub-badge{background:rgba(200,148,58,.15);color:#C8943A;font-size:.6rem;padding:2px 7px;border-radius:100px;margin-left:6px;border:1px solid rgba(200,148,58,.25)}

/* Hamburger button -- hidden on desktop, shown on mobile */
.jp-burger{display:none;background:transparent;border:1px solid rgba(200,148,58,.4);width:42px;height:38px;border-radius:3px;cursor:pointer;padding:0;align-items:center;justify-content:center;flex-direction:column;gap:5px;transition:all .25s}
.jp-burger:hover{border-color:#C8943A;background:rgba(200,148,58,.08)}
.jp-burger span{display:block;width:18px;height:1.5px;background:#C8943A;transition:transform .3s, opacity .25s}
.jp-burger.open span:nth-child(1){transform:translateY(6.5px) rotate(45deg)}
.jp-burger.open span:nth-child(2){opacity:0}
.jp-burger.open span:nth-child(3){transform:translateY(-6.5px) rotate(-45deg)}

/* Mobile overlay menu */
.jp-overlay{position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(5,2,1,.98);backdrop-filter:blur(20px);z-index:199;opacity:0;visibility:hidden;transition:opacity .3s, visibility .3s;display:flex;align-items:center;justify-content:center;padding:80px 24px 40px}
.jp-overlay.open{opacity:1;visibility:visible}
.jp-overlay-inner{width:100%;max-width:360px}
.jp-overlay-links{list-style:none;display:flex;flex-direction:column;gap:0;margin:0;padding:0}
.jp-overlay-links li{border-bottom:1px solid rgba(200,148,58,.12)}
.jp-overlay-links li:last-child{border-bottom:none}
.jp-overlay-links a{display:block;padding:18px 4px;color:rgba(237,224,192,.85);font-size:1rem;letter-spacing:.08em;text-transform:uppercase;text-decoration:none;font-family:'Cinzel',serif;transition:color .25s}
.jp-overlay-links a:hover,.jp-overlay-links a.active{color:#C8943A}
.jp-overlay-cta{margin-top:32px;display:flex;flex-direction:column;gap:12px}
.jp-overlay-cta a{padding:14px;text-align:center;font-family:'Cinzel',serif;font-size:.82rem;letter-spacing:.1em;text-decoration:none;border-radius:3px;font-weight:600}
.jp-overlay-cta .jp-ocBook{background:linear-gradient(135deg,#C8943A,#DFB254);color:#1C0A02}
.jp-overlay-cta .jp-ocPhone{background:transparent;border:1px solid rgba(200,148,58,.4);color:#C8943A}
body.jp-nav-open{overflow:hidden}

@media(max-width:1024px){
  .jp-nav-phone{display:none}
}
@media(max-width:768px){
  .jp-nav-top{padding:10px 18px}
  .jp-logo-tagline{display:none}
  .jp-logo-name{font-size:.95rem}
  .jp-navcta{display:none}
  .jp-nav-sub{display:none}
  .jp-burger{display:flex}
}
@media(min-width:769px){
  .jp-overlay{display:none !important}
}
`;

  const subLinksHTML = NAV.map((item, i) => {
    const isActive = item.href.toLowerCase() === path ? ' class="active"' : '';
    const badge = item.badge ? ` <span class="jp-sub-badge">${item.badge}</span>` : '';
    const divider = i > 0 ? '<div class="jp-sub-divider"></div>' : '';
    return `${divider}<li><a href="${item.href}"${isActive}>${item.label}${badge}</a></li>`;
  }).join('');

  const overlayLinksHTML = NAV.map(item => {
    const isActive = item.href.toLowerCase() === path ? ' class="active"' : '';
    return `<li><a href="${item.href}"${isActive}>${item.label}</a></li>`;
  }).join('');

  const html = `
<div class="jp-navbar">
  <div class="jp-nav-top">
    <a href="index.html" class="jp-logo-wrap">
      <img src="assets/favicon/logo_transparent.png" class="jp-logo-img" alt="JagoPijat"/>
      <div class="jp-logo-brand">
        <div class="jp-logo-name">JAGOPIJAT</div>
        <div class="jp-logo-tagline">Pijat Tradisional &middot; Home Service</div>
      </div>
    </a>
    <div class="jp-nav-right">
      <div class="jp-nav-phone">&#128222; <span>+62 858-2306-1990</span></div>
      <a href="booking.html" class="jp-navcta">PESAN SEKARANG</a>
      <button class="jp-burger" aria-label="Buka menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
  <nav class="jp-nav-sub">
    <ul class="jp-sub-links">${subLinksHTML}</ul>
  </nav>
</div>
<div class="jp-overlay" role="dialog" aria-modal="true" aria-label="Menu navigasi">
  <div class="jp-overlay-inner">
    <ul class="jp-overlay-links">${overlayLinksHTML}</ul>
    <div class="jp-overlay-cta">
      <a href="booking.html" class="jp-ocBook">PESAN SEKARANG</a>
      <a href="https://wa.me/6285823061990" class="jp-ocPhone">CHAT WHATSAPP</a>
    </div>
  </div>
</div>
`.trim();

  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  const mount = document.getElementById('site-header');
  if (mount) {
    mount.outerHTML = html;
  } else {
    document.body.insertAdjacentHTML('afterbegin', html);
  }

  // Hamburger toggle
  const burger = document.querySelector('.jp-burger');
  const overlay = document.querySelector('.jp-overlay');

  function setOpen(open) {
    burger.classList.toggle('open', open);
    overlay.classList.toggle('open', open);
    document.body.classList.toggle('jp-nav-open', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', open ? 'Tutup menu' : 'Buka menu');
  }

  burger.addEventListener('click', () => setOpen(!overlay.classList.contains('open')));

  // Close overlay when a link is clicked (mobile navigates same-page anchors etc.)
  overlay.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setOpen(false)));

  // Esc closes overlay
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && overlay.classList.contains('open')) setOpen(false);
  });
})();
