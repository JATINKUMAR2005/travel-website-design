import { ContactForm } from "@/components/contact-form"
import { SocialLinks } from "@/components/social-icons"

export default function ContactPage() {
  return (
    <main role="main" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <div className="grid gap-10 md:grid-cols-2">
        <section aria-labelledby="contact-form" className="order-2 md:order-1">
          <h1 id="contact-form" className="text-2xl font-semibold tracking-tight mb-2">
            Contact us
          </h1>
          <p className="text-sm text-muted-foreground mb-6">
            We’d love to hear about your travel plans. Fill out the form and we’ll get back to you.
          </p>
          <ContactForm />
        </section>

        <aside className="order-1 md:order-2">
          <div className="rounded-md border border-border bg-card p-6 md:sticky md:top-8">
            <h2 className="text-lg font-semibold">Our details</h2>
            <div className="mt-4 grid gap-3 text-sm">
              <div>
                <div className="text-muted-foreground">Email</div>
                <a href="mailto:jatinkumar787829@gmail.com" className="hover:text-primary transition-colors">
                  jatinkumar787829@gmail.com
                </a>
              </div>
              <div>
                <div className="text-muted-foreground">Phone</div>
                <a href="tel:+10000000000" className="hover:text-primary transition-colors">
                  +91 7878292220
                </a>
              </div>
              <div className="pt-2">
                <div className="text-muted-foreground mb-2">Follow us</div>
                <SocialLinks />
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  )
}
