"use client"

export default function ReadmeClientPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="container mx-auto max-w-3xl px-4 py-10">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-balance">
            Travel Website – Project README
          </h1>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            This page provides a quick overview of the project, core features, file structure, theming, accessibility,
            and tips for extending the site.
          </p>
        </header>

        <nav aria-label="Table of contents" className="mb-10">
          <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
            <li>
              <a className="underline hover:no-underline" href="#overview">
                Overview
              </a>
            </li>
            <li>
              <a className="underline hover:no-underline" href="#features">
                Key Features
              </a>
            </li>
            <li>
              <a className="underline hover:no-underline" href="#structure">
                Project Structure
              </a>
            </li>
            <li>
              <a className="underline hover:no-underline" href="#theming">
                Theming & Design Tokens
              </a>
            </li>
            <li>
              <a className="underline hover:no-underline" href="#accessibility">
                Accessibility
              </a>
            </li>
            <li>
              <a className="underline hover:no-underline" href="#extending">
                Extending the Site
              </a>
            </li>
          </ul>
        </nav>

        <section id="overview" className="mb-10 scroll-mt-24">
          <h2 className="text-2xl font-semibold tracking-tight">Overview</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            This is a responsive, semantic, mobile‑first travel website built with the Next.js App Router and shadcn UI.
            It includes a shared navigation and footer, a hero section on the home page, featured destinations, and an
            accessible contact form.
          </p>
          <p className="mt-3 leading-relaxed">
            Pages:{" "}
            <a className="underline hover:no-underline" href="/">
              Home
            </a>
            ,{" "}
            <a className="underline hover:no-underline" href="/about">
              About
            </a>
            ,{" "}
            <a className="underline hover:no-underline" href="/contact">
              Contact
            </a>
            , and this{" "}
            <a className="underline hover:no-underline" href="/readme">
              README
            </a>
            .
          </p>
        </section>

        <section id="features" className="mb-10 scroll-mt-24">
          <h2 className="text-2xl font-semibold tracking-tight">Key Features</h2>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-muted-foreground">
            <li>Mobile‑first layout with responsive grid and flexible sections.</li>
            <li>Shared navigation bar and footer, consistent spacing and typography.</li>
            <li>Hero banner on Home, featured destinations with images, and hover transitions.</li>
            <li>Accessible contact form with proper labels and validation affordances.</li>
            <li>Design tokens and semantic color usage for easy theming.</li>
          </ul>
        </section>

        <section id="structure" className="mb-10 scroll-mt-24">
          <h2 className="text-2xl font-semibold tracking-tight">Project Structure</h2>
          <div className="mt-3 rounded-md border bg-card text-card-foreground p-4">
            <pre className="overflow-x-auto text-sm leading-relaxed">
              {`app/
  layout.tsx        // Root layout, fonts, providers
  page.tsx          // Home page (hero + featured sections)
  about/page.tsx    // About page
  contact/page.tsx  // Contact page (form)

components/
  hero.tsx
  site-navbar.tsx
  site-footer.tsx
  social-icons.tsx
  contact-form.tsx

public/
  mountains-at-sunrise.jpg // Example hero image
`}
            </pre>
          </div>
        </section>

        <section id="theming" className="mb-10 scroll-mt-24">
          <h2 className="text-2xl font-semibold tracking-tight">Theming & Design Tokens</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            The site uses semantic tokens (e.g., <code>bg-background</code>, <code>text-foreground</code>,
            <code>border-border</code>) defined in <code>app/globals.css</code>. Update tokens to change the color
            palette globally. Keep the palette simple and accessible, using 3–5 colors total with clear contrast for
            text and interactive elements.
          </p>
          <div className="mt-4 rounded-md border bg-card text-card-foreground p-4">
            <pre className="overflow-x-auto text-sm leading-relaxed">
              {`/* Example: adjust tokens inside globals.css */
:root {
  /* --primary, --secondary, --background, --foreground, --muted, etc. */
}`}
            </pre>
          </div>
        </section>

        <section id="accessibility" className="mb-10 scroll-mt-24">
          <h2 className="text-2xl font-semibold tracking-tight">Accessibility</h2>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-muted-foreground">
            <li>Use semantic tags (header, main, footer, section) and descriptive headings.</li>
            <li>Provide alt text for informative images and skip it for purely decorative images.</li>
            <li>Ensure color contrast meets WCAG guidelines across themes.</li>
            <li>
              Use focus-visible styles and label inputs with explicit <code>htmlFor</code>.
            </li>
          </ul>
        </section>

        <section id="extending" className="mb-2 scroll-mt-24">
          <h2 className="text-2xl font-semibold tracking-tight">Extending the Site</h2>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-muted-foreground">
            <li>
              Add more destinations: place assets in <code>/public</code> and reference them with static paths (e.g.,{" "}
              <code>{`/public/my-place.jpg`}</code> → <code>{`/my-place.jpg`}</code> in the src).
            </li>
            <li>
              Create new sections/components in <code>components/</code> and import them into pages to keep files small
              and focused.
            </li>
            <li>
              For data fetching, prefer Server Components or SWR for client state that needs syncing. Avoid fetching
              inside <code>useEffect</code>.
            </li>
            <li>Keep typography to two font families and avoid gradients unless specifically needed.</li>
          </ul>
        </section>
      </section>
    </main>
  )
}
