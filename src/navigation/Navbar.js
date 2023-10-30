import { MenuItems } from "./MenuItems";
export const NavBar = () => {
    return (
        <nav className="navbar">
            <ul>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                                {item.Title}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}