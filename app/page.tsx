import { BlogGallery } from "@/components/BlogGallery/BlogGallery";
import { BlogHighlight } from "@/components/BlogHighlight/BlogHighlight";
import { Content } from "@/components/Content/Content";

export default function Home() {
  return (
    <Content minHeight="min-h-screen">
      <BlogHighlight />
      <BlogGallery link="/blog"/>
    </Content>
  );
}
