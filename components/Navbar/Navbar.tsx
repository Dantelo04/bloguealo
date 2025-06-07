"use client";

import React, { useEffect, useState } from "react";
import { Logo } from "../Logo/Logo";
import Link from "next/link";
import { Button } from "../Button/Button";
import { BiPlus } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { authClient } from "@/lib/auth-client";
import { AccountButton } from "../AccountButton/AccountButton";
import { NAV_ITEMS } from "@/assets/constants";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session, isPending, error } = authClient.useSession();

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`w-full flex justify-center border-b backdrop-blur-md bg-white/75 sticky top-0 z-10 overflow-x-clip ${
        isMenuOpen ? "overflow-x-visible" : "overflow-x-clip"
      }`}
    >
      <div className="flex justify-between items-center py-4 px-[16px] max-w-[calc(var(--spacing-content-width)+32px)] w-full">
        <Logo />
        <div className="lg:flex hidden gap-theme-xl items-center">
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="lg:flex hidden gap-theme-sm items-center">
          {session && !isPending && !error ? (
            <AccountButton
              avatarImage={session.user?.avatar}
              width={36}
              height={36}
            />
          ) : isPending ? (
            <div></div>
          ) : (
            <Link href="/login">Ingresar</Link>
          )}
          <Button
            onClick={() => {
              if (session && !isPending && !error) {
                window.location.href = "/create";
              } else {
                window.location.href = "/login";
              }
            }}
          >
            <div className="inline-flex items-center gap-1">
              Crear
              <BiPlus className="w-5 h-5" />
            </div>
          </Button>
        </div>
        <div className="lg:hidden flex gap-theme-sm items-center">
          {!session && !isPending && (
            <Link href="/login" className="text-xl">
              Ingresar
            </Link>
          )}
          {session && !isPending && !error && (
            <AccountButton
              avatarImage={session.user?.avatar}
              width={36}
              height={36}
            />
          )}
          <Button
            className="rounded-full px-2 py-2"
            variant="secondary"
            onClick={() => setIsMenuOpen(true)}
          >
            <BiMenu className="w-7 h-7" />
          </Button>
        </div>
        <div
          className={`${
            isMenuOpen
              ? "translate-x-[0%] opacity-100"
              : "translate-x-[100%] opacity-0"
          } lg:hidden h-screen w-screen absolute -top-[8px] left-0 bg-white duration-300 flex flex-col px-horizontal-padding py-theme-md gap-theme-lg`}
        >
          <div className="flex justify-between items-center">
            <Logo />
            <div className="lg:hidden flex gap-theme-sm items-center">
              {!session && !isPending && (
                <Link href="/login" className="text-xl">
                  Ingresar
                </Link>
              )}
              {session && !isPending && !error && (
                <AccountButton
                  avatarImage={session.user?.avatar}
                  width={36}
                  height={36}
                  onClick={() => setIsMenuOpen(false)}
                />
              )}
              <Button
                className="rounded-full px-2 py-2"
                variant="secondary"
                onClick={() => setIsMenuOpen(false)}
              >
                <IoMdClose className="w-7 h-7" />
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-theme-lg text-xl">
            {NAV_ITEMS.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)}>
                {item.label}
              </Link>
            ))}
          </div>
          <Button
            className="py-4 rounded-md mt-4"
            onClick={() => {
              if (session && !isPending && !error) {
                window.location.href = "/create";
              } else {
                window.location.href = "/login";
              }
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
