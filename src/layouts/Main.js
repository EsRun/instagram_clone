import { SideNav, Contents } from "../components";

const Main = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <SideNav></SideNav>
        <Contents></Contents>
      </div>
    </>
  );
};

export default Main;
