import { useDispatch } from "react-redux";
import { startLoginWithEmailAndPassword } from "./store/auth";

export const CuatroPatitas = () => {

    const dispatch = useDispatch();

    const onlogin = () => {
        console.log('onlogin');
        dispatch(startLoginWithEmailAndPassword())

    }

  return (
    <button onClick={onlogin}>
        Cuatro Patitas app
    </button>
  )
}
