import React from "react";
import { CustomLink } from "../CustomLink/CustomLink";
import { CgArrowRight } from "react-icons/cg";

interface TitleSectionProps {
  title: string;
  link?: string;
}

export const TitleSection = ({ title, link }: TitleSectionProps) => {
  return (
    <div className="flex flex-col gap-theme-sm w-full max-w-[var(--spacing-content-width)]">
      <div className="inline-flex justify-between items-center w-full ">
        <h3>{title}</h3>
        {link && (
          <CustomLink href={link}>
            <span>Ver todas</span>
            <CgArrowRight className="w-4 h-4" />
          </CustomLink>
        )}
      </div>
      <hr className='w-full border-t border-border'/>
    </div>
  );
};
