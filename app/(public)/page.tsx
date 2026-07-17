import { getMe } from "@/service/getMe";

const HomePage = async () => {
  const user = await getMe();
  console.log(user);
  return <div>Home Page Public</div>;
};

export default HomePage;
