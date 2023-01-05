import { useState, useEffect } from "react";
import clsx from "clsx";

import { Image } from "../Image";

import { getSiteMetaData, getGithubProfile } from "@utils/helpers";

export function Bio({ className }) {
  const { author, social } = getSiteMetaData();
  const [avatarUrl, setAvatarUrl] = useState("");

  useEffect(() => getGithubProfile().then(url => setAvatarUrl(url)), []);

  return (
    <div className={clsx("flex items-center space-x-3", className)}>
      <div className="flex-shrink-0 mb-0 overflow-hidden rounded-full w-14 h-14">
        {avatarUrl && <Image
          width={56}
          height={56}
          src={avatarUrl}
          alt="Profile"
          placeholder="blur"
          blurDataURL="https://avatars.githubusercontent.com/u/10137?v=4"
        />}
      </div>

      <p className="text-base leading-7">
        Written by <b className="font-semibold">{author.name}</b>{" "}
        {author.summary}{" "}
        <a href={`https://twitter.com/${social.twitter}`}>
          Follow him on twitter
        </a>
      </p>
    </div>
  );
}
