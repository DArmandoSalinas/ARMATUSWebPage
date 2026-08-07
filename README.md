# ARMATUS marketing site

Static landing aligned to the mobile app design tokens in `mobile/constants/theme.ts`.

## Tokens (source of truth)

Mirrored in `styles.css` `:root` from the Expo app:

- Background `#000000`, surface `#1C1C1E`, primary `#FF6B35`
- System UI typography (SF / Roboto / system)
- Motion: 160 / 240 / 360 ms, ease-out cubic
- Logo: `assets/brand/icon.png` + LogoHalo-style CSS rings

## Local

```bash
cd web
python3 -m http.server 8899
```

## Deploy (Vercel)

- Root Directory: `.` (this folder) or `web` if deploying from the monorepo
- Framework: Other (static)
- `vercel.json` included

## Repo

Also published at https://github.com/DArmandoSalinas/ARMATUSWebPage
