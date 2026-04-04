import { Container, Logo, LogoutButton } from "../index";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const authStatus = useSelector((state) => state.auth?.status);

  const navItems = [
    { name: "Home", slug: "/", end: true, active: true },
    { name: "Login", slug: "/login", active: !authStatus },
    { name: "Signup", slug: "/signup", active: !authStatus },
    { name: "All Posts", slug: "/all-posts", active: authStatus },
    { name: "Add Post", slug: "/add-post", active: authStatus },
  ];

  const linkClass = ({ isActive }) =>
    [
      "rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200",
      "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400",
      isActive
        ? "bg-white/15 text-white"
        : "text-stone-300 hover:bg-white/10 hover:text-white",
    ].join(" ");

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-stone-900/95 shadow-sm backdrop-blur-md supports-[backdrop-filter]:bg-stone-900/80">
      <Container>
        <nav className="flex flex-wrap items-center gap-4 py-3" aria-label="Main">
          <div className="mr-auto flex items-center">
            <NavLink to="/" className="block rounded-md ring-offset-2 ring-offset-stone-900 focus-visible:ring-2 focus-visible:ring-primary-400">
              <Logo width="130px" />
            </NavLink>
          </div>
          <ul className="flex flex-wrap items-center gap-1 sm:gap-2">
            {navItems.map(
              (item) =>
                item.active && (
                  <li key={item.name}>
                    <NavLink to={item.slug} end={item.end} className={linkClass}>
                      {item.name}
                    </NavLink>
                  </li>
                )
            )}
            {authStatus && (
              <li>
                <LogoutButton />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
