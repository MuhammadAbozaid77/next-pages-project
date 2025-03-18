import Button from "@/components/Button";
import { useRef } from "react";

export default function ApiRoutesProject() {
  const emailRef = useRef();
  const handelFormData = (e) => {
    e.preventDefault();
    const enteredEmail = emailRef?.current?.value;

    fetch("/api/newsLetter", {
      method: "POST",
      body: JSON.stringify({ enteredEmail }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="p-5">
      <h1>apiRoutesProject</h1>
      <div>
        <form
          onSubmit={handelFormData}
          className="lg:w-[500px] w-[100%] p-5 border border-gray-300 shadow"
        >
          <div className="mb-5">
            <input
              ref={emailRef}
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
