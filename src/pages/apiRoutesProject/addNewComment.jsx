import Button from "@/components/Button";
import { useRef } from "react";

export default function AddNewComment() {

  const emailRef = useRef();
  const nameRef = useRef();
  const textRef = useRef();
  const handelFormData = (e) => {
    e.preventDefault();
    const enteredEmail = emailRef?.current?.value;
    const enteredName = nameRef?.current?.value;
    const enteredText = textRef?.current?.value;

    fetch("/api/comments/22", {
      method: "POST",
      body: JSON.stringify({ enteredEmail, enteredName, enteredText }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <div>
        <form
          onSubmit={handelFormData}
          className="lg:w-[500px] w-[100%] p-5 border rounded-md border-gray-300 shadow"
        >
          <h1 className="font-bold my-5"> AddNewComment </h1>

          <div className="mb-5">
            <input
              ref={emailRef}
              className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              placeholder="Type Your Email..."
            />
          </div>
          <div className="mb-5">
            <input
              ref={nameRef}
              className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              placeholder="Type Your Email..."
            />
          </div>
          <div className="mb-5">
            <input
              ref={textRef}
              className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              placeholder="Type Your Email..."
            />
          </div>
          <Button onClick={handelFormData} type={"submit"}>
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
