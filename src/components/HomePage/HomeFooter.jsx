import React from 'react';
import Link from '@docusaurus/Link';
import { useColorMode } from '@docusaurus/theme-common';

import { DiscordLogoIcon, LinkedInLogoIcon, TwitterLogoIcon, VideoIcon } from '@radix-ui/react-icons';
import clsx from 'clsx';

export default function HomeFooter({ className }) {
  const { colorMode } = useColorMode();

  return (
    <footer className="bg-secondary-900">
      <div
        className={clsx(
          'mx-auto flex max-w-7xl flex-col gap-4 px-10 py-8 lg:flex-row lg:items-center lg:gap-8',
          className
        )}
      >
        <div>
          <img src={`/logo/${colorMode}.svg`} alt="Logo" className="h-10" />
        </div>
        <div className="flex items-center gap-3">
          <Link href="https://discord.gg/7BgVnSb3SF">
            <DiscordLogoIcon className="h-6 w-6 text-zinc-400 hover:text-primary" />
          </Link>
          <Link href="https://twitter.com/androiddevnotes">
            <TwitterLogoIcon className="h-6 w-6 text-zinc-400 hover:text-primary" />
          </Link>
          <Link href="https://www.youtube.com/c/AwesomeDevNotes">
            <VideoIcon className="h-6 w-6 text-zinc-400 hover:text-primary" />
          </Link>
        </div>
        <div className="flex-1 text-zinc-400 lg:text-right">
          Run the code
        </div>
      </div>
    </footer>
  );
}
