import Link from "next/link";

const footerLinks = {
  connect: [
    { name: "Prayer", href: "/next-steps/prayer" },
    { name: "Follow Jesus", href: "/next-steps/follow-jesus" },
    { name: "Connect", href: "/connect" },
    { name: "Join the Core Team", href: "/next-steps/join-team" },
  ],
  media: [
    { name: "Events", href: "/events" },
    { name: "Podcast", href: "/media/podcast" },
    { name: "YouTube", href: "https://www.youtube.com/@freewaychurch", external: true },
    { name: "Freeway Report", href: "/media/freeway-report" },
  ],
  social: [
    { name: "Instagram", href: "https://www.instagram.com/freewaychurch", icon: "instagram" },
    { name: "Facebook", href: "https://www.facebook.com/freewaychurch", icon: "facebook" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-neutral-near-black text-white">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Church Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Freeway Church</h3>
            <p className="text-neutral-light-gray mb-4">Connect, Cultivate, Contribute</p>
            <div className="space-y-2 text-neutral-light-gray">
              <p>Every Sunday:</p>
              <p>9:15a - Preservice Prayer</p>
              <p>10:00a - Worship Service</p>
              <p>11:30a - Fellowship</p>
              <p>6:00p - Freeway Youth</p>
            </div>
          </div>

          {/* Next Steps */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Next Steps</h4>
            <ul className="space-y-2">
              {footerLinks.connect.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-light-gray hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Media & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Freeway Media</h4>
            <ul className="space-y-2 mb-6">
              {footerLinks.media.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-light-gray hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-neutral-light-gray hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            <h4 className="text-lg font-semibold mb-4">Social Media</h4>
            <div className="flex space-x-4">
              {footerLinks.social.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-light-gray hover:text-accent-teal transition-colors"
                  aria-label={link.name}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    {link.icon === "instagram" ? (
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" />
                    ) : (
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    )}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-dark-gray text-center text-neutral-light-gray">
          <p>&copy; {new Date().getFullYear()} Freeway Church. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}