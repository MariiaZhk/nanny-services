import { Outlet } from "react-router-dom";

import { Suspense } from "react";
import { Header } from "../Header/Header";
import Modal from "../Modal/Modal";
import { useSelector } from "react-redux";
import { selectIsModalOpen } from "../../redux/selectors";

import { Main } from "./Layout.styled";
import Container from "../Container/Container";

export const Layout = () => {
  const isModalOpen = useSelector(selectIsModalOpen);
  return (
    <Container>
      <Header />
      <Main>
        {isModalOpen && <Modal />}
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Main>
    </Container>
  );
};
