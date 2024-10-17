import style from "../../../css/Card.module.css";

export default function Card() {
    return (
        <div className={style.container}>
            <div className={style.photo}>PHOTO</div>
            <div className={style.options}>
                <p className={style.productName}> SOME PRODUCT NAME</p>
                <div className={style.quantifier}>
                    <p className={style.quantity}>Quantity</p>
                    <p className={style.btn}>-</p>
                    <p>2</p>
                    <p className={style.btn}>+</p>
                </div>
                <p className={style.addToCart}>ADD TO CART - xx.xx $</p>
            </div>
        </div>
    );
}
