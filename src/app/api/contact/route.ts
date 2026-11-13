import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { first_name, last_name, email, test_type, message } = body;

        if (!first_name || !last_name || !email) {
            return NextResponse.json(
                { error: 'Missing required fields.' },
                { status: 400 }
            );
        }

        const { error } = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: ['joshsohn@gmail.com'],
            replyTo: email,
            subject: `New Contact: ${first_name} ${last_name} — ${test_type || 'General Inquiry'}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${first_name} ${last_name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject/Test:</strong> ${test_type || 'Not specified'}</p>
                <p><strong>Message:</strong></p>
                <p>${message ? message.replace(/\n/g, '<br/>') : 'No message provided.'}</p>
            `,
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
        }

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error('API route error:', err);
        return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
    }
}
