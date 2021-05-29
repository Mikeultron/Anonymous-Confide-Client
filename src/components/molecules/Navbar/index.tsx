import GuestNavbar from "./GuestNavbar";
import LoggedInNavbar from "./LoggedInNavbar";

interface IProps {
  loggedIn?: boolean;
}

function Navbar({ loggedIn }: IProps) {
  return loggedIn ? <LoggedInNavbar /> : <GuestNavbar />;
}

export default Navbar;
