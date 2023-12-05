import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { auth } from "../firebase";

const Button = styled.button``;

export default function Layout() {
  const navigate = useNavigate();
  const onClickLogout = async () => {
    await auth.signOut();
    navigate("/login");
  };
  return (
    <>
      <h2>layout</h2>
      <Button onClick={onClickLogout}>Log out</Button>
      <Outlet />
    </>
  );
}
