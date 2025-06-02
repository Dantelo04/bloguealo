"use client";

import React from "react";
import { Logo } from "../Logo/Logo";
import Link from "next/link";
import { contentWidth, gap } from "@/theme/layout";
import { Button } from "../Button/Button";

const navItems = [
  {
    label: "Inicio",
    href: "/",
  },
  {
    label: "Sobre Mi",
    href: "/about",
  },
  {
    label: "Contacto",
    href: "/contact",
  },
];

export const Navbar = () => {
  return (
    <div className="w-full flex justify-center border-b backdrop-blur-xl bg-white/50 sticky top-0 z-10">
      <div className="flex justify-between items-center py-4 max-w-content-width w-full">
        <Logo />
        <div className="flex gap-theme-xl items-center">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex gap-theme-sm items-center">
          <Link href="/login">Ingresar</Link>
          <Button
            onClick={() => {
              window.location.href = "/create";
            }}
          >
            Crear
          </Button>
        </div>
      </div>
    </div>
  );
};
