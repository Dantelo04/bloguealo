import { Content } from "@/components/Content/Content";
import { CreateBlogForm } from "@/components/Form/CreateBlogForm";
import { TitleSection } from "@/components/TitleSection/TitleSection";

export default function Create() {
  return (
    <Content minHeight="min-h-screen" gap="lg:gap-theme-lg gap-theme-md">
      <TitleSection title="Crear publicación" />
      <CreateBlogForm />
    </Content>
  );
}