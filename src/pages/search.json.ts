import { getPosts, catName } from '../lib/posts';
export async function GET() {
  const posts = await getPosts();
  return new Response(JSON.stringify(posts.map((p) => ({ title: p.data.title, description: p.data.description, category: catName(p.data.category), url: `/${p.id}/` }))), { headers: { 'Content-Type': 'application/json' } });
}
