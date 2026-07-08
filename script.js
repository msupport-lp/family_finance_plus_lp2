/* ============================================================
   家計のおさいふプラス LP — メインスクリプト
   ============================================================ */

document.addEventListener('DOMContentLoaded', initFaq);

/* ---------- FAQアコーディオン ---------- */
function initFaq() {
  const items = document.querySelectorAll('.faq-item');

  items.forEach((item) => {
    const btn = item.querySelector('.faq-item__question');
    const arrow = item.querySelector('.faq-item__arrow');
    if (!btn) return;

    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');

      items.forEach((other) => {
        other.classList.remove('is-open');
        other.querySelector('.faq-item__question').setAttribute('aria-expanded', 'false');
        other.querySelector('.faq-item__arrow').textContent = '＋';
      });

      if (!isOpen) {
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
        arrow.textContent = '－';
      }
    });
  });
}
