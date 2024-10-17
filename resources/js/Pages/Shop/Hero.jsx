import style from "../../../css/Hero.module.css";

export default function Hero() {
    return (
        <div className={style.container}>
            <div className={style.shopnow}>
                <h1>SOME AWESOME PRODUCTS</h1>
                <p>SOME OWESOME TEXT ABOUT OWESOME PRODUCTS</p>
                <div className={style.button}>SHOP NOW</div>
            </div>
            <div className={style.image}>IMAGE</div>
        </div>
    );
}
