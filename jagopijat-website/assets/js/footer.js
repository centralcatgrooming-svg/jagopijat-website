/* JagoPijat shared footer. Edit this file once -- updates every page. */
(function () {
  const year = new Date().getFullYear();

  const css = `
footer.jp-footer{background:#060200;padding:52px 48px 28px;border-top:1px solid rgba(200,148,58,.12)}
.jp-ft-wrap{max-width:1120px;margin:0 auto}
.jp-ft-top{display:grid;grid-template-columns:2.2fr 1fr 1fr 1fr;gap:48px;margin-bottom:48px}
.jp-ft-logo-area{display:flex;align-items:center;gap:12px;margin-bottom:16px}
.jp-ft-logo-img{width:40px;height:40px;object-fit:contain;border-radius:50%;border:1.5px solid rgba(200,148,58,.35)}
.jp-ft-brand{font-family:'Cinzel',serif;font-size:1.1rem;font-weight:600;color:#C8943A;letter-spacing:.1em}
.jp-ft-desc{color:rgba(237,224,192,.6);font-size:.86rem;line-height:1.75;margin-bottom:20px;max-width:260px}
.jp-ft-social{display:flex;gap:10px}
.jp-ft-soc-btn{width:38px;height:38px;border-radius:50%;background:rgba(200,148,58,.1);border:1px solid rgba(200,148,58,.22);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .25s;text-decoration:none;color:rgba(237,224,192,.6)}
.jp-ft-soc-btn:hover{background:rgba(200,148,58,.25);transform:translateY(-2px);color:#C8943A}
.jp-ft-hd{font-family:'Cinzel',serif;font-size:.78rem;font-weight:600;color:#EDE0C0;margin-bottom:16px;letter-spacing:.1em;text-transform:uppercase}
.jp-ft-ul{list-style:none;display:flex;flex-direction:column;gap:10px;margin:0;padding:0}
.jp-ft-ul a{color:rgba(237,224,192,.6);font-size:.83rem;text-decoration:none;transition:color .25s;font-family:'Lora',serif}
.jp-ft-ul a:hover{color:#C8943A}
.jp-ft-ul span{color:rgba(237,224,192,.6);font-size:.83rem;font-family:'Lora',serif}
.jp-ft-div{width:100%;height:1px;background:linear-gradient(90deg,transparent,rgba(200,148,58,.25),transparent);margin-bottom:24px}
.jp-ft-bot{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px}
.jp-ft-copy{color:rgba(237,224,192,.45);font-size:.75rem;font-family:'Lora',serif}
.jp-ft-links{display:flex;gap:20px}
.jp-ft-links a{color:rgba(237,224,192,.45);font-size:.75rem;text-decoration:none;transition:color .25s;font-family:'Lora',serif}
.jp-ft-links a:hover{color:#C8943A}
@media(max-width:1024px){.jp-ft-top{grid-template-columns:1fr 1fr;gap:32px}}
@media(max-width:768px){footer.jp-footer{padding:40px 18px 20px}.jp-ft-top{grid-template-columns:1fr;gap:28px}.jp-ft-bot{flex-direction:column;align-items:flex-start;gap:10px}.jp-ft-links{flex-wrap:wrap;gap:12px}}
`;

  const html = `
<footer class="jp-footer">
  <div class="jp-ft-wrap">
    <div class="jp-ft-top">
      <div>
        <div class="jp-ft-logo-area">
          <img src="assets/favicon/logo_transparent.png" class="jp-ft-logo-img" alt="JagoPijat"/>
          <div class="jp-ft-brand">JAGOPIJAT</div>
        </div>
        <p class="jp-ft-desc">Layanan pijat &amp; refleksi tradisional terpercaya. Menghadirkan warisan kearifan leluhur ke rumah Anda.</p>
        <div class="jp-ft-social">
          <a href="https://www.instagram.com/jago_pijat" target="_blank" rel="noopener" class="jp-ft-soc-btn" title="Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a>
          <a href="https://wa.me/6285823061990" target="_blank" rel="noopener" class="jp-ft-soc-btn" title="WhatsApp"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.852L.057 23.854a.5.5 0 0 0 .614.614l6.053-1.485A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.693-.528-5.218-1.443l-.374-.222-3.876.951.975-3.814-.243-.393A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg></a>
        </div>
      </div>
      <div>
        <div class="jp-ft-hd">Layanan</div>
        <ul class="jp-ft-ul">
          <li><a href="layanan.html">Pijat Tradisional</a></li>
          <li><a href="layanan.html">Pijat Plus+</a></li>
          <li><a href="layanan.html">Layanan Spesial</a></li>
          <li><a href="layanan.html">Pijat Kombinasi</a></li>
          <li><a href="layanan.html">Bekam Cupping</a></li>
          <li><a href="layanan.html">Terapi Lintah</a></li>
        </ul>
      </div>
      <div>
        <div class="jp-ft-hd">Navigasi</div>
        <ul class="jp-ft-ul">
          <li><a href="index.html">Beranda</a></li>
          <li><a href="tentang.html">Tentang Kami</a></li>
          <li><a href="booking.html">Booking</a></li>
          <li><a href="brand-profile.html">Brand Profile</a></li>
        </ul>
      </div>
      <div>
        <div class="jp-ft-hd">Kontak</div>
        <ul class="jp-ft-ul">
          <li><a href="https://wa.me/6285823061990" target="_blank" rel="noopener">+62 858-2306-1990</a></li>
          <li><a href="https://www.instagram.com/jago_pijat" target="_blank" rel="noopener">@jago_pijat</a></li>
          <li><span>08.00 &ndash; 21.00 WIB</span></li>
          <li><span>Jakarta &amp; Jabodetabek</span></li>
        </ul>
      </div>
    </div>
    <div class="jp-ft-div"></div>
    <div class="jp-ft-bot">
      <div class="jp-ft-copy">&copy; ${year} JagoPijat. All Rights Reserved.</div>
      <div class="jp-ft-links">
        <a href="syarat-ketentuan.html">Syarat &amp; Ketentuan</a>
        <a href="kebijakan-privasi.html">Kebijakan Privasi</a>
        <a href="index.html">www.jagopijat.com</a>
      </div>
    </div>
  </div>
</footer>
`.trim();

  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  const mount = document.getElementById('site-footer');
  if (mount) {
    mount.outerHTML = html;
  } else {
    document.body.insertAdjacentHTML('beforeend', html);
  }
})();
