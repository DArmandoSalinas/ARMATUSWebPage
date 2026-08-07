# ARMATUS marketing site

Static one-page product site (ES default / EN toggle). Orange-on-black protocol language — not a SaaS template.

## Local preview

```bash
cd web
npx --yes serve .
```

Open the URL printed in the terminal (usually `http://localhost:3000`).

## Deploy on Vercel

1. Import the ARMATUS repo in [Vercel](https://vercel.com) **or** from this folder:

   ```bash
   cd web
   npx vercel
   ```

2. Project settings:
   - **Root Directory:** `web`
   - **Framework Preset:** Other (static)
   - Build command: leave empty
   - Output directory: `.` (or leave default for static)

3. Production deploy:

   ```bash
   cd web
   npx vercel --prod
   ```

## Assets

- `assets/screens/` — App Store 6.5" captures (WebP)
- `assets/bocetos/` — technique illustrations (white/orange on black)
- `assets/brand/` — app icon + favicon

## Contact

Replace `masdas.aipro@gmail.com` in `index.html` and `legal/` if needed.
