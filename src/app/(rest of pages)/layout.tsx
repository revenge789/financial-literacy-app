import MobileNav from "@/components/MobileNav";
import WebNav from "@/components/WebNav";
import Image from "next/image";
import Link from "next/link";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header className="bg-black/50 text-slate-50 h-16 w-full flex justify-between py-2 px-3 fixed z-50">
        <Link
          href="/"
          className="flex items-center font-semibold gap-3 text-xl"
        >
          <Image src="/rocket.svg" width={40} height={40} alt="rocket icon" />
          Rocket Finance
        </Link>
        <MobileNav />
        <WebNav />
      </header>
      <main className="pt-16 min-h-screen bg-indigo-950 bg-stars text-slate-50 relative flex justify-center items-center flex-col">
        {children}
      </main>
    </>
  );
};
export default Layout;
