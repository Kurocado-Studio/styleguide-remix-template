/**
 * Made with ❤️ and adobo by Kurocado Studio
 * Copyright (c) 2024. All Rights Reserved.
 *
 * Learn more about Kurocado Studio: {@link https://www.kurocado.studio}
 *
 * Explore our open-source projects: {@link https://github.com/kurocado-studio}
 */

/* eslint unicorn/filename-case: 0 */

/* eslint import/no-default-export: 0 */
import type { MetaFunction } from '@remix-run/node';
import React from 'react';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index(): React.ReactNode {
  return (
    <main>
      <div className='bg-white'>
        <div className='px-6 py-24 sm:px-6 sm:py-32 lg:px-8'>
          <div className='mx-auto max-w-2xl text-center'>
            <h1 className='text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl'>
              Kurocado Studio Remix starter template
            </h1>
            <p className='mx-auto mt-6 max-w-xl text-pretty text-lg/8 text-gray-600'>
              A structured approach to writing clean, scalable, and maintainable
              TypeScript code for modern web applications.
            </p>
            <div className='mt-10 flex items-center justify-center gap-x-6'>
              <a
                href='https://kurocado.youtrack.cloud/articles/STY-A-3/Overview'
                className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                Learn more
              </a>
              <a
                href='https://github.com/Kurocado-Studio/styleguide-remix-template'
                className='text-sm/6 font-semibold text-gray-900'
              >
                View on GitHub<span aria-hidden='true'>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
