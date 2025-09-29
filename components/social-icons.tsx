import type React from "react"
type SocialProps = React.ComponentProps<"a"> & { label: string }

function IconWrapper({ children }: { children: React.ReactNode }) {
  return (
    <span aria-hidden="true" className="inline-flex h-5 w-5 items-center justify-center">
      {children}
    </span>
  )
}

export function SocialLinks() {
  const size = 20
  const stroke = 1.8

  return (
    <div className="flex items-center gap-4">
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        <IconWrapper>
          <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        </IconWrapper>
      </a>
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noreferrer"
        aria-label="Facebook"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        <IconWrapper>
          <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="translate-y-[1px]">
            <path d="M13.5 22v-8h2.5l.5-3.5h-3V8.5c0-.9.3-1.5 1.6-1.5H17V3.9C16.6 3.8 15.7 3.7 14.6 3.7 12 3.7 10.3 5.2 10.3 8v2.9H7.8V14.4h2.5V22h3.2z" />
          </svg>
        </IconWrapper>
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        <IconWrapper>
          <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="translate-y-[1px]">
            <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v14H0zM8 8h4.8v2h.1c.7-1.3 2.4-2.7 5-2.7 5.3 0 6.3 3.5 6.3 8v8H19V16c0-2.9-.1-6.7-4.1-6.7-4.1 0-4.7 3.1-4.7 6.5V22H8z" />
          </svg>
        </IconWrapper>
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noreferrer"
        aria-label="X"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        <IconWrapper>
          <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="translate-y-[1px]">
            <path d="M18 2h3l-7.5 8.6L22 22h-6.8l-5.3-7-6 7H0l8.3-9.6L2 2h6.9l4.8 6.3L18 2z" />
          </svg>
        </IconWrapper>
      </a>
    </div>
  )
}
