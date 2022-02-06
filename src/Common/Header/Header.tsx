import { NAVIGATION } from '../contants';
import { CustomNavLink, HeaderWrapper } from './styles';


const Header = () => {
    return <HeaderWrapper>
        {NAVIGATION.map(({address, title}) => {
            return (
                <CustomNavLink key={address + title} to={address}>
                    {title}
                </CustomNavLink>
            );
        })}
    </HeaderWrapper>;
};
export default Header;