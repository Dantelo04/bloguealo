"use client";
import { CONTENT_MIN_HEIGHT } from "@/assets/constants";
import { Button } from "@/components/Button/Button";
import { Content } from "@/components/Content/Content";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { Error } from "@/components/Form/Error";

export default function Logout() {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onPending: () => {
          setPending(true);
        },
        onError: () => {
          setError("Error al cerrar sesión");
          setPending(false);
        },
        onSuccess: () => {
          window.location.href = "/login";
        },
      },
    });
  };

  return (
    <Content minHeight={CONTENT_MIN_HEIGHT} gap="justify-center">
      <div className="flex flex-col gap-theme-sm items-center justify-start max-w-[calc(var(--spacing-content-width)/2)] p-theme-md lg:border rounded-md">
        <h3 className="text-2xl font-bold">¿Estás seguro de querer cerrar sesión?</h3>
        <Button onClick={handleSignOut} disabled={pending}>Cerrar sesión</Button>
        {error && <Error error={error} />}
      </div>
    </Content>
  );
}
