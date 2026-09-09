import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { JSDOM } from 'jsdom';
import { describe, expect, it } from 'vitest';

const html = readFileSync(resolve(process.cwd(), 'index.html'), 'utf8');
const document = new JSDOM(html).window.document;

describe('portfolio metadata', () => {
  it('exposes the deployed URL as its canonical address', () => {
    expect(document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.href).toBe(
      'https://aseel-portfolio-flax.vercel.app/'
    );
  });

  it('provides a complete Open Graph preview', () => {
    expect(document.querySelector<HTMLMetaElement>('meta[property="og:title"]')?.content).toContain(
      'Aseel'
    );
    expect(
      document.querySelector<HTMLMetaElement>('meta[property="og:description"]')?.content
    ).toBeTruthy();
    expect(document.querySelector<HTMLMetaElement>('meta[property="og:image"]')?.content).toBe(
      'https://aseel-portfolio-flax.vercel.app/og-image.png'
    );
  });

  it('describes the portfolio owner with Person structured data', () => {
    const script = document.querySelector<HTMLScriptElement>('script[type="application/ld+json"]');
    const data = JSON.parse(script?.textContent ?? '{}');

    expect(data['@type']).toBe('Person');
    expect(data.name).toBe('Aseel Hussain Al-Ali');
    expect(data.url).toBe('https://aseel-portfolio-flax.vercel.app/');
  });

  it('declares the portfolio favicon', () => {
    expect(document.querySelector<HTMLLinkElement>('link[rel="icon"]')?.getAttribute('href')).toBe(
      '/favicon.svg'
    );
  });
});
