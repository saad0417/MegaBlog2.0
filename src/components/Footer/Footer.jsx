import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  const linkClass =
    "text-sm text-stone-400 transition-colors hover:text-primary-400 focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400";

  return (
    <footer className="mt-auto border-t border-white/10 bg-stone-900 text-stone-400">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between gap-6">
              <Link
                to="/"
                className="inline-flex max-w-[220px] rounded-md ring-offset-2 ring-offset-stone-900 focus-visible:ring-2 focus-visible:ring-primary-400"
              >
                <Logo width="220px" />
              </Link>
              <p className="text-sm text-stone-500">
                &copy; {new Date().getFullYear()} Mega Blog. Built for readers and writers.
              </p>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-wider text-stone-500">
              Explore
            </h3>
            <ul className="space-y-3">
              <li>
                <Link className={linkClass} to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className={linkClass} to="/all-posts">
                  All posts
                </Link>
              </li>
              <li>
                <Link className={linkClass} to="/add-post">
                  Write
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-wider text-stone-500">
              Account
            </h3>
            <ul className="space-y-3">
              <li>
                <Link className={linkClass} to="/login">
                  Log in
                </Link>
              </li>
              <li>
                <Link className={linkClass} to="/signup">
                  Sign up
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-wider text-stone-500">
              Site
            </h3>
            <ul className="space-y-3">
              <li>
                <span className="text-sm text-stone-500">Terms &amp; privacy — placeholder</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
