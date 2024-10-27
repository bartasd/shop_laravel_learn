import style from "../../../css/Introduce.module.css";

export default function Introduce() {
    return (
        <div className={style.container}>
            <div className={style.imgContainer}>
                <div className={style.img}>a</div>
                <div className={style.img}>a</div>
                <div className={style.img}>a</div>
                <div className={style.img}>a</div>
            </div>
            <div className={style.mailing}>
                <h1>Get informed</h1>
                <label>
                    Your eMail: <input name="cust_email" />
                </label>
            </div>
        </div>
    );
}
