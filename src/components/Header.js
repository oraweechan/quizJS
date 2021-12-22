import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/utils";

function Header (props) {
    const navigate = useNavigate();

    const logout = async () => {
      await signOut(auth);
      navigate("/");
    };

    return(
        <>
        <Typography variant="h2" fontWeight="bold">
          Quiz JS
        </Typography>
        <div>
          <h4> User Logged In: </h4>
          {props.user ? props.displayName: null}

          <button href="/" onClick={logout}> Sign Out </button>
        </div>
        </>

    )
}

export default Header;