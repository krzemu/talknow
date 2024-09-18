import { cn } from "@/lib/utils";
import ArticleCard, { ArticleDescription, ArticleTitle } from "./article-card";
import { posts } from "@prisma/client";

export default function HeroShowcase({ posts }: { posts: posts[] }) {
  return (
    <section>
      <div className="grid grid-cols-3 grid-rows-2 gap-5 h-[476px]">
        {posts.map(
          (post, index) =>
            index < 3 && (
              <ArticleCard
                key={post.id}
                post={post}
                className={cn({
                  "md:col-start-1 md:row-start-1 md:col-span-2 md:row-span-2": index === 0,
                  "md:col-start-3 md:row-start-1 md:col-span-1 md:row-span-1": index === 1,
                  "md:col-start-3 md:row-start-2 md:col-span-1 md:row-span-1": index === 2,
                })}>
                <ArticleTitle
                  className={cn({
                    "text-2xl lg:text-3xl": index === 0,
                  })}>
                  {post.title}
                </ArticleTitle>
                <ArticleDescription>{post.teaser}</ArticleDescription>
              </ArticleCard>
            )
        )}
      </div>
    </section>
  );
}
