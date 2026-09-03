import { NextRequest, NextResponse } from 'next/server'
import { affiliateLinks } from '../../../data/affiliateLinks'

export async function GET(_req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const target = affiliateLinks[slug]

  if (!target) {
    return NextResponse.redirect(new URL('/products', _req.url), 307)
  }

  return NextResponse.redirect(target, 307)
}
