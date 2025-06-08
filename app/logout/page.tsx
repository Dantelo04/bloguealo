"use client";
import { CONTENT_MIN_HEIGHT } from "@/assets/constants";
import { Button } from "@/components/Button/Button";
import { Content } from "@/components/Content/Content";
import { authClient } from "@/lib/auth-client";

export default function Logout() {
  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          window.location.href = "/login";
        },
      },
    });
  };

  return (
    <Content minHeight={CONTENT_MIN_HEIGHT}>
      <div className="flex flex-col gap-theme-sm items-center justify-start max-w-[calc(var(--spacing-content-width)/2)] p-theme-md border rounded-md">
        <h3 className="text-2xl font-bold">¿Estás seguro de querer cerrar sesión?</h3>
        <Button onClick={handleSignOut}>Cerrar sesión</Button>
      </div>
    </Content>
  );
}
