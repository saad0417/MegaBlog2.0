import authService from "../../appwrite/auth";
import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";

function LogoutButton() {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authService
      .logout()
      .then(() => {
        dispatch(logout());
      })
      .catch((error) => {
        console.error("Logout failed:", error);
      });
  };

  return (
    <button
      type="button"
      className="rounded-lg px-4 py-2 text-sm font-medium text-stone-300 transition-colors duration-200 hover:bg-red-500/20 hover:text-red-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}

export default LogoutButton;
