import { useRef } from "react";

export default function Home() {
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  const sbmitData = (e) => {
    e.preventDefault();
    const enteredEmail = emailInputRef?.current?.value;
    const enteredFeedback = emailInputRef?.current?.value;
    fetch("api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        enteredEmail,
        enteredFeedback,
      }),
    })
      .then((responce) => responce.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="p-5 text-gray-600">
      <form onSubmit={sbmitData} className="w-[500px]">
        <div className="flex flex-col mb-5">
          <label htmlFor="userEmail">Your Email Address</label>
          <input
            id="userEmail"
            className="border shadow-md p-2"
            type="email"
            ref={emailInputRef}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="userFeedBack">Your Email Address</label>
          <textarea
            id="userFeedBack"
            cols="30"
            rows="10"
            className="border shadow-md p-2"
            ref={feedbackInputRef}
          ></textarea>
        </div>

        <button
          className=" rounded w-[100px] p-2 bg-blue-500 text-white"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
