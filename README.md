# Vishal Kumar Pandey — Portfolio

A responsive personal portfolio built with Next.js 14 (App Router), TypeScript,
and Tailwind CSS. Includes a light/dark toggle, a working contact form that
emails you directly, and a resume view/download section.

No emoji or decorative icon packs other than `lucide-react` are used anywhere
in the UI.

## 1. Install dependencies

```bash
npm install
```

## 2. Add your photo

Drop a square photo (at least 500x500px) into the `public` folder named
`profile.jpg`, then open `components/Hero.tsx` and replace the placeholder
box (marked with a comment `Profile image slot`) with:

```tsx
<img src="/profile.jpg" alt={profile.name} className="h-full w-full rounded-2xl object-cover" />
```

## 3. Add your resume

Place your resume PDF in `public/resume.pdf` (already included in this
download — replace it any time with an updated version, same filename).

## 4. Set up the contact form email

The contact form sends an email using Gmail SMTP through `nodemailer`. You
need a Gmail **App Password** (not your regular password):

1. Turn on 2-Step Verification on the Google account you want to send from:
   https://myaccount.google.com/security
2. Go to https://myaccount.google.com/apppasswords
3. Create an app password (choose "Mail" as the app), copy the 16-character
   code.
4. Copy `.env.local.example` to a new file named `.env.local`:

   ```bash
   cp .env.local.example .env.local
   ```

5. Fill in the values:

   ```
   EMAIL_USER=youraddress@gmail.com
   EMAIL_PASS=the16characterapppassword
   CONTACT_RECEIVER=vishalpandey00081@gmail.com
   ```

`EMAIL_USER` is the Gmail account that sends the message. `CONTACT_RECEIVER`
is where you want messages delivered — set it to your own inbox.

Prefer not to use Gmail? Swap the `nodemailer.createTransport` call in
`app/api/contact/route.ts` for any SMTP provider (Resend, SendGrid,
Mailgun, etc.) — the rest of the form works unchanged.

## 5. Run locally

```bash
npm run dev
```

Visit http://localhost:3000

## 6. Deploy

This project deploys cleanly to Vercel:

1. Push this folder to a GitHub repository.
2. Import it at https://vercel.com/new.
3. Add the same `EMAIL_USER`, `EMAIL_PASS`, and `CONTACT_RECEIVER` values
   under Project Settings → Environment Variables.
4. Deploy.

## Project structure

```
app/
  api/contact/route.ts   contact form email endpoint
  layout.tsx              root layout + theme provider
  page.tsx                assembles all sections
  globals.css              theme tokens, fonts, base styles
components/
  Navbar.tsx               editor-tab style nav + theme toggle
  Hero.tsx                 intro + profile image slot
  About.tsx
  Skills.tsx
  Experience.tsx           work history + education
  Projects.tsx
  Resume.tsx                view/download resume
  Contact.tsx               contact form (client component)
  ThemeToggle.tsx
  ThemeProvider.tsx
lib/
  data.ts                  all resume content in one place — edit here
public/
  resume.pdf
```

To update any content (job history, skills, links, etc.), edit
`lib/data.ts` — every section reads from that single file.
