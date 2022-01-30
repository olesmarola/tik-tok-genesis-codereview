import { useEffect, useState } from 'react';

const useTheme = () => {
  const darkThemeKey = process.env.DARK_THEME_KEY || 'isDarkThemeEnabled';
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  useEffect(() => {
    setIsDarkTheme(JSON.parse(localStorage.getItem(darkThemeKey) || 'false') as boolean);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkTheme);
    localStorage.setItem(darkThemeKey, String(isDarkTheme));
  }, [isDarkTheme]);

  return { isDarkTheme, setIsDarkTheme };
};

export default useTheme;
