import { getCollection } from 'astro:content';
import { categories, type Cat } from '../config/site';
export const allCats = (): Cat[] => categories.flatMap((c) => [c, ...(c.children ?? [])]);
export const getPosts = async () => (await getCollection('posts')).sort((a, b) => +b.data.date - +a.data.date);
export const catName = (s: string) => allCats().find((c) => c.slug === s)?.name ?? s;
export const catSlugs = (s: string) => [s, ...(categories.find((c) => c.slug === s)?.children?.map((x) => x.slug) ?? [])];
export const fmt = (d: Date) => d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
