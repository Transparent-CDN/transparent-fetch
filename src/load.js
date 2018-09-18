import validate from './validate';

// Fetch either a URL or an <a> element corresponding HTML
export default async function (ref = '') {
  let href = validate(ref.href || ref, 'transparent-fetch.load():');

  // Remove the local url; for transparent-fetch.load() we do not need it
  href = href.split('#')[0];

  // Already prefetched, return
  if (this.loaded[href]) return this.loaded[href];

  // Add prefetch link
  this.loaded[href] = true;
  let link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = href;
  document.head.appendChild(link);

  return this.loaded[href];
};
