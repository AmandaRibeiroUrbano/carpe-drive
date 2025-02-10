import { useEffect, useRef, useState } from "react";
import { ThemeToggle } from "../Theme/ThemeToggle";
import logo from "@assets/logo&name.png";
import logoresponsive from "@assets/center_logo&name.png";
import MenuLink from "@components/MenuLink";
import Button from "@components/Button";
import Login from "@components/Login";
import { UserCircle2, XIcon } from "lucide-react";

const Header = () => {

  const [showLogin, setShowLogin] = useState(false);
  const loginRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (loginRef.current && !loginRef.current.contains(event.target as Node)) {
        setShowLogin(false);
      }
    };

    if (showLogin) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showLogin]);

  return (
    <header className="w-full flex items-center justify-between sticky top-0 z-50 py-4 px-8 bg-white dark:bg-primary shadow-md">
      <div className="flex items-center space-x-4">
        <img
          srcSet={`${logoresponsive} 600w, ${logo} 1200w`}
          alt="Logo"
          className="h-10 w-auto"
        />
      </div>

      <div className="flex items-center gap-8">
        <nav className="flex items-center gap-4">
          <MenuLink to="/">Início</MenuLink>
          <MenuLink to="/*">Sobre</MenuLink>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <ThemeToggle />
        <Button
          onClick={() => setShowLogin(true)}
          className="flex !rounded-full md:!rounded-2xl flex-row gap-2 items-center h-8 !w-auto !px-2"
        >
          <UserCircle2 />
          <p className="hidden md:block">Entrar / Cadastre-se</p>
        

        {showLogin && (
            <div
            ref={loginRef}
              className="absolute top-full right-0 mx-5 bg-white dark:bg-gray-900 rounded-lg shadow-lg w-96 z-50"
            >
              <button
                onClick={() => setShowLogin(false)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:hover:text-white"
              >
                <XIcon className="w-5" />
              </button>
              <Login />
            </div>
          )}
</Button>
      </div>
    </header>
  );
};
export { Header };
