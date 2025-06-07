"use client";

import { Content } from "@/components/Content/Content";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/Button/Button";
import Image from "next/image";
import { FaUser } from "react-icons/fa";
import { BlogGallery } from "@/components/BlogGallery/BlogGallery";
import { TitleSection } from "@/components/TitleSection/TitleSection";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "@/components/Loader/Loader";
import { getUserBlogs } from "@/lib/actions/getUserBlogs";

export default function Account() {
  const { data: session } = authClient.useSession();
  const {
    data: blogs,
    isPending: isBlogsPending,
    error: blogsError,
  } = useQuery({
    queryKey: ["blogs", session?.user?.id],
    queryFn: () => getUserBlogs(session?.user?.id || ""),
    enabled: !!session?.user?.id,
    initialData: [],
  });

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
    <Content minHeight="min-h-screen" gap="lg:gap-theme-lg gap-theme-md">
      <TitleSection title="Mi cuenta" />
      <div className="flex flex-col gap-theme-lg items-center w-full max-w-[var(--spacing-content-width)] p-theme-lg border rounded-md">
        <div className="flex flex-col items-center gap-theme-md">
          <div className="relative w-32 h-32">
            {session?.user?.avatar ? (
              <Image
                src={session?.user?.avatar}
                alt="Profile"
                fill
                className="rounded-full object-cover"
              />
            ) : (
              <div className="bg-primary/10 rounded-full flex items-center justify-center w-32 h-32">
                <FaUser className="text-primary w-16 h-16" />
              </div>
            )}
          </div>
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-2xl font-bold">{session?.user?.name}</h2>
            <p className="text-black/50">{session?.user?.email}</p>
          </div>
        </div>

        <div className="w-full border-t border-gray-200 pt-theme-md">
          <div className="flex flex-col gap-theme-sm">
            <div className="flex justify-between items-center">
              <span className="text-black/50">Rol</span>
              <span className="capitalize">
                {session?.user?.role || "Usuario"}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-black/50">Teléfono</span>
              <span>{session?.user?.phone || "No proporcionado"}</span>
            </div>
          </div>
        </div>

        <Button onClick={handleSignOut} variant="primary">
          Sign Out
        </Button>
      </div>
      {isBlogsPending ? (
        <Loader />
      ) : (
        <BlogGallery title="Mis publicaciones" blogs={blogs} />
      )}
    </Content>
  );
}
