import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { name, email, phone, city, plotSize, message } = await req.json();

        // Gmail SMTP setup
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true, // Gmail requires this for 465
            auth: {
                user: process.env.EMAIL_USER, // your gmail
                pass: process.env.EMAIL_PASS, // your app password (no spaces)
            },
        });

        // Email structure
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: "info@propertiesinsight.com",
            subject: `New Inquiry from ${name} - Properties Insight`,
            html: `
        <h2>New Inquiry Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>City:</strong> ${city}</p>
        ${plotSize ? `<p><strong>Plot Size:</strong> ${plotSize}</p>` : ""}
        ${message ? `<p><strong>Message:</strong> ${message}</p>` : ""}
      `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: "Email sent successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json(
            { message: "Failed to send email", error: error.message },
            { status: 500 }
        );
    }
}

export async function GET() {
    return NextResponse.json(
        { message: "Email API is working. Use POST method to send emails." },
        { status: 200 }
    );
}
