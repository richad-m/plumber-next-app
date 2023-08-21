import { ReactNode } from "react";
import {
  CloseModalButton,
  ModalBodyContainer,
  ModalContainer,
  ModalFooterContainer,
  ModalHeader,
  PrimaryButton,
  TertiaryButton,
} from "./Modal.style";

export default function Modal({
  title,
  children,
  onClose,
  isOpen,
  primaryAction,
  goBack,
  primaryButtonText,
  disabled = false,
  breadCrumbs,
}: {
  primaryAction: (value?: any) => void;
  title: string;
  children: ReactNode;
  onClose: () => void;
  isOpen: boolean;
  goBack?: (value?: any) => void;
  primaryButtonText?: string;
  disabled?: boolean;
  breadCrumbs?: ReactNode;
}) {
  return (
    <>
      {isOpen ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <ModalContainer>
                <ModalHeader>
                  <div>
                    <p key={title} className="text-2xl">
                      {title}
                    </p>
                    {breadCrumbs}
                  </div>
                  <CloseModalButton onClick={onClose}>X</CloseModalButton>
                </ModalHeader>
                {children && (
                  <ModalBodyContainer
                    className="relative p-6 flex-auto"
                    key={title}
                  >
                    {children}
                  </ModalBodyContainer>
                )}
                {/*footer*/}
                <ModalFooterContainer>
                  {goBack && (
                    <TertiaryButton type="button" onClick={goBack}>
                      Précédent
                    </TertiaryButton>
                  )}
                  {primaryButtonText && (
                    <PrimaryButton
                      type="button"
                      onClick={primaryAction || onClose}
                      disabled={disabled}
                    >
                      {primaryButtonText}
                    </PrimaryButton>
                  )}
                </ModalFooterContainer>
              </ModalContainer>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
