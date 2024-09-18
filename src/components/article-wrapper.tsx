import { cn } from "@/lib/utils";
import React from "react";
import ArticleCard, { ArticleDescription, ArticleTitle } from "./article-card";
import { posts } from "@prisma/client";

type ArticleWrapperProps = {
  className?: string;
  posts: posts[];
};

export default function ArticleWrapper({ className, posts }: ArticleWrapperProps) {
  return (
    <section className={cn(`grid grid-cols-3 gap-5 justify-center items-center`, className)}>
      {posts.map((post) => (
        <ArticleCard post={post} key={post.id} className="h-card">
          <ArticleTitle>{post.title}</ArticleTitle>
          <ArticleDescription>{post.teaser}</ArticleDescription>
        </ArticleCard>
      ))}
    </section>
  );
}
