import { Fragment } from "react";
import Image from "next/image";
import pic from "./../../../public/logo2.png";
import Head from "next/head";

export default function OptimizingPage() {
  const data = [{}];
  let pageHeadData = (
    <Head>
      <title>OptimizingPage : Data</title>
      <meta name="description" content="Hello Next Js Optimizing" />
    </Head>
  );

  if (data?.length > 0) {
    return (
      <Fragment>
        {pageHeadData}
        <div className="p-5 text-gray-800 font-semibold">
          <h1>OptimizingPage : With Data</h1>
          <Image
            src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
            alt="OptimizingPage : With Data"
            width={250}
            height={150}
          />
        </div>
      </Fragment>
    );
  }

  pageHeadData = (
    <Head>
      <title> OptimizingPage : NOOOOO Data </title>
      <meta name="description" content="Hello Next Js Optimizing" />
    </Head>
  );

  return (
    <Fragment>
      {pageHeadData}
      <div className="p-5 text-gray-800 font-semibold">
        <h1> OptimizingPage : No Data </h1>
        <Image src={pic} alt="" />
      </div>
    </Fragment>
  );
}
