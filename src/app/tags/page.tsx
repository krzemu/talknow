import Main from "@/components/main";
import { WrapperBox } from "@/components/wrapper";
import { getPosts } from "@/lib/utils";
import React from "react";

export default async function Page() {
  const posts = await getPosts();

  return (
    <Main>
      <WrapperBox>
        {posts.map((post) => (
          <div key={post.id} className="mb-10">
            {`{`}
            <p>id: `{post.id}`</p>
            <h2>title: `{post.title}`</h2>
            <p>slug: `{post.slug}`</p>
            <p>featured_image: `{post.featured_image}`</p>
            <p>teaser: `{post.teaser}`</p>
            <p>content: `{post.content}`</p>
            <p>category: `{post.category}`</p>
            <p>published_date: `{post.published_date.toString()}`</p>
            <p>update_date: `{post.published_date.toString()}`</p>
            <p>published: true</p>
          </div>
        ))}
      </WrapperBox>
    </Main>
  );
}
