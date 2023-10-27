import { ThemeProvider } from 'styled-components';
import P from 'prop-types';
import { theme } from './theme';
import { GlobalStyles } from './global';

export const StyledThemeProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
      <GlobalStyles />
    </ThemeProvider>
  );
};

StyledThemeProvider.propTypes = {
  children: P.node.isRequired,
};
