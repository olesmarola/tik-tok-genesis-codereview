import { FC } from 'react';
import tw from 'twin.macro';
import Switch from 'react-switch';

import useTheme from '../helpers/hooks/useTheme';

const ThemeContainer = tw.div``;
const ThemeSwitcher = tw.header`px-4 h-10 fixed top-0 left-0 right-0 bg-blue-50 dark:bg-gray-700 z-[1] flex items-center gap-2`;
const ThemeSwitcherLabel = tw.label`text-xl cursor-pointer`;
const SwitcherIcon = tw.div`text-xl leading-none w-[28px] h-[28px] flex items-center justify-center`;

const ThemeProvider: FC = ({ children }) => {
  const { isDarkTheme, setIsDarkTheme } = useTheme();

  return (
    <ThemeContainer>
      <ThemeSwitcher>
        <ThemeSwitcherLabel htmlFor="theme-switcher">Switch Theme: </ThemeSwitcherLabel>
        <Switch
          id="theme-switcher"
          checked={isDarkTheme}
          onChange={setIsDarkTheme}
          checkedIcon={<SwitcherIcon>{'🌚'}</SwitcherIcon>}
          uncheckedIcon={<SwitcherIcon>{'🌞'}</SwitcherIcon>}
          offColor="#60A5FA"
          onColor="#111827"
        />
      </ThemeSwitcher>
      {children}
    </ThemeContainer>
  );
};

export default ThemeProvider;
