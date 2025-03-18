// import fs from "fs/promises";
// import path from "path";

export default function staticSropsInfo(props) {
  const { products } = props;

  return (
    <div className="p-[50px]">
      {products?.map((el, index) => (
        <div
          className="border p-1 bg-gray-200 m-2 flex gap-5 rounded-md"
          key={index}
        >
          <div className="w-[100%]">name : {el?.name}</div>
        </div>
      ))}
    </div>
  );
}

// This Code Of Static Props Not Appear In ClientSide --- Only Working In ServerSide
// Note ------------  Module File System Only Using In Server Side Not Client Side
export async function getStaticProps(context) {
  // Working With Static Data In Props
  //------------------------------------------------------Special Options
  // const data = [{ name: "hhhhhh" }];
  // Not Found Page  404 ... If No Data
  // if (!data) {
  //   return {
  //     redirect: { destination: "" },
  //   };
  // }
  // // Not Found Page  404 ... If Data === 0
  // if (data?.length === 0) {
  //   return {
  //     notFound: true,
  //   };
  // }
  //-------------------------------------------------------Special Options

  return {
    props: { products: [{ name: "Name 1" }, { name: "Name 2" }] },
    revalidate: 10,
  };
}

// -------------------------------------------------------Get Data With Fs File
// export async function getStaticProps() {
//   Working With Static Data IN File System
//   const filePath = path.join(process.cwd(), "data", "products.json");
//   const jsonData = await fs.readFile(filePath);
//   const data = JSON.parse(jsonData);
//   return {
//     props: { products: data },
//   };
// }
