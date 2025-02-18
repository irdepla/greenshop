import { useState } from "react";
import MainButton from "../MainButton";
import { ToastContainer } from "react-toastify";

interface ModalButtonProps {
  buttonText?: string;
  className?: string;
  icon?: string;
  children?: React.ReactNode;
  onSubmit?: (e: React.FormEvent) => void;
}

const ModalButton: React.FC<ModalButtonProps> = ({ buttonText, className, icon, children, onSubmit }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ToastContainer />
      <div className="relative">
        <MainButton icon={icon} className={className} text={buttonText} onClick={() => setOpen(true)} />

        {open && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
            onClick={() => setOpen(false)}
          >
            <div className="bg-white overflow-y-auto max-h-[80vh] p-6 rounded-lg shadow-lg relative" onClick={(e) => e.stopPropagation()}>
              <form onSubmit={onSubmit} className="flex flex-col gap-4">
                {children} 
                {onSubmit && <button className="border border-black" type="submit">Submit</button>}
              </form>

              <MainButton text="Close" onClick={() => setOpen(false)} className="mt-4 bg-red-500" />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ModalButton;
