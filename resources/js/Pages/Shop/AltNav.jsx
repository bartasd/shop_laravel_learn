import style from "../../../css/AltNav.module.css";

export default function AltNav() {
    return (
        <div className={style.container}>
            <div className={style.links}>
                <div>
                    <h1>Legal</h1>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                    <p>Shipping Policy</p>
                    <p>Refund Policy</p>
                </div>
                <div>
                    <h1>More Info</h1>
                    <p>FAQs</p>
                    <p>Contact Us</p>
                </div>
                <div>
                    <h1>Follow US</h1>
                    <p>FB ICON</p>
                    <p>INSTA ICON</p>
                </div>
                <div>LOGO</div>
            </div>
            <p>Contact: info@blabla.com</p>
            <p>© 2024, BlaBla</p>
        </div>
    );
}
