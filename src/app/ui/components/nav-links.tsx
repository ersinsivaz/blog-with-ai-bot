'use client';
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';

const links = [
  { name: 'Home', href: '/', icon: HomeIcon  },
  {
    name: 'Posts',
    href: '/blog/posts',
    icon: DocumentDuplicateIcon,
  },
  { name: 'About', href: '/blog/about', icon: UserGroupIcon},
  { name: 'Contact', href: '/blog/contact', icon: EnvelopeIcon },
];



export default function NavLinks() {
  const pathname = usePathname();
  return (
    <nav className="w-full flex flex-row items-center justify-center gap-4 bg-white shadow-md rounded-lg p-2">
      {links.map((link) => {
        const LinkIcon = link.icon;
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200',
              isActive
                ? 'bg-purple-100 text-purple-700 shadow'
                : 'bg-gray-50 text-gray-700 hover:bg-purple-50 hover:text-purple-700'
            )}
          >
            <LinkIcon className="w-5 h-5" />
            <span className="hidden sm:inline">{link.name}</span>
          </Link>
        );
      })}
    </nav>
  );
}