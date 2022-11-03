import PropTypes from 'prop-types';
import { BtnLoadMore, WrapBtn } from './Button.styled';

export const Button = ({ onLoadMore }) => {
  return (
    <WrapBtn>
      <BtnLoadMore type="button" onClick={onLoadMore}>
        Load more
      </BtnLoadMore>
    </WrapBtn>
  );
};
Button.propType = {
  onLoadMore: PropTypes.func.isRequired,
};
