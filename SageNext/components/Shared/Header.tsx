import styled from 'styled-components';

const HeaderWrapper = styled.nav`
  padding: 24px;
`;

const AppLogo = styled.h1`
  &:hover{
  cursor: pointer;
  }
`;

const Header = () => (
    <HeaderWrapper>
        <div>
            <AppLogo
                onClick={() => {
                    document.location.href = '/'
                }}>ListApp.Co</AppLogo>
        </div>
    </HeaderWrapper>
);

export default Header;

