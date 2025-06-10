import { CONTENT_MIN_HEIGHT } from "@/assets/constants";
import { Content } from "@/components/Content/Content";
import Link from "next/link";

export default function NotFound() {
  return (
    <Content minHeight={CONTENT_MIN_HEIGHT} gap="lg:gap-theme-sm gap-theme-md justify-center">
        <h1 className="error-title">404</h1>
        <p>Ups! Pagina no encontrada</p>
        <Link href="/">Volver a inicio</Link>
    </Content>
  );
}
