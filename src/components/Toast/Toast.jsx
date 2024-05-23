import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const StyledToastContainer = () => {
  const customToastContent = () => <div style={{ color: "var(--red)" }} />;

  return (
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      closeOnClick
      pauseOnFocusLoss={true}
      draggable={true}
      pauseOnHover={true}
      toastContent={customToastContent}
      toastStyle={{
        background: "var(--white)",
        color: "var(--red)",
        width: "400px",
        fontSize: "24px",
        fontWeight: "600",
        borderRadius: "30px",
        border: "4px solid var(--red)",
      }}
      progressStyle={{ background: "var(--red)" }}
      icon={false}
      showOnlyTheLastOne={true}
    />
  );
};
export default StyledToastContainer;
