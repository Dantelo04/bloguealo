"use client";

import { Content } from "@/components/Content/Content";
import { RegisterForm } from "@/components/Form/RegisterForm";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

export default function Register() {
  const { data: session, error } = authClient.useSession();

  if (session || error) {
    redirect("/");
  }

  return (
    <Content minHeight="min-h-screen" gap="lg:gap-theme-lg gap-theme-md">
      <div className="flex flex-col gap-theme-md items-center w-full max-w-[calc(var(--spacing-content-width)/2.5)] p-theme-lg border rounded-md pb-theme-xl">
        <RegisterForm />
        <p>
          ¿Ya tienes una cuenta? <Link href="/login">Inicia sesión</Link>
        </p>
      </div>
    </Content>
  );
}
