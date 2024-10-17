import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import Banner from "./Banner";
import Nav from "./Nav";
import Hero from "./Hero";
import Slider from "./Slider";
import Promo from "./Promo";

export default function Index() {
    return (
        <div className={"container"}>
            <div className={"row"}>
                <div className={"col"}>
                    <Banner />
                </div>
            </div>
            <div className={"row"}>
                <div className={"col"}>
                    <Nav />
                </div>
            </div>
            <div className={"row"}>
                <div className={"col"}>
                    <Hero />
                </div>
            </div>
            <div className={"row"}>
                <div className={"col"}>
                    <Slider />
                </div>
            </div>
            <div className={"row"}>
                <div className={"col"}>
                    <Promo first={true} />
                </div>
            </div>
            <div className={"row"}>
                <div className={"col"}>
                    <Promo inverted={true} />
                </div>
            </div>
            <div className={"row"}>
                <div className={"col"}>STORY3</div>
            </div>
            <div className={"row"}>
                <div className={"col"}>STORY4</div>
            </div>
            <div className={"row"}>
                <div className={"col"}>ALT NAVIGATION</div>
            </div>
        </div>
    );
}
