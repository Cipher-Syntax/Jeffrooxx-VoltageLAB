import { useContext } from 'react';
import ThemeContextValue from './themeContextValue';

export const useTheme = () => useContext(ThemeContextValue);
