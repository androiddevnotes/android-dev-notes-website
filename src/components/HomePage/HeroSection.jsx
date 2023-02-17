import React from 'react';
import Link from '@docusaurus/Link';
import { useColorMode } from '@docusaurus/theme-common';
import Head from '@docusaurus/Head';

export default function HeroSection() {
  const { colorMode } = useColorMode();

  return (
    <section className="noise-bg no-underline-links px-4 pt-16 lg:py-0">
      <Head>
        <link rel="prefetch" href="https://storage.androiddevnotes.com/api/raw/?path=/assets/1/12x2.png" />
        <link rel="prefetch" href="https://storage.androiddevnotes.com/api/raw/?path=/assets/1/12x2.png" />
      </Head>
      <div className="mx-auto flex max-w-7xl flex-col items-center lg:h-[540px] lg:flex-row">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="mb-6 font-jakarta text-4xl font-bold lg:text-6xl">
            Android Dev Notes
          </h1>
          <p className="text-sm text-text-400 lg:max-w-lg lg:text-base">
            Explore the Android development resources and notes. Contribute to it and make it better.
          </p>
          <div className="mt-8 flex flex-col gap-4 lg:flex-row">
            <Link
              href="/apps"
              className="rounded-sm bg-primary px-12 py-2.5 text-center font-semibold text-white hover:text-white"
            >
              Explore Android
            </Link>
            <Link
              href="https://github.com/androiddevnotes/android-dev-notes-website"
              className="rounded-sm border border-solid border-primary bg-primary/10 px-12 py-2.5 text-center font-semibold text-primary hover:text-primary dark:border-primary-100 dark:text-primary-100"
            >
              Contributing Guide
            </Link>
          </div>
        </div>
        <div className="flex-1 xl:flex-none">
          <img
            src="https://storage.androiddevnotes.com/api/raw/?path=/assets/1/12x2.png"
            alt="Android Dev Notes Hero"
            className="mt-8 lg:mt-0 lg:ml-16 lg:mr-8 sm:max-w-xs lg:max-w-540px"
          />
        </div>
      </div>
    </section>
  );
}
