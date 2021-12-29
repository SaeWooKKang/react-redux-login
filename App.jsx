import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "./reducers/userSlice";
import { logIn } from "./actions/userAction";

const App = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const onLogIn = () => {
    dispatch(
      logIn({
        id,
        pw,
      })
    );
  };
  const onLogout = () => {
    dispatch(logOut());
  };
  const onIdChange = (e) => {
    setId(e.target.value);
  };
  const onPwChange = (e) => {
    setPw(e.target.value);
  };
  return (
    <div>
      {user.isLoggingIn ? (
        <div>로그인중...</div>
      ) : !user.data ? (
        <form onSubmit={onLogIn}>
          <fieldset style={{ width: "200px" }}>
            <input
              type={"text"}
              value={id}
              onChange={onIdChange}
              placeholder="id"
            ></input>
            <input
              type={"password"}
              value={pw}
              onChange={onPwChange}
              placeholder="pw"
            ></input>
            <button>로그인</button>
          </fieldset>
        </form>
      ) : (
        <div style={{ display: "flex" }}>
          <div>{user.data.data}님 환영합니다! </div>
          <button type="button" onClick={onLogout}>
            로그아웃
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
