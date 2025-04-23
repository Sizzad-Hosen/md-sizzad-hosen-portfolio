import { Contact } from '@/models/Contact';
import { dbConnect } from '@/utils/dbConnect';
import { NextResponse } from 'next/server';


export async function POST(req) {
  try {
    await dbConnect();
    const body = await req.json();
    const newContact = await Contact.create(body);
    return NextResponse.json({ success: true, data: newContact });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}


export async function GET() {
  try {
    await dbConnect();
    const contacts = await Contact.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: contacts });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
