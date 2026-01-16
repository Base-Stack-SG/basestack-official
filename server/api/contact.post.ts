import nodemailer from 'nodemailer';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { name, business, email, phone, message } = body || {};

  if (!name || !email || !message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing required fields.'
    });
  }

  const config = useRuntimeConfig();
  const transporter = nodemailer.createTransport({
    host: config.smtpHost,
    port: Number(config.smtpPort),
    secure: Number(config.smtpPort) === 465,
    auth: {
      user: config.smtpUser,
      pass: config.smtpPass
    }
  });

  const lines = [
    `Name: ${name}`,
    `Business: ${business || '-'}`,
    `Email: ${email}`,
    `Phone/WhatsApp: ${phone || '-'}`,
    '',
    'Message:',
    message
  ];

  await transporter.sendMail({
    from: `"Base Stack Website" <${config.smtpUser}>`,
    to: config.contactTo,
    replyTo: email,
    subject: `New inquiry from ${name}`,
    text: lines.join('\n')
  });

  return { ok: true };
});
