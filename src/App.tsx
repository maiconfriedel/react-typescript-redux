import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { toggleLoggedUser } from "./store/actions/user.actions";

function App() {
  const selectUser = (state: RootState) => state.user;
  const userState = useSelector(selectUser);

  const dispatch = useDispatch();

  function handleChangeUser() {
    dispatch(
      toggleLoggedUser({
        loggedUserAccessToken: new Date().toString(),
        loggedUserName: "Rian",
      })
    );
  }

  return (
    <div>
      <h1>{userState?.loggedUserName}</h1>
      <h1>{userState?.loggedUserAccessToken}</h1>
      <button onClick={() => handleChangeUser()}>Trocar Usuário</button>
    </div>
  );
}

export default App;
