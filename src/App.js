import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, login } from "./actions/index";

function App() {
  const counter = useSelector((state) => state.counter);
  const islogin = useSelector((state) => state.islogin);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Hello Redux</h1>
      <h3>カウンター:{counter}</h3>
      <button onClick={() => dispatch(increment(7))}>＋</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <h3>
        {islogin ? <p>ログインしました。</p> : <p>ログインしてください。</p>}
      </h3>
      <button onClick={() => dispatch(login())}>ログインボタン</button>
    </div>
  );
}

export default App;
