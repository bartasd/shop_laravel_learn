import style from "../../../css/Nav.module.css";

export default function Nav() {
    return (
        <div className={style.container}>
            <div>LOGO</div>
            <div>
                <a>HOME</a>
                <a>SHOP</a>
                <a>ABOUT</a>
                <i className="bi bi-search"></i>
                <i className="bi bi-person-lines-fill"></i>
                <i className="bi bi-cart">0</i>
            </div>
        </div>
    );
}
