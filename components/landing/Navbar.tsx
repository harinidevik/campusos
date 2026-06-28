export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="text-2xl font-bold text-white">
          Campus<span className="text-orange-500">OS</span>
        </div>

        <nav className="hidden gap-8 text-sm text-zinc-300 lg:flex">
          <a href="#">Features</a>
          <a href="#">Modules</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
        </nav>

        <button className="rounded-full bg-orange-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-orange-600">
          Get Started
        </button>
      </div>
    </header>
  );
}