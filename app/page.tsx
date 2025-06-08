import { BlogGallery } from "@/components/BlogGallery/BlogGallery";
import { BlogHighlight } from "@/components/BlogHighlight/BlogHighlight";
import { Content } from "@/components/Content/Content";
import { CONTENT_MIN_HEIGHT } from "@/assets/constants";
import { getAllBlogs } from "@/lib/actions/getAllBlogs";

export const revalidate = 0;

export default async function Home() {
  const data = await getAllBlogs({ page: 1, limit: 10 });

  return (
    <Content minHeight={CONTENT_MIN_HEIGHT}>
      <>
        <BlogHighlight blog={data[0]} rounded />
        <BlogGallery link="/blog" blogs={data} />
      </>
    </Content>
  );
}
