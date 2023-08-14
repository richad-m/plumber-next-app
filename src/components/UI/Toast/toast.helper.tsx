import { toast } from "react-toastify";
import { Toast } from "./Toast";

export const showToastSuccess = (message: string): void => {
  toast.success(() => <Toast message={message} />);
};
export const showToastError = (message: string): void => {
  toast.success(() => <Toast message={message} />);
};
