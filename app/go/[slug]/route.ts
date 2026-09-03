import { NextResponse } from 'next/server';
import { affiliateLinks } from '../../../data/affiliateLinks';

export async function GET(_: Request, context: { params: Promise<{ slug: string }> }) {
  const { slug } = await context.params;
  const target = affiliateLinks[slug];

  if (!target) return new NextResponse('Offre indisponible', { status: 404 });
  return NextResponse.redirect(target, 307);
}
