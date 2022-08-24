import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

// import { Container } from './styles';

export const Componente2: React.FC = () => {
  const selectUser = (state: RootState) => state.user;
  const userState = useSelector(selectUser);

  return (
    <div>
      <h1>Componente 2</h1>
      <h1>{userState?.loggedUserName}</h1>
      <h1>{userState?.loggedUserAccessToken}</h1>
    </div>
  );
};
