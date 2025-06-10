// src/app/api/send/route.ts

import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Instantiate Resend with the API key from your .env.local file
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    // Parse the request body to get the form data
    const body = await req.json();
    const { firstName, name, company, position, mail, message } = body;

    // Use Resend to send the email
    const { data, error } = await resend.emails.send({
        from: 'Onboarding <contact@thyrotracks.com>',
        to: ['med.el.harchaoui@gmail.com'],
        subject: `New Waitlist Signup: ${firstName} ${name}`,
        html: `
            <div>
            <h1>New Waitlist Signup</h1>
            <p><strong>Name:</strong> ${firstName} ${name}</p>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Position:</strong> ${position}</p>
            <p><strong>Email:</strong> ${mail}</p>
            <hr />
            <p><strong>Message:</strong></p>
            <p>${message}</p>
            </div>
        `,
        });

    if (error) {
      // If Resend returns an error, log it and return a 400 response
      console.error({ error });
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    // If successful, return a 200 response
    return NextResponse.json({ message: 'Email sent successfully!', data });
  } catch (error) {
    // USE the error variable by logging it
    console.error(error); 
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 });
  }
}