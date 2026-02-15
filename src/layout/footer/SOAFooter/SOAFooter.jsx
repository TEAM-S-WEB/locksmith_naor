import Link from "next/link";
import styles from "./SOAFooter.module.css";

const footerData = [
  {
    title: "MAIN MENU",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Contact Us", href: "/contact" },
      { label: "Careers", href: "/careers" },
      { label: "Blog / Articles", href: "/blog" },
      { label: "Security / Knowledge Hub", href: "/knowledge-hub" },
      { label: "Service Area", href: "/service-area" },
      { label: "Applications & Forms", href: "/applications-forms" },
    ],
  },
  {
    title: "LOCKSMITH SERVICES",
    links: [
      { label: "Commercial Locksmith", href: "/services/commercial-locksmith" },
      { label: "Residential Locksmith", href: "/services/residential-locksmith" },
      { label: "Car Locksmith", href: "/services/car-locksmith" },
      { label: "Emergency Locksmith", href: "/services/emergency-locksmith" },
      { label: "Lockout Services", href: "/services/lockout" },
      { label: "Lock Installation & Repair", href: "/services/lock-installation-repair" },
      { label: "Rekey & Master Keys", href: "/services/rekey-master-keys" },
    ],
  },
  {
    title: "DOOR SERVICES",
    links: [
      { label: "Door Repair", href: "/doors/door-repair" },
      { label: "Commercial Doors", href: "/doors/commercial-doors" },
      { label: "Storefront Doors", href: "/doors/storefront-doors" },
      { label: "Closers & Hinges", href: "/doors/door-closers-hinges" },
      { label: "Frames & Alignment", href: "/doors/frames-alignment" },
      { label: "Sliding / Folding Doors", href: "/doors/sliding-folding" },
    ],
  },
  {
    title: "SERVICE AREA",
    links: [
      { label: "Manhattan", href: "/service-area/manhattan" },
      { label: "Brooklyn", href: "/service-area/brooklyn" },
      { label: "Queens", href: "/service-area/queens" },
      { label: "The Bronx", href: "/service-area/bronx" },
      { label: "Staten Island", href: "/service-area/staten-island" },
      { label: "New Jersey", href: "/service-area/new-jersey" },
      { label: "Locksmith Near Me", href: "/locksmith-near-me" },
    ],
  },
];

export default function SOAFooter({
  phone = "212-780-0144",
  email = "info@serviceofamerica.co",
  address = "400 2nd Ave, New York, NY 10010",
}) {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* 4 columns (like screenshot) */}
        <div className={styles.grid}>
          {footerData.map((col) => (
            <div key={col.title} className={styles.col}>
              <h4 className={styles.heading}>{col.title}</h4>
              <ul className={styles.list}>
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link className={styles.link} href={l.href}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column (right side) */}
          <div className={styles.col}>
            <h4 className={styles.heading}>CONTACT US</h4>

            <div className={styles.contactTop}>
              <div className={styles.contactLine}>
                <span className={styles.contactLabel}>Phone:</span>{" "}
                <a className={styles.contactValue} href={`tel:${phone.replace(/[^0-9]/g, "")}`}>
                  {phone}
                </a>
              </div>
              <div className={styles.contactLine}>
                <span className={styles.contactLabel}>Email:</span>{" "}
                <a className={styles.contactValue} href={`mailto:${email}`}>
                  {email}
                </a>
              </div>
              <div className={styles.contactLine}>
                <span className={styles.contactLabel}>Address:</span>{" "}
                <span className={styles.contactValue}>{address}</span>
              </div>
            </div>

            <div className={styles.iconBlock}>
              <ContactIcon type="pin" title={address} subtitle="We cover NYC & NJ" />
              <ContactIcon type="phone" title={phone} subtitle="We reply within 24 hours" />
              <ContactIcon type="mail" title={email} subtitle="We reply within 24 hours" />
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} Service of America. All rights reserved.</span>
          <div className={styles.bottomLinks}>
            <Link className={styles.bottomLink} href="/privacy">
              Privacy Policy
            </Link>
            <Link className={styles.bottomLink} href="/terms">
              Terms
            </Link>
          </div>
        </div>
      </div>

      {/* optional vertical CTA like screenshot */}
      
    </footer>
  );
}

function ContactIcon({ type, title, subtitle }) {
  return (
    <div className={styles.iconItem}>
      <span className={styles.icon} aria-hidden="true">
        {type === "pin" && (
          <svg viewBox="0 0 24 24" width="44" height="44" fill="none">
            <path
              d="M12 22s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12Z"
              stroke="currentColor"
              strokeWidth="1.7"
            />
            <path
              d="M12 13.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z"
              stroke="currentColor"
              strokeWidth="1.7"
            />
          </svg>
        )}

        {type === "phone" && (
          <svg viewBox="0 0 24 24" width="44" height="44" fill="none">
            <path
              d="M6.7 2.8c.7-.7 2.2-.5 3 .3l1.6 1.6c.7.7.8 1.8.2 2.6l-1 1.3c-.3.4-.3 1 0 1.4 1.2 1.9 2.8 3.5 4.7 4.7.4.3 1 .3 1.4 0l1.3-1c.8-.6 1.9-.5 2.6.2l1.6 1.6c.8.8 1 2.3.3 3-1.1 1.2-2.7 1.8-4.3 1.5-7.6-1.3-13.5-7.2-14.8-14.8-.3-1.6.3-3.2 1.5-4.3Z"
              stroke="currentColor"
              strokeWidth="1.7"
            />
          </svg>
        )}

        {type === "mail" && (
          <svg viewBox="0 0 24 24" width="44" height="44" fill="none">
            <path
              d="M4 6.5h16v11H4v-11Z"
              stroke="currentColor"
              strokeWidth="1.7"
            />
            <path
              d="M4.8 7.2 12 12.6l7.2-5.4"
              stroke="currentColor"
              strokeWidth="1.7"
            />
          </svg>
        )}
      </span>

      <div className={styles.iconText}>
        <div className={styles.iconTitle}>{title}</div>
        <div className={styles.iconSub}>{subtitle}</div>
      </div>
    </div>
  );
}
