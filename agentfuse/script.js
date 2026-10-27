(function () {
  const config = window.AGENTFUSE_SITE || {};
  const authorBlock = document.getElementById('author-block');
  if (authorBlock) {
    if (config.authors && config.authors.trim()) authorBlock.textContent = config.authors;
    else authorBlock.hidden = true;
  }
  function configureLink(id, url, readyText) {
    const link = document.getElementById(id);
    if (!link) return;
    if (url && url.trim()) {
      link.href = url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.classList.remove('is-disabled');
      link.removeAttribute('aria-disabled');
      if (readyText) link.innerHTML = readyText;
    } else {
      link.href = '#resources';
      link.classList.add('is-disabled');
      link.setAttribute('aria-disabled', 'true');
      link.addEventListener('click', event => event.preventDefault());
    }
  }
  configureLink('paper-link', config.paperUrl, 'Paper PDF <span>↗</span>');
  configureLink('code-link', config.codeUrl, 'Code <span>↗</span>');
  configureLink('resource-paper', config.paperUrl, '<span class="resource-icon">PDF</span><span><strong>Paper</strong><small>Open paper PDF</small></span><span class="resource-arrow">↗</span>');
  configureLink('resource-code', config.codeUrl, '<span class="resource-icon">{ }</span><span><strong>Code</strong><small>Open repository</small></span><span class="resource-arrow">↗</span>');
  const bibtex = document.getElementById('bibtex-code');
  if (bibtex && config.bibtex) bibtex.textContent = config.bibtex;
  const copyButton = document.getElementById('copy-bibtex');
  const copyStatus = document.getElementById('copy-status');
  if (copyButton && bibtex) copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(bibtex.textContent);
      copyStatus.textContent = 'BibTeX template copied. Update author and publication details before using it.';
    } catch (error) {
      const range = document.createRange(); range.selectNodeContents(bibtex);
      const selection = window.getSelection(); selection.removeAllRanges(); selection.addRange(range);
      copyStatus.textContent = 'Select the highlighted BibTeX text and copy it manually.';
    }
  });
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('is-open'); toggle.setAttribute('aria-expanded', 'false'); toggle.setAttribute('aria-label', 'Open navigation');
    }));
  }
})();
