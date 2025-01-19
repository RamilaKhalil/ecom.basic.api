import { NextResponse } from "next/server";
import data from '@/data/product.json';

export function GET() {
  return NextResponse.json({ success: true, data: data })
}