import logoUrl from "./assets/logo.jpeg";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white supports-backdrop-blur:bg-white/95 dark:bg-slate-900/75">
      <div className="max-w-8xl mx-auto">
        <div className="py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0">
          <div className="relative flex items-center">
            <span className="mr-3 flex-none w-[2.0625rem] overflow-hidden md:w-auto">
              <img src={logoUrl} alt="org logo" className="w-28"></img>
            </span>
            <h3 className="text-xl items-center leading-5 px-3 py-1 mx-auto my-0">
              Dashboard
            </h3>
          </div>
        </div>
      </div>
    </header>
  );
}
