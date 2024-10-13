import style from "../../../css/Banner.module.css";

export default function Banner() {
    return (
        <div className={style.container}>
            <a>SAVE ON PRODUCTS ... some other dynamic text</a>
            <div>
                <i className="bi bi-facebook"></i>
                <i className="bi bi-instagram"></i>
            </div>
        </div>
    );
}
