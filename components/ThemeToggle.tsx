'use client';

import { useEffect, useState } from 'react';

const THEME_TTL = 60 * 60 * 1000; // 1 hour in milliseconds

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  const getSystemTheme = (): 'light' | 'dark' => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const applyTheme = (newTheme: 'light' | 'dark') => {
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  useEffect(() => {
    // Check if there's a valid saved preference (within TTL)
    const saved = localStorage.getItem('themePreference');
    if (saved) {
      try {
        const { theme: savedTheme, timestamp } = JSON.parse(saved);
        const now = Date.now();

        // If saved preference is still valid (within 1 hour)
        if (now - timestamp < THEME_TTL) {
          applyTheme(savedTheme);
        } else {
          // TTL expired, use system preference
          localStorage.removeItem('themePreference');
          applyTheme(getSystemTheme());
        }
      } catch {
        // Invalid saved data, use system preference
        localStorage.removeItem('themePreference');
        applyTheme(getSystemTheme());
      }
    } else {
      // No saved preference, use system
      applyTheme(getSystemTheme());
    }

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      // Only auto-switch if no valid manual preference exists
      const saved = localStorage.getItem('themePreference');
      if (!saved) {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';

    // Save preference with timestamp
    localStorage.setItem('themePreference', JSON.stringify({
      theme: newTheme,
      timestamp: Date.now()
    }));

    applyTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 px-3 py-1.5 text-xs border rounded transition-colors theme-toggle"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? '☀' : '☾'}
    </button>
  );
}
