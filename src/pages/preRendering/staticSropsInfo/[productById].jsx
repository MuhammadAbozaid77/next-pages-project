export default function ProductById(props) {
  const { product } = props;

  return (
    <div className="text-gray-800 p-5 text-[20px]">
      <h1>ProductById : {product} </h1>
    </div>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const id = params.productById;

  return { props: { product: id } };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { productById: "1" } },
      { params: { productById: "2" } },
      { params: { productById: "3" } },
    ],
    fallback: false,
  };
}
