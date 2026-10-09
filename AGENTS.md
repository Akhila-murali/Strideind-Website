# Strideind Website - Project Rules

These instructions apply to the entire repository. Read this file and
`public/doc/guidelines.md` before changing code or UI.

## 1. Project and implementation

- Use the current React 18 component structure and existing project patterns.
- The live codebase is the source of truth when older documentation conflicts
  with it. This project currently uses Tailwind utility classes together with
  a small global stylesheet.
- Prefer editing an existing component over creating extra abstractions.
- Keep components functional and keep state local unless shared state is
  genuinely required.
- Write straightforward, readable code. Avoid advanced patterns, premature
  abstractions, unnecessary configuration, and over-engineering.
- Reuse existing components, helpers, icons, and dependencies where practical.

## 2. Visual direction

- Keep the site professional, restrained, and suitable for an industrial oil,
  gas, drilling, automation, and engineering company.
- Prioritize clarity, credibility, operational context, and strong hierarchy.
- Avoid playful styling, excessive decoration, glassmorphism, large glow
  effects, busy overlays, or UI that looks like a fictional sci-fi dashboard.
- Use simple responsive layouts based on Grid or Flexbox.
- Preserve consistent spacing and visual rhythm between adjacent sections.
- New sections must work at mobile, tablet, desktop, and wide-screen sizes.
- Use imagery only when it adds product or operational context. Do not repeat
  similar equipment close-ups across consecutive sections.

## 3. Color system

Use the established dark industrial palette:

- Primary background: `#0a0a0a`
- Dark section surfaces: `#111111`, `#161616`, `#1e1e1e`
- Primary teal accent: `#1a9fa0`
- Bright teal for hover or selected states: `#22c4c5` or existing
  `#22b8b9` where the surrounding component already uses it
- Primary text: `#ffffff`
- Secondary body text: white at approximately 50-60% opacity
- Subtle borders: white at approximately 7-10% opacity

Do not introduce a new brand color unless the user explicitly requests it.
Use teal selectively for emphasis, links, active states, small labels, and key
phrases, not as a large background color without a clear reason.

## 4. Typography

- The site font is **Manrope**. Do not replace it or add another font unless
  explicitly requested.
- Preserve the global `--font: 'Manrope', sans-serif` setup.
- Use the Home page as the typography reference.
- Hero title: `clamp(38px, 6vw, 60px)`, extra-bold, line-height about `1.05`.
- Standard section title: `clamp(36px, 5vw, 56px)`, extra-bold, line-height
  about `1.1`.
- Small eyebrow/section label: about `12px`, uppercase, letter spacing around
  `0.12em-0.2em`, teal.
- Standard description: `15-16px`, light or regular weight, line-height about
  `1.75-1.85`, white at 50-60% opacity.
- Card title: normally `14-18px`, semibold or bold.
- Card description: normally `12-14px`, line-height about `1.6-1.75`.
- Buttons and compact links: normally `11-14px`, bold, with restrained letter
  spacing.

Use the shared typography classes for all new marketing sections and cards:

- `site-section-description` for section-level body copy (`15-16px`).
- `site-card-title` for card headings (`18px`).
- `site-card-description` for card body copy (`14px`).

Do not set marketing or card body copy below `14px`. Sizes below `14px` are
reserved for compact interface text such as badges, eyebrows, status labels,
navigation, metadata, and diagram annotations.

Do not change established font sizes locally without checking the adjacent Home
page pattern and the component's responsive behavior.

## 5. Heading treatment

- Major marketing headings should normally combine white and teal text.
- Keep the first phrase white and highlight the second key phrase in teal.
- Aim for a visually balanced split, roughly half white and half teal, but split
  by meaning rather than by character count.
- Do not color random individual words. The highlighted phrase must communicate
  the main benefit or outcome.
- Keep headings concise and avoid forced line breaks that look awkward on
  mobile.

Example:

```jsx
<h2 className="text-[clamp(36px,5vw,56px)] font-extrabold leading-[1.1] text-white">
  Smarter Drilling<br />
  <span className="text-[#1a9fa0]">Built for the Field.</span>
</h2>
```

## 6. Components and styling

- Match the section immediately before and after the edited component.
- Prefer Tailwind classes already used in the repository.
- Keep global CSS limited to true site-wide tokens, resets, shared behavior,
  and reusable global classes.
- Avoid inline styles unless the value is genuinely dynamic or cannot be
  expressed clearly with the existing styling approach.
- Keep hover effects subtle: color, border, opacity, or a small translate.
- Prefer CSS transitions and transforms. Avoid heavy JavaScript animation.
- Use `lucide-react` for interface icons when an existing icon is suitable.
- Add accessible alt text to meaningful images. Decorative images should use
  empty alt text.
- Interactive elements must remain keyboard accessible and retain visible focus
  behavior.

## 7. Images and content

- Prefer local assets in `public/` over remote hotlinked images.
- Choose images that accurately represent the product, operation, or use case.
- Do not claim product capabilities, performance numbers, certifications, or
  safety outcomes unless they are present in supplied or existing approved
  content.
- Keep descriptions concise, specific, and consistent with the related product
  page.
- When an image is still pending, use a simple intentional placeholder and do
  not silently reuse an unrelated existing image.

## 8. Dependencies, libraries, and licenses

- Do not install, download, copy, or use a new library, font, icon pack, image,
  video, template, or code asset before checking its license.
- Confirm that the license permits commercial website use and redistribution
  where applicable.
- Record the dependency or asset name, source, license, and any attribution
  requirement before adding it.
- If the license is unclear, incompatible, or cannot be verified, do not use
  the dependency or asset. Report the issue and use an existing project
  capability instead.
- Prefer current dependencies. A new package must solve a real requirement that
  cannot be handled simply with React, CSS/Tailwind, or an existing dependency.
- Never install a heavy UI, animation, carousel, or utility library for a small
  isolated feature.

## 9. Change discipline

- Make the smallest complete change that satisfies the request.
- Do not redesign unrelated sections or change established content without a
  clear requirement.
- Preserve user changes and avoid destructive Git operations.
- Keep text files UTF-8 and do not introduce broken characters such as
  mojibake arrows or symbols.
- Remove unused imports, data, state, and styles created by the change.
- Before finishing, search for related routes, anchors, IDs, imports, and shared
  behavior that the change could affect.

## 10. Verification

- Run `npm run build` after code changes.
- Treat build errors as incomplete work and fix them before handoff.
- Check responsive layout risks when changing width, spacing, typography,
  navigation, or media.
- If a requested change may break another route, anchor, component, or user
  flow, report the exact impact clearly.
- Mention non-blocking tool warnings separately from actual code failures.

