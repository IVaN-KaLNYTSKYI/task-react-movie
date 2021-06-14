import './Header.css'
import {Link} from "react-router-dom";
import UserInfo from "../user-info/UserInfo";

export default function Header() {
    return (
        <div className={"header-box"}>
            <div className={"header"}>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
                <UserInfo/>
            </div>

        </div>
    )
}