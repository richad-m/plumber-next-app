import { ToastContainer } from "./Toast.style";

export function Toast({ message }: { message: string }): JSX.Element {
  return (
    <ToastContainer>
      <p>{message}</p>
    </ToastContainer>
  );
}
