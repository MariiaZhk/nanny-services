import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import sprite from "../../../assets/sprite.svg";

import useAuth from "../../../utils/hooks/useAuth";

import {
  Container,
  Menu,
  MenuContent,
  Overlay,
  StyledLinkBurger,
  StyledNavigationBurger,
} from "./BurgerMenu.styled";

import { BtnClose, ModalSvg } from "../../Modal/Modal.styled";
import AuthUserBlock from "../AuthBlock/AuthBlock";

const BurgerMenu = () => {
  const { isAuth } = useAuth();
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <Container>
      <RxHamburgerMenu color="#FBFBFB" size={34} onClick={toggleMenu} />
      {isOpenMenu && <Overlay onClick={toggleMenu} />}
      <Menu $isOpen={isOpenMenu}>
        <BtnClose
          type="button"
          onClick={toggleMenu}
          size="30px"
          width="50px"
          height="50px"
        >
          <ModalSvg size="40px" color="var(--white)">
            <use href={`${sprite}#icon-x`} />
          </ModalSvg>
        </BtnClose>
        <MenuContent>
          {" "}
          <AuthUserBlock />
          <StyledNavigationBurger>
            <StyledLinkBurger to="/" end>
              Home
            </StyledLinkBurger>
            <StyledLinkBurger to="nannies">Nannies</StyledLinkBurger>
            {isAuth && (
              <StyledLinkBurger to="favorites">Favorites</StyledLinkBurger>
            )}
          </StyledNavigationBurger>
        </MenuContent>
      </Menu>
    </Container>
  );
};

export default BurgerMenu;
