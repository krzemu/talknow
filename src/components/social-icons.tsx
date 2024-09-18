import React from "react";
import {
  InstagramLogoIcon,
  TwitterLogoIcon,
  DiscordLogoIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";

export default function SocialIcons() {
  return (
    <article className="flex flex-wrap gap-x-2">
      <a target="_blank" rel="nofollow noopener noreferrer" href="https://www.instagram.com/">
        <div className="hover:bg-gray-50/10  transition rounded-full p-2">
          <InstagramLogoIcon className="" />
        </div>
      </a>
      <a target="_blank" rel="nofollow noopener noreferrer" href="https://twitter.com/">
        <div className="hover:bg-gray-50/10  transition rounded-full p-2">
          <TwitterLogoIcon />
        </div>
      </a>
      <a target="_blank" rel="nofollow noopener noreferrer" href="https://discord.com/">
        <div className="hover:bg-gray-50/10  transition rounded-full p-2">
          <DiscordLogoIcon />
        </div>
      </a>
      <a target="_blank" rel="nofollow noopener noreferrer" href="https://github.com">
        <div className="hover:bg-gray-50/10  transition rounded-full p-2">
          <GitHubLogoIcon />
        </div>
      </a>
    </article>
  );
}
