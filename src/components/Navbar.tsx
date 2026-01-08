"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";

export function NavbarDemo() {
  const navItems = [
    {
      name: "Aria",
      link: "/#aria",
    },
    {
      name: "Aden",
      link: "/#aden",
    },
    {
      name: "How It Works",
      link: "/#hiw",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 inset-x-0 z-50 my-3">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton variant="secondary">
              Join Aria
            </NavbarButton>
            <NavbarButton variant="primary">
              Aden Waitlist
            </NavbarButton>
          </div>

        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-white"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="secondary"
                className="w-full"
              >
                Join Aria
              </NavbarButton>

              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Aden Waitlist
              </NavbarButton>
            </div>

          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {/* Navbar */}
    </div>
  );
}

