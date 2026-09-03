import { NextRequest, NextResponse } from 'next/server'
import { products } from '../../../data/products'
export async function GET(_req:NextRequest,{params}:{params:Promise<{slug:string}>}){const {slug}=await params;const product=products.find(p=>p.affiliatePath===`/go/${slug}`);if(!product)return NextResponse.redirect(new URL('/products',_req.url));return NextResponse.redirect(new URL('https://www.aliexpress.com/',_req.url),307)}
