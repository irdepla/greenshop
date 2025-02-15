import { useState, useEffect, FormEvent, useRef } from "react";
import MainButton from "../MainButton";
import { Mutation, useMutation } from "@tanstack/react-query";
import { createReview } from "../../service/review.service";
import { toast, ToastContainer } from "react-toastify";
import { apiClient } from "../../config/api.config";
import { useParams } from "react-router";

interface ModalButtonProps {
  buttonText?: string;
  className?: string;
}

const ModalButton: React.FC<ModalButtonProps> = ({ buttonText, className }) => {
  const [open, setOpen] = useState(false);
  const { id } = useParams<{ id: string }>();

  const name = useRef<any>(null);
  const stars = useRef<any>(null);
  const comment = useRef<any>(null);

  //   const mutation = useMutation({
  //     mutationFn: createReview,
  //     onSuccess: () => {
  //         toast.success("Omadli qo'shildi")
  //     }
  // })

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    console.log("target is", e.currentTarget);
    const formData = {
      reviewerName: name.current.value,
      stars: parseInt(stars.current.value),
      comment: comment.current.value,
      productId: id,
    };
    console.log("id__", id, formData);

    try {
      const res = await apiClient.post(`/reviews`, formData);
      toast.success("The review has been successfully created.");
      setOpen(false);
    } catch (error: any) {
      console.log("error is ", error?.response?.data?.error);
      toast.error(error?.response?.data?.error.map((err: any) => err).join(",") || "Xatolik yuz berdi");
    }
    console.log("----", e.target);
  }

  return (
    <>
      <ToastContainer />
      <div className="relative">
        <MainButton
          className={className}
          text={buttonText}
          onClick={() => setOpen(true)}
        />

        {open && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
            onClick={() => setOpen(false)}
          >
            <div
              className="bg-white p-6 rounded-lg shadow-lg relative"
              onClick={(e) => e.stopPropagation()}
            >
              <form
                onSubmit={onSubmit}
                className="flex flex-col gap-4"
                action=""
              >
                <input ref={name} type="text" placeholder="Enter your name" />
                <input ref={stars} type="number" placeholder="Enter rating" />
                <input
                  ref={comment}
                  type="text"
                  placeholder="Type your comment here..."
                />
                <button type="submit">Submit</button>
              </form>

              <MainButton
                text="Close"
                onClick={() => setOpen(false)}
                className="mt-4 bg-red-500"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ModalButton;
