import React from "react";
import { SocialMediaButton } from "../Button/SocialMediaButton";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { LikeButton } from "../Button/LikeButton";
import { Author } from "../BlogHighlight/Author";
import { SimpleBlogList } from "../SimpleBlogList/SimpleBlogList";
import { getUserById } from "@/lib/actions/getUserById";
import { getAllBlogs } from "@/lib/actions/getAllBlogs";

interface BlogAsideProps {
  author?: string | null;
  date?: string;
  blogId: string | null;
  likes: string[];
  demo?: boolean;
}

export const BlogAside = async ({
  likes,
  author,
  date,
  blogId,
}: BlogAsideProps) => {
  const data = await getUserById(author || null);

  const blogs = await getAllBlogs({ limit: 3 });

  return (
    <div className="flex flex-col gap-theme-md w-full lg:w-[25%] lg:sticky lg:top-[94px] h-fit">
      <hr className="lg:hidden border-black" />
      <div className="inline-flex justify-between items-center">
        {data && <Author author={data} background={false} date={date} />}
        <LikeButton
          likes={likes}
          blogId={blogId}
        />
      </div>
      <hr className="border-black" />
      {blogs && <SimpleBlogList blogs={blogs} />}
      <hr className="border-black" />
      <h4 className="lg:flex hidden">Compartir</h4>
      <div className="flex gap-theme-sm">
        <SocialMediaButton>
          <FaFacebook />
        </SocialMediaButton>
        <SocialMediaButton>
          <FaTwitter />
        </SocialMediaButton>
        <SocialMediaButton>
          <FaInstagram />
        </SocialMediaButton>
      </div>
    </div>
  );
};
