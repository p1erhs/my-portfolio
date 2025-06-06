// src/components/Navbar.tsx
import Link from "next/link";
import { Disclosure, DisclosureButton } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ThemeToggle from "./ThemeToggle";

const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    return (
        <Disclosure as="nav" className="bg-white dark:bg-dark shadow-md sticky top-0 z-50">
            {({ open }) => (
                <>
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16 items-center">
                            {/* Logo + ThemeToggle (desktop only) */}
                            <div className="flex items-center space-x-4">
                                <Link href="/" className="text-2xl font-bold text-accent dark:text-yellow-400">
                                    Ioannis Pieris
                                </Link>
                                <div className="hidden md:block">
                                    <ThemeToggle />
                                </div>
                            </div>

                            {/* Desktop nav links */}
                            <div className="hidden md:flex items-center space-x-6">
                                {navItems.map((item) => (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        className="text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-yellow-400 transition-colors"
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </div>

                            {/* Mobile: ThemeToggle + menu button */}
                            <div className="flex items-center md:hidden">
                                <ThemeToggle />
                                <DisclosureButton className="inline-flex items-center justify-center p-2 ml-2 text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent dark:focus:ring-yellow-400">
                                    {open ? (
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                                    )}
                                </DisclosureButton>
                            </div>
                        </div>
                    </div>

                    {/* Mobile menu panel */}
                    <Disclosure.Panel className="md:hidden bg-white dark:bg-dark">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-neutral dark:hover:bg-gray-700 hover:text-accent dark:hover:text-yellow-400"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}
