import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import { useColorMode } from '@docusaurus/theme-common';

import Head from '@docusaurus/Head';
import {
  AndroidAppsIcon,
  AndroidInsightsIcon,
  AndroidJetpackIcon,
  AndroidToolsIcon,
  AndroidTutorialsIcon
} from '../../icons';

function TopicLink({ href, Icon, label, disabled = false }) {
  return (<Link
    className={clsx('flex items-center gap-2 rounded-md p-2 text-current transition hover:bg-secondary-700 hover:text-black hover:no-underline dark:hover:text-white', disabled && 'cursor-default')}
    href={!disabled ? href : undefined}
  >
    <Icon className='h-8 w-8' />
    {label}
  </Link>);
}

export default function TopicsSection() {
  const { colorMode } = useColorMode();
  const [visibleSection, setVisibleSection] = useState('Web');

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        const section = entry.target.getAttribute('data-section');

        if (entry.isIntersecting) {
          entry.target.classList.add('intersected');
          setVisibleSection(section);
        }
      }
    }, { rootMargin: '-50% 0% -50% 0%' });

    const elements = document.querySelectorAll('.topic-section');
    for (const el of elements) {
      observer.observe(el);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  function Pill({ section }) {
    return (<div
      className={clsx('flex-1 cursor-pointer rounded-md py-2 px-6 text-center font-jakarta text-sm font-semibold', visibleSection === section ? 'bg-primary text-white' : 'text-black dark:text-white')}
      onClick={() => {
        document
          .getElementById(section)
          ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }}
    >
      {`${section[0].toUpperCase()}${section.substring(1)}`}
    </div>);
  }

  return (<section className='bg-secondary-1000 py-20 px-4' id='start-building'>
    <div className='mx-auto max-w-7xl'>
      <div className='common-badge'>Content</div>

      <div
        className='sticky top-14 z-20 -mt-4 flex flex-col items-center gap-6 bg-secondary-1000 py-6 lg:flex-row lg:justify-between lg:py-0'>
        <h2 className='my-0 font-jakarta lg:text-3xl'>
          Start with Sources
        </h2>

        <div
          className='mx-auto flex h-20 w-full flex-1 items-center justify-center self-start lg:w-auto lg:justify-end'>
          <div className='inline-flex items-center rounded-lg bg-zinc-100 p-2 text-sm dark:bg-zinc-800 lg:text-base'>
            <Pill section='sources' />
          </div>
        </div>
      </div>

      <div
        className='topic-section my-16 flex flex-col rounded-3xl bg-secondary-900 lg:flex-row'
        data-section='sources'
        id='sources'
      >
        <div className='flex flex-[2] flex-col justify-center p-6 text-center lg:pl-16 lg:text-left'>
          <h3 className='text-4xl font-semibold'>Sources</h3>
          <p className='text-sm leading-relaxed text-text-400 lg:max-w-sm'>
            This section focuses on the Android app developer&apos;s tech stack.
          </p>
          {/* <Link className="text-sm">Learn More &rarr;</Link> */}
        </div>
        <div className='flex-1 bg-secondary-800 p-6 px-8 lg:rounded-l-3xl'>
          <h4>Code</h4>
          <p className='text-sm leading-relaxed text-text-400'>
            Code and tools to build your app.
          </p>
          <div>
            <ul className='mb-0 flex list-none flex-col gap-2 pl-0'>
              <li>
                <TopicLink href='apps'
                           Icon={() => <AndroidAppsIcon />}

                           label='Apps' />
              </li>
              <li>
                <TopicLink
                  href='libraries'
                  Icon={() => <AndroidJetpackIcon />}
                  label='Libraries'
                />
              </li>
              <li>
                <TopicLink
                  href='tools'
                  Icon={() => <AndroidToolsIcon />}
                  label='Tools'
                />
              </li>
            </ul>
          </div>
        </div>
        <div className='flex-1 rounded-b-3xl bg-secondary-800 p-6 px-8 lg:rounded-r-3xl lg:rounded-bl-none'>
          <h4>Learn</h4>
          <p className='text-sm leading-relaxed text-text-400'>
            Knowledge base
          </p>
          <ul className='mb-0 flex list-none flex-col gap-2 pl-0'>
            <li>
              <TopicLink href='tutorials'
                         Icon={() => <AndroidTutorialsIcon />}
                         label='Tutorials' />
            </li>
            <li>
              <TopicLink
                href='insights'
                Icon={() => <AndroidInsightsIcon />}
                label='Insights'
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className='text-center text-text-400'>
      <p>
        Don&apos;t see your tech stack here?{' '}
        <Link href='https://github.com/androiddevnotes'>Contact Us</Link>
      </p>
    </div>
  </section>);
}
