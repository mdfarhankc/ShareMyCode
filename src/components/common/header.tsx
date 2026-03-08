import Logo from "./logo";

export default function Header() {
  return (
    <header className="fixed top-0 z-10 w-full bg-background/80 px-4 py-3 backdrop-blur-sm sm:px-6 sm:py-5">
      <Logo />
    </header>
  );
}
