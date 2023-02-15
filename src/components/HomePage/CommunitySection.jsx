import React from 'react';
import Link from '@docusaurus/Link';

import { DiscordLogoIcon, LinkedInLogoIcon, TwitterLogoIcon, VideoIcon } from '@radix-ui/react-icons';

const githubUsernames = [
  'androiddevnotes',
];

export default function CommunitySection() {
  return (
    <section className="no-underline-links">
      <div className="mx-auto flex w-full flex-col items-center justify-center bg-gradient-to-b from-zinc-200/90 to-white px-4 py-16 pt-32 text-zinc-700 dark:from-[#262626] dark:to-black dark:text-white">
        <h2 className="text-3xl">
          Find the <span className="text-primary-100">community</span>
        </h2>
        <p className="mb-10 text-zinc-500">
          Run the code
        </p>
        <div className="mx-auto mb-16 flex flex-wrap -space-x-1.5">
          {githubUsernames.map((username) => (
            <img
              key={username}
              src={`https://storage.androiddevnotes.com/api/raw/?path=/assets/1/9x1.png`}
              alt={`User ${username}`}
              className='w-8 h-8 object-contain'
            />
          ))}
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-2 text-sm font-semibold lg:flex-row lg:gap-8">
          <Link
            className="flex w-full items-center justify-center gap-2 rounded-sm border border-solid border-primary-100 bg-primary-100/10 px-2 py-2 text-primary-100 lg:w-auto"
            href="https://discord.gg/7BgVnSb3SF"
          >
            <DiscordLogoIcon /> Discord &rarr;
          </Link>
          <Link
            className="flex w-full items-center justify-center gap-2 rounded-sm border border-solid border-primary-100 bg-primary-100/10 px-2 py-2 text-primary-100 lg:w-auto"
            href="https://twitter.com/androiddevnotes"
          >
            <TwitterLogoIcon /> Twitter &rarr;
          </Link>
          <Link
            className="flex w-full items-center justify-center gap-2 rounded-sm border border-solid border-primary-100 bg-primary-100/10 px-2 py-2 text-primary-100 lg:w-auto"
            href="https://www.youtube.com/c/AwesomeDevNotes"
          >
            <VideoIcon /> YouTube &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
