import Link from "next/link"
import { SocialLinks } from "./social-icons"

export function SiteFooter() {
  return (
    <footer role="contentinfo" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground text-center md:text-left">
          {"© "} {new Date().getFullYear()} Travelogue. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <SocialLinks />
          <Link
            href="mailto:jatinkumar787829@gmail.com"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            jatinkumar787829@gmail.com
          </Link>
        </div>
      </div>
    </footer>
  )
}
