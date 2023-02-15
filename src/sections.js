import {
  AndroidAppsIcon,
  AndroidInsightsIcon,
  AndroidJetpackIcon,
  AndroidToolsIcon,
  AndroidTutorialsIcon
} from './icons';

const SECTIONS = [
  // Sources

  // - code

  {
    name: 'Apps',
    id: 'apps',
    icon: AndroidAppsIcon,
    section: 'code',
  },
  {
    name: 'Libraries',
    id: 'libraries',
    icon: AndroidToolsIcon,
    section: 'code',
  },
  {
    name: 'Tools',
    id: 'tools',
    icon: AndroidJetpackIcon,
    section: 'code',
  },

  // - learn
  {
    name: 'Tutorials',
    id: 'tutorials',
    icon: AndroidTutorialsIcon,
    section: 'learn',
  },
  {
    name: 'Insights',
    id: 'insights',
    icon: AndroidInsightsIcon,
    section: 'learn',
  },
];

const MULTI_SECTIONS = [
  [
    {
      name: 'Code',
      section: 'code',
      description:
        'Code and tools to build your app',
    },
    {
      name: 'Learn',
      section: 'learn',
      description: 'Knowledge base',
    },
  ],
];

export { SECTIONS, MULTI_SECTIONS };
