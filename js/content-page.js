(() => {
  const track = (name, data = {}) => {
    if (typeof window.va === 'function') {
      window.va('event', { name, data });
    }
  };

  document.querySelectorAll('[data-analytics-event]').forEach(element => {
    element.addEventListener('click', () => {
      let data = {};
      try {
        data = JSON.parse(element.dataset.analytics || '{}');
      } catch (error) {
        data = {};
      }
      track(element.dataset.analyticsEvent, data);
    });
  });

  const mapLink = document.querySelector('.map-link[data-map-slug]');
  if (mapLink) {
    const query = new URLSearchParams(window.location.search);
    const target = new URL(mapLink.href, window.location.origin);
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content'].forEach(key => {
      if (query.has(key)) target.searchParams.set(key, query.get(key));
    });
    target.hash = `city=${mapLink.dataset.mapSlug}`;
    mapLink.href = target.toString();
  }

  const shareButton = document.querySelector('.share-page');
  if (shareButton) {
    shareButton.addEventListener('click', async () => {
      const shareData = {
        title: document.title,
        text: document.querySelector('meta[name="description"]')?.content || '',
        url: window.location.href.split('?')[0]
      };

      try {
        if (navigator.share) {
          await navigator.share(shareData);
        } else {
          await navigator.clipboard.writeText(shareData.url);
          shareButton.textContent = document.documentElement.lang.startsWith('zh') ? '链接已复制' : 'Link copied';
        }
      } catch (error) {
        if (error?.name !== 'AbortError') window.prompt('Copy this link:', shareData.url);
      }
    });
  }
})();
