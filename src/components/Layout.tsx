import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

type Props = {
    children: ReactNode;
};

export default function Layout({ children }: Props) {
    return (
        <div className="flex flex-col min-h-screen bg-neutral dark:bg-dark text-dark dark:text-gray-100">
            <Navbar />
            <main className="flex-grow w-full">{children}</main>
            <Footer />
        </div>
    );
}
