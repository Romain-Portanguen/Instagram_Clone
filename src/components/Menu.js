import "../styles/menu.scss";
import {ReactComponent as Home} from "../images/home.svg";
import {ReactComponent as Notifications} from "../images/notifications.svg";
import {ReactComponent as Inbox} from "../images/inbox.svg";
import image from "../images/profile.jpg";
import ProfileIcon from "./ProfileIcon";

function Menu() {
  return (

    <div className="menu">
    <Home className="icon" />
    <Notifications className="icon" />
    <Inbox className="icon" />
    <ProfileIcon iconSize="small" image={image} storyBorder={true} />
    </div>
  );
}

export default Menu;