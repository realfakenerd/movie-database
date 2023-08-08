addEventListener('message', () => {
  importScripts('https://www.googletagmanager.com/gtag/js?id=G-R9NB9VQ6DQ');
  const dataLayer = [];

  function gtag(...arguments: (string | Date)[]) {
    dataLayer.push(arguments);
  }

  gtag('js', new Date());
  gtag('config', 'G-R9NB9VQ6DQ');

  postMessage(dataLayer);
})
