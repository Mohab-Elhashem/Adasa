import { Link, NavLink } from "react-router-dom";
import logo from "@/assets/logo.png";
import { navLinks } from "@/constants/navLinks";
import { Menu, Search, X } from "lucide-react";
import { useState } from "react";
import Button from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-[#262626]">
            <Container>
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="relative w-12 h-12 rounded-xl overflow-hidden group-hover:scale-105 transition-all duration-300">
                            <img src={logo} alt="شعار عدسة" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold bg-linear-to-r from-white to-neutral-300 bg-clip-text text-transparent">
                                عدسة
                            </span>
                            <span className="text-xs text-orange-400/80 hidden sm:block tracking-wide">
                                عالم التصوير الفوتوغرافي
                            </span>
                        </div>
                    </Link>

                    {/* Links (Desktop) */}
                    <div className="hidden md:flex items-center">
                        <div className="flex items-center bg-[#161616] rounded-full p-1.5 border border-[#262626]">
                            {navLinks.map((item) => (
                                <NavLink
                                    key={item.id}
                                    to={item.path}
                                    end={item.path === "/"}
                                    className={({ isActive }) =>
                                        `px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${isActive
                                            ? "bg-linear-to-r from-orange-500 to-orange-600 text-white"
                                            : "text-neutral-400 hover:text-white"
                                        }`
                                    }
                                >
                                    {item.title}
                                </NavLink>
                            ))}
                        </div>
                    </div>

                    {/* Actions (Desktop) */}
                    <div className="hidden md:flex items-center gap-3">
                        <button
                            aria-label="البحث"
                            className="p-3 text-neutral-500 hover:text-orange-500 hover:bg-[#161616] rounded-xl transition-all duration-300 border border-transparent hover:border-[#262626]"
                        >
                            <Search className="w-5 h-5 text-neutral-400" />
                        </button>

                        <Link to="/blog">
                            <Button>ابدأ القراءة</Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="قائمة التنقل"
                        aria-expanded={isOpen}
                        className="md:hidden p-3 text-neutral-400 hover:text-white hover:bg-[#161616] rounded-xl transition-all duration-300 border border-transparent hover:border-[#262626]"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-6" : "max-h-0"
                        }`}
                >
                    <div className="bg-[#161616] backdrop-blur-xl rounded-2xl p-4 border border-[#262626]">
                        <div className="flex flex-col space-y-1">
                            {navLinks.map((item) => (
                                <NavLink
                                    key={item.id}
                                    to={item.path}
                                    end={item.path === "/"}
                                    onClick={() => setIsOpen(false)}
                                    className={({ isActive }) =>
                                        `px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${isActive
                                            ? "bg-orange-500/10 text-orange-500 border border-orange-500/30"
                                            : "text-neutral-400 hover:bg-[#1a1a1a] hover:text-white"
                                        }`
                                    }
                                >
                                    {item.title}
                                </NavLink>
                            ))}

                            <Link to="/blog" onClick={() => setIsOpen(false)} className="pt-2">
                                <Button className="w-full">ابدأ القراءة</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </nav>
    );
}