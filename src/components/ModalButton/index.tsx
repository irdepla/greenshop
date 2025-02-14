import { useState, useEffect } from "react";
import MainButton from "../MainButton";

interface ModalButtonProps {
  buttonText?: string;
  className?: string;
}

const ModalButton: React.FC<ModalButtonProps> = ({ buttonText,className }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="relative">
      <MainButton className={className} text={buttonText} onClick={() => setOpen(true)} />

      {open && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold mb-4">Modal Title</h2>
            <p>This is a reusable modal.</p>

            <MainButton
              text="Close"
              onClick={() => setOpen(false)}
              className="mt-4 bg-red-500"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalButton;
