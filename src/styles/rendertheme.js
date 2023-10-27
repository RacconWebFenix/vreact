import { render } from '@testing-library/react';
import { StyledThemeProvider } from './StyledThemeProvider';

export const renderTheme = (children) => {
  return render(<StyledThemeProvider>{children}</StyledThemeProvider>);
};
