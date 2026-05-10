import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-ink-700 px-6 md:px-12 py-12 flex flex-col md:flex-row justify-between items-center bg-ink-950 gap-6 md:gap-0 text-center md:text-left">
      <div>
        <div className="font-cinzel text-lg font-bold tracking-[0.2em] text-ember-600">FORGE</div>
        <p className="text-xs font-light italic text-text-dim mt-1">Don't fight the urge. Harvest it.</p>
      </div>
      <ul className="flex gap-8 list-none flex-wrap justify-center">
        <li>
          <Link
            href="#privacy-policy"
            className="font-cinzel text-[10px] tracking-[0.25em] uppercase text-text-dim hover:text-text-muted no-underline transition-colors duration-300"
            id="footer-link-privacy"
          >
            Privacy
          </Link>
        </li>
        <li>
          <Link
            href="#terms-of-service"
            className="font-cinzel text-[10px] tracking-[0.25em] uppercase text-text-dim hover:text-text-muted no-underline transition-colors duration-300"
            id="footer-link-terms"
          >
            Terms
          </Link>
        </li>
        <li>
          <Link
            href="#support-request"
            className="font-cinzel text-[10px] tracking-[0.25em] uppercase text-text-dim hover:text-text-muted no-underline transition-colors duration-300"
            id="footer-link-support"
          >
            Support
          </Link>
        </li>
      </ul>
    </footer>
  );
}
