import { useDispatch } from "react-redux";
import sprite from "../../../assets/sprite.svg";

import {
  changeIsModalOpen,
  changeLoginModal,
  changeLogoutModal,
  changeRegistrationModal,
} from "../../../redux/modalsSlice";
import {
  AuthBtn,
  AuthBtnWrap,
  IconWrap,
  StyledAuthBlock,
  UserBlock,
  UserInfo,
  UserSvg,
} from "./AuthBlock.styled";
import useAuth from "../../../utils/hooks/useAuth";

const AuthUserBlock = () => {
  const { name, isAuth } = useAuth();

  const dispatch = useDispatch();

  const onRegistrationClick = () => {
    dispatch(changeIsModalOpen(true));
    dispatch(changeRegistrationModal(true));
  };

  const onLoginClick = () => {
    dispatch(changeIsModalOpen(true));
    dispatch(changeLoginModal(true));
  };

  const onLogoutClick = () => {
    dispatch(changeIsModalOpen(true));
    dispatch(changeLogoutModal(true));
  };

  return (
    <StyledAuthBlock>
      {!isAuth ? (
        <AuthBtnWrap>
          <AuthBtn type="button" onClick={onLoginClick}>
            Log In
          </AuthBtn>
          <AuthBtn
            type="button"
            onClick={onRegistrationClick}
            $backgroundColor="var(--red)"
          >
            Registration
          </AuthBtn>
        </AuthBtnWrap>
      ) : (
        <UserBlock>
          <UserInfo>
            <IconWrap>
              <UserSvg>
                <use href={`${sprite}#icon-mdi_user`} />
              </UserSvg>
            </IconWrap>
            <span>{name}</span>
          </UserInfo>
          <AuthBtn type="button" onClick={onLogoutClick}>
            Log out
          </AuthBtn>
        </UserBlock>
      )}
    </StyledAuthBlock>
  );
};

export default AuthUserBlock;
