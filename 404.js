var segmentCount = 0;
var l = window.location;
const nonHomeUrls = ['/snap-ninja', '/Headcount', '/comp-3', '/Centipede'];
for (let i = 0; i < nonHomeUrls.length; i++) {
  const urlRegex = new RegExp(nonHomeUrls[i], 'i');
  const verifyUrl = urlRegex.test(l.pathname);
  console.log('oh boy');
  
  if (!verifyUrl) {
    l.replace(
      l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
      l.pathname.split('/').slice(0, 1 + segmentCount).join('/') + '/?p=/' +
      l.pathname.slice(1).split('/').slice(segmentCount).join('/').replace(/&/g, '~and~') +
      (l.search ? '&q=' + l.search.slice(1).replace(/&/g, '~and~') : '') +
      l.hash
    );
  }
}
