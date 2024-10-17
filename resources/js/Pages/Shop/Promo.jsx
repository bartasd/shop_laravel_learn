import style from "../../../css/Promo.module.css";

export default function Promo({ first, inverted }) {
    let modified = style.container;
    let infoModified = style.info;
    if (first) {
        modified += " " + style.first;
    }
    if (inverted) {
        modified += " " + style.inverted;
        infoModified += " " + style.infoInverted;
    }
    return (
        <div className={modified}>
            <div className={style.image}>SOME IMAGE</div>
            <div className={infoModified}>
                <h1>SAVE 10% ON YOUR SALE</h1>
                <p>SOME INFO ABOUT PRODUCT</p>
                <p>INCOURAGEMENT</p>
                <p className={style.button}>SHOP THE SALE</p>
            </div>
        </div>
    );
}
