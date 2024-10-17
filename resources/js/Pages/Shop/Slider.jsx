import style from "../../../css/Slider.module.css";
import Card from "./Card";

export default function Slider() {
    return (
        <div className={style.container}>
            <h1>OUR PRECIOUS PRODUCTS</h1>
            <div className={style.products}>
                <i className={"bi bi-arrow-bar-left " + style.bi}></i>
                <Card />
                <Card />
                <Card />
                <i className={"bi bi-arrow-bar-right " + style.bi}></i>
            </div>
        </div>
    );
}
