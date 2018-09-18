import $ from './fquery';

export default async function (links = 'a') {

  await new Promise((resolve) => {
    if (document.readyState === "complete") return resolve();
    // without jQuery (doesn't work in older IEs)
    document.addEventListener('DOMContentLoaded', resolve, false);
  });

  $(links).forEach(link => {
    // Ignore the totally external links for now
    if (link.host !== location.host) return;

    link.addEventListener('mouseover', e => this.load(e.currentTarget));
    link.addEventListener('touchstart', e => this.load(e.currentTarget));
  });
};
