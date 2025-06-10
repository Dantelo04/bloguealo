"use client";

import { Content } from "@/components/Content/Content";
import { LoginForm } from "@/components/Form/LoginForm";
import { Loader } from "@/components/Loader/Loader";
import { authClient } from "@/lib/auth-client";
import { CONTENT_MIN_HEIGHT } from "@/assets/constants";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

export default function Login() {
  const { data, isPending } = authClient.useSession();

  if (data?.session && data.session.userId) {
    redirect("/");
  }

  return (
    <Content minHeight={CONTENT_MIN_HEIGHT} gap="lg:gap-theme-lg gap-theme-md">
      {isPending ? (
        <Loader />
      ) : (
        <div className="flex flex-col gap-theme-md items-center w-full max-w-[calc(var(--spacing-content-width)/2.5)] lg:p-theme-lg p-theme-md lg:border border-border rounded-md lg:py-theme-xl">
          <LoginForm />
          <p>
            ¿No tienes una cuenta? <Link href="/register">Regístrate</Link>
          </p>
        </div>
      )}
    </Content>
  );
}
