import React from 'react';
import Greeter from '../views/Greeter';
import { PageLink, TabLink } from '../models';
import { jsOrange, midBlue, green, pink } from '../theme/colors';

import staticData from './json/static.json';
import contactData from './json/contact.json';
import pkg from '../../package.json';


export const pages: PageLink[] = [
  {
    name: 'Home',
    url: '/',
    icon: 'home',
    isInternal: true,
    comp: () => (
      <Greeter
        staticData={staticData}
        contactData={contactData}
        repoUrl={pkg.repository.url}
      />
    ),
  },
  
];

export const tabs: TabLink[] = [
  {
    name: 'skills.kt',
    url: '/skills',
    icon: ['fab', 'android'],
    color: green,
    mdFileName: 'skills',
  },
  {
    name: '.educationrc',
    url: '/education',
    icon: 'university',
    color: jsOrange,
    mdFileName: 'education',
  },
  {
    name: 'projects.config',
    url: '/projects',
    icon: 'sliders-h',
    color: green,
    mdFileName: 'projects',
  },
  {
    name: 'experience.yml',
    url: '/experience',
    icon: ['fab', 'docker'],
    color: midBlue,
    mdFileName: 'experience',
  },
];
