export default function ProfilePage(props) {
  const { username } = props;
  return <div className="p-[50px]">profile {username} </div>;
}

export async function getServerSideProps(context) {
  const { res, req, params } = context;
  return {
    props: {
      username: "Muhammd Abozaid",
    },
  };
}
