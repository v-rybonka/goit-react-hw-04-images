import { MagnifyingGlass } from 'react-loader-spinner';
import { WrapSpinner } from './Loader.styled';

export const Loader = () => {
  return (
    <WrapSpinner>
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#c0efff"
        color=" #750646ce"
      />
      ;
    </WrapSpinner>
  );
};
