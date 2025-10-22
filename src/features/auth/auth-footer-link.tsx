import Link from 'next/link'

interface AuthFooterLinkProps {
  message: string
  linkText: string
  href: string
}

export function AuthFooterLink({ message, linkText, href }: AuthFooterLinkProps) {
  return (
    <div className="mt-4 space-x-2 text-center text-xs">
      <span>{message}</span>
      <Link href={href} className="text-blue-600 hover:underline">
        {linkText}
      </Link>
    </div>
  )
}
