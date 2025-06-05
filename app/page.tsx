import { BlogGallery } from "@/components/BlogGallery/BlogGallery";
import { BlogHighlight } from "@/components/BlogHighlight/BlogHighlight";
import { Content } from "@/components/Content/Content";

export default function Home() {
  return (
    <Content minHeight="min-h-screen">
      <BlogHighlight
        title="Importance of AI in the future"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        image="https://picsum.photos/1200/500"
        author="John Doe"
        date="2021-01-01"
        link="/blog/1"
      />
      <BlogGallery link="/blog" />
    </Content>
  );
}
