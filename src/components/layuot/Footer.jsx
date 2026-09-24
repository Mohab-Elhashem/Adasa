import { Link } from "react-router-dom";
import { socialMediaLinks } from "@/constants/socialMediaLinks"
import { navLinks } from "@/constants/navLinks";
import { ChevronRight, Heart } from "lucide-react";
import { categories } from "@/constants/categories";
import Button from "../ui/Button"
import { Container } from "../ui/Container";

export default function Footer() {
    return (
        <footer className="relative bg-[#0a0a0a] text-neutral-300 overflow-hidden border-t border-[#262626]">
            <Container className="py-16"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {/* col 1 */}
                <div className="lg:col-span-1">
                    <Link to='/' className="flex items-center gap-3 mb-6 group">
                        <div className="w-11 h-11 bg-linear-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-all duration-300">
                            <span className="text-white font-bold text-xl">ع</span>
                        </div>
                        <span className="text-xl font-bold text-white">عدسة</span>
                    </Link>
                    <p className="text-sm text-neutral-500 mb-6 leading-relaxed">
                        مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.
                    </p>
                    <div className="flex items-center gap-3">
                        {socialMediaLinks.map((item) => {
                            const Icon = item.icon;
                            return (
                                <a
                                    key={item.id}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-[#161616] border border-[#262626] hover:bg-linear-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110"
                                    aria-label={item.name}
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            );
                        })}
                    </div>
                </div>
                {/* col 2 */}
                <div>
                    <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                        <span className="w-8 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full"></span>
                        استكشف
                    </h3>
                    <ul className="space-y-4">
                        {
                            navLinks.map((item) => (
                                <Link key={item.id} to={item.path} className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group">
                                    <ChevronRight className="w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180" />
                                    {item.title}
                                </Link>
                            ))
                        }
                    </ul>
                </div>
                {/* col 3 */}
                <div>
                    <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                        <span className="w-8 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full"></span>
                        التصنيفات
                    </h3>
                    <ul className="space-y-4">
                        {
                            categories.map((item) => (
                                <Link key={item.id} to={item.path} className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group">
                                    <ChevronRight className="w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180" />
                                    {item.title}
                                </Link>
                            ))
                        }
                    </ul>
                </div>
                {/* col 4 */}
                <div>
                    <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                        <span className="w-8 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full"></span>
                        ابقى على اطلاع
                    </h3>
                    <p className="text-sm text-neutral-500 mb-4">اشترك للحصول على أحدث المقالات والتحديثات.</p>
                    <form action="" className="space-y-3">
                        <div className="relative">
                            <input type="email" className="w-full px-4 py-3 bg-[#161616] border border-[#262626] rounded-xl text-sm text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all duration-300 placeholder-neutral-600" placeholder="أدخل بريدك الإلكتروني" />
                            <Button type='submit' className="w-full btn-primary text-sm mt-2">اشترك</Button>
                        </div>
                    </form>
                </div>
            </div>
            </Container>
            <div className="relative border-t border-[#262626]">
                <Container className="py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-neutral-600 flex gap-1">
                            <span>© 2026 عدسة. صنع بكل</span>
                            <Heart className="w-5 h-5 text-orange-500 fill-orange-500" />
                            <span>جميع الحقوق محفوظة.</span>
                        </p>
                        <div className="flex gap-6">
                            <a className="text-sm text-neutral-600 hover:text-orange-500 transition-colors duration-300" href="/privacy" data-discover="true">سياسة الخصوصية</a>
                            <a className="text-sm text-neutral-600 hover:text-orange-500 transition-colors duration-300" href="/terms" data-discover="true">شروط الخدمة</a>
                        </div>
                    </div>
                </Container>
            </div>
        </footer>
    )
}
