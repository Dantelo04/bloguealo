import { Content } from "@/components/Content/Content";
import { LoginForm } from "@/components/Form/LoginForm";
import Link from "next/link";
import React from "react";

export default function Login() {
  return (
    <Content minHeight="min-h-screen" gap="lg:gap-theme-lg gap-theme-md">
      <div className="flex flex-col gap-theme-sm items-center w-full max-w-[calc(var(--spacing-content-width)/2)] p-theme-lg border rounded-md pb-theme-xl">
        <LoginForm />
        <p>
          ¿No tienes una cuenta? <Link href="/register">Regístrate</Link>
        </p>
      </div>
    </Content>
  );
}
