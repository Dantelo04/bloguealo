"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "./Button";
import { useState } from "react";

export const LogoutButton = () => {
  const [pending, setPending] = useState(false);

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onPending: () => {
          setPending(true);
        },
        onError: () => {
          setPending(false);
        },
        onSuccess: () => {
          window.location.href = "/login";
        },
      },
    });
  };
  return (
    <div className="flex flex-col gap-theme-sm w-full lg:w-fit">
      <Button onClick={handleSignOut} disabled={pending} variant="danger">
        Cerrar sesión
      </Button>
    </div>
  );
};
