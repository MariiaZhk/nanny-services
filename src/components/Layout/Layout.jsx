import { Outlet } from "react-router-dom";

import { Suspense } from "react";
import { Header } from "../Header/Header";
import Modal from "../Modal/Modal";
import { useSelector } from "react-redux";
import { selectIsModalOpen } from "../../redux/selectors";

export const Layout = () => {
  const isModalOpen = useSelector(selectIsModalOpen);
  return (
    <>
      <Header />
      <main>
        {isModalOpen && <Modal />}
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
