import { useEffect } from 'react';
import { siteConfig } from '../config/siteConfig.js';
export default function Seo({ title, description, path = '/' }) {
  useEffect(() => {
    const fullTitle = `${title} | VINCIT FITNESS`;
    document.title = fullTitle;
    const set = (selector, attr, value) => {
      let el = document.head.querySelector(selector);
      if (!el) { el = document.createElement('meta'); document.head.appendChild(el); }
      el.setAttribute(attr, value);
    };
    const desc = description || siteConfig.defaultDescription;
    set('meta[name="description"]', 'content', desc);
    set('meta[property="og:title"]', 'content', fullTitle);
    set('meta[property="og:description"]', 'content', desc);
    set('meta[property="og:type"]', 'content', 'website');
    set('meta[name="twitter:card"]', 'content', 'summary_large_image');
    set('meta[name="twitter:title"]', 'content', fullTitle);
    set('meta[name="twitter:description"]', 'content', desc);
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
    canonical.href = `${siteConfig.productionDomain.replace(/\/$/, '')}${path}`;
  }, [title, description, path]);
  return null;
}
