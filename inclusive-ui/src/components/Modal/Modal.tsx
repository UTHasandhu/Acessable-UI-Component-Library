import { type ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import Button from "../Button/Button";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
};

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative bg-white rounded-2xl shadow-lg max-w-lg w-full p-6 z-10">
        <h2 id="modal-title" className="text-lg font-semibold mb-4">
          {title}
        </h2>
        <div className="mb-6">{children}</div>
        <div className="flex justify-end">
          <Button label="Close" onClick={onClose} variant="secondary" />
        </div>
      </div>
    </div>,
    document.body
  );
}
