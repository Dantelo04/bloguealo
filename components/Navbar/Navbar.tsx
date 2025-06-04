"use client";

import React, { useState } from "react";
import { Logo } from "../Logo/Logo";
import Link from "next/link";
import { Button } from "../Button/Button";
import { BiPlus } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full flex justify-center border-b backdrop-blur-md bg-white/75 sticky top-0 z-10">
      <div className="flex justify-between items-center py-4 px-[16px] max-w-[calc(var(--spacing-content-width)+32px)] w-full">
        <Logo />
        <div className="lg:flex hidden gap-theme-xl items-center">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="lg:flex hidden gap-theme-sm items-center">
          <Link href="/login">Ingresar</Link>
          <Button
            onClick={() => {
              window.location.href = "/create";
            }}
          >
            <div className="inline-flex items-center gap-1">
              Crear
              <BiPlus className="w-5 h-5" />
            </div>
          </Button>
        </div>
        <div className="lg:hidden flex gap-theme-sm items-center">
          <Link href="/login" className="text-xl">
            Ingresar
          </Link>
          <Button
            className="rounded-full px-2 py-2"
            variant="secondary"
            onClick={handleMenuOpen}
          >
            <BiMenu className="w-7 h-7" />
          </Button>
        </div>
        <div
          className={`${
            isMenuOpen ? "top-0" : "-top-[100vh]"
          } lg:hidden h-screen w-screen absolute left-0 bg-white duration-400 flex flex-col px-horizontal-padding py-theme-md gap-theme-lg`}
        >
          <div className="flex justify-between items-center">
            <Logo />
            <div className="lg:hidden flex gap-theme-sm items-center">
              <Link href="/login" className="text-xl">
                Ingresar
              </Link>
              <Button
                className="rounded-full px-2 py-2"
                variant="secondary"
                onClick={handleMenuOpen}
              >
                <IoMdClose className="w-7 h-7" />
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-theme-lg text-xl">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
          <Button
            className="py-4 rounded-md mt-4"
            onClick={() => {
              window.location.href = "/create";
            }}
          >
            <div className="inline-flex items-center gap-1">
              Crear
              <BiPlus className="w-5 h-5" />
            </div>
          </Button>
          <div className="w-full inline-flex justify-center items-center text-gray-100">
            <span>- Hecho por&nbsp;</span>
            <a
              href="https://dantelo.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary"
            >
              Dante 🚀 -
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
