import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { RoutePath } from '../types';

interface RouterContextType {
  currentPath: RoutePath;
  navigate: (path: RoutePath, state?: unknown) => void;
}

const RouterContext = createContext<RouterContextType>({
  currentPath: '/',
  navigate: () => {},
});

const VALID_PATHS: RoutePath[] = ['/', '/about', '/rooms', '/contact'];

function normalizePath(path: string): RoutePath {
  const clean = path.replace(/\/$/, '') || '/';
  if (VALID_PATHS.includes(clean as RoutePath)) {
    return clean as RoutePath;
  }
  return '/';
}

export function RouterProvider({ children }: { children: ReactNode }) {
  const [currentPath, setCurrentPath] = useState<RoutePath>(() => {
    if (typeof window !== 'undefined') {
      return normalizePath(window.location.pathname);
    }
    return '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      const path = normalizePath(window.location.pathname);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: RoutePath) => {
    const target = normalizePath(path);
    if (target !== currentPath) {
      if (typeof window !== 'undefined') {
        window.history.pushState(null, '', target);
      }
      setCurrentPath(target);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
}

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: RoutePath;
  children: ReactNode;
  className?: string;
  activeClassName?: string;
}

export function Link({ to, children, className = '', activeClassName = '', onClick, ...rest }: LinkProps) {
  const { currentPath, navigate } = useRouter();
  const isActive = currentPath === to;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);
    if (!e.defaultPrevented && e.button === 0 && !e.metaKey && !e.ctrlKey && !e.altKey && !e.shiftKey) {
      e.preventDefault();
      navigate(to);
    }
  };

  return (
    <a
      href={to}
      onClick={handleClick}
      className={`${className} ${isActive ? activeClassName : ''}`}
      aria-current={isActive ? 'page' : undefined}
      {...rest}
    >
      {children}
    </a>
  );
}
