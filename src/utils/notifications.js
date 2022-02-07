import { toast } from "react-toastify";

const options = {
  position: "bottom-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
  style: { textAlign: "center" },
};

export const displayError = (message) => {
  toast.error(message, options);
};

export const displaySuccess = (message) => {
  toast.success(message, options);
};
