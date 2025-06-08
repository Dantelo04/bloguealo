import { Content } from "@/components/Content/Content";
import { CreateBlogForm } from "@/components/Form/CreateBlogForm";
import { TitleSection } from "@/components/TitleSection/TitleSection";
import { CONTENT_MIN_HEIGHT } from "@/assets/constants";

export default function Create() {
  return (
    <Content minHeight={CONTENT_MIN_HEIGHT} gap="lg:gap-theme-lg gap-theme-md">
      <TitleSection title="Crear publicación" />
      <CreateBlogForm />
    </Content>
  );
}