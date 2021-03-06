import sidebarStyle from "./Sidebar.module.css";
import {NavLink} from "react-router-dom";
import MayFriends from "./MyFriends";
const Sidebar = (props) => {
    // debugger
    const friends = props.dialogs.map( item => <MayFriends userImage={item.userImage} name={item.name}/>)
    return (
        <div className={sidebarStyle.sidebar_block}>
            <nav className={sidebarStyle.sidebar}>
                <ul>
                    <li><NavLink className={sidebarStyle.item} activeClassName={sidebarStyle.active} to="/profile">Profile</NavLink></li>
                    <li><NavLink className={sidebarStyle.item} activeClassName={sidebarStyle.active} to="/dialogs">Messages</NavLink></li>
                    <li><NavLink className={sidebarStyle.item} activeClassName={sidebarStyle.active} to="/users">Users</NavLink></li>
                    <li><NavLink className={sidebarStyle.item} activeClassName={sidebarStyle.active} to="/news">News</NavLink></li>
                    <li><NavLink className={sidebarStyle.item} activeClassName={sidebarStyle.active} to="/music">Music</NavLink></li>
                </ul>
                <div><NavLink className={sidebarStyle.item} activeClassName={sidebarStyle.active} to="/setings">Settings</NavLink></div>
            </nav>
            <div className={sidebarStyle.friends_block}>
                <div className={sidebarStyle.str_friend}>Друзья</div>
                <div className={sidebarStyle.friends}>
                    {friends}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;