import * as S from './styles';
import P from 'prop-types';

export const App = ({ children }) => {
  return <S.Container>{children}</S.Container>;
};

App.propTypes = {
  children: P.node.isRequired,
};
