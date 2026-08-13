import { Link } from '@tanstack/react-router';
import { ThemeToggle } from './ThemeToggle';
import { Menubar } from '@mantine/core';

export default function Header() {
  return (
    <header className='sticky top-0 z-50 border-b px-4 backdrop-blur-lg'>
      <nav className='page-wrap flex flex-wrap items-center gap-x-3 gap-y-2 py-3 sm:py-4'>
        <h2 className='m-0 flex-shrink-0 text-base font-semibold tracking-tight'>
          <Link
            to='/'
            className=''
          >
            Qwiz
          </Link>
        </h2>

        <Menubar>
          <Menubar.Menu>
            <Menubar.Target>Создать</Menubar.Target>
          </Menubar.Menu>
        </Menubar>

        <div className='ml-auto flex items-center gap-1.5 sm:gap-2'>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
