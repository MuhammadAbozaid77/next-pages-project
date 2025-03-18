import React from "react";

export default function ProfileIdPage(props) {
  return (
    <div className="p-[50px]">
      <h1> ProfileIdPage : {props?.name} </h1>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { res, req, params } = context;
  const userId = params?.uid;

  return {
    props: {
      name: userId + "muhammad",
    },
  };
}
