import { Moon, Sun } from "lucide-react";

import { useTheme } from "../../context/ThemeContext";

const Header = () => {

    const { theme, toggleTheme } = useTheme();

    return (
        <header className="sticky top-0 z-50 border-b backdrop-blur-xl" style={{background: "rgba(10, 10, 10, 0.7)", borderColor: "var(--color-border)"}}>
            <div className="container-primary">
                <div className="flex h-20 items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className=" flex h-11 w-11 items-center justify-center rounded-2xl font-bold" style={{ background: "var(--gradient-primary)", boxShadow: "var(--glow-primary)"}}>
                        ⚡
                        </div>
                        <div>
                            <h1 className="text-xl font-bold">
                                RODA Finance
                            </h1>
                            <p className="text-sm">
                                Créditos inteligentes
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <button onClick={toggleTheme} className="flex h-12 w-12 items-center justify-center rounded-2xl border transition-all duration-300" style={{borderColor: "var(--color-border)", background: "var(--color-surface-secondary)"}}>
                            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;