const pages = JSON.parse(document.getElementById('application-pages').textContent);
const frame = document.getElementById('application');
let currentPage = '';
let routeRevision = 0;

function parseRoute(path) {
  const url = new URL(path, location.origin);
  const params = url.searchParams;
  let reference = '';
  if (url.pathname.startsWith('/verify/')) {
    try { reference = decodeURIComponent(url.pathname.slice(8)); } catch { /* Invalid reference stays empty. */ }
  }
  return {
    page: url.pathname === '/issuer' ? 'issuer' : /^\/verify(?:\/|$)/.test(url.pathname) ? 'verify' : 'home',
    search: url.search,
    reference,
    section: params.get('section') || url.hash.slice(1),
    menu: params.get('menu') === 'open',
  };
}

function paint() {
  const route = parseRoute(location.pathname + location.search + location.hash);
  const revision = ++routeRevision;
  if (currentPage === 'home' && route.page === 'home' && frame.contentWindow?.SLReady) {
    frame.contentWindow.SLScrollTo(route.section || 'main');
    return;
  }
  frame.contentWindow?.SLGrainientDispose?.();
  currentPage = route.page;
  const config = '<script>window.__SLRoute=' + JSON.stringify(route).replace(/</g, '\\u003c') + ';<\/script>';
  frame.onload = () => {
    if (revision !== routeRevision) return;
    document.title = 'SafeListing — ' + { home: 'Home', verify: 'Listing Verification', issuer: 'Issuer Workspace' }[route.page];
  };
  // The export preloads this relative font; make it resolve at deep URLs too.
  frame.srcdoc = pages[route.page].replace('<head>', '<head><base href="/">' + config);
}

window.SLNavigate = route => {
  if (!route.startsWith('/') || route.startsWith('//')) return;
  const url = new URL(route, location.origin);
  history.pushState(null, '', url.pathname + url.search + url.hash);
  paint();
};
window.SLUpdateIssuerView = view => {
  if (!['overview', 'create', 'authority', 'details', 'manage'].includes(view)) return;
  const params = new URLSearchParams(location.search);
  params.set('view', view);
  history.replaceState(null, '', '/issuer?' + params);
};
window.SLParseRoute = parseRoute;
addEventListener('message', event => {
  if (event.source !== frame.contentWindow) return;
  const data = event.data;
  if (data?.type === 'safelisting:navigate' && typeof data.route === 'string') window.SLNavigate(data.route);
  else if (data?.type === 'safelisting:issuer-view') window.SLUpdateIssuerView(data.view);
});
// Preserve shared links from the original hash-routed export.
if (location.hash.startsWith('#/')) history.replaceState(null, '', location.hash.slice(1));
addEventListener('popstate', paint);
addEventListener('hashchange', paint);
paint();
