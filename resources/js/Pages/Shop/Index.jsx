import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import Banner from "./Banner";
import Nav from "./Nav";
import Hero from "./Hero";

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
                <div className={"col"}>SLIDER</div>
            </div>
            <div className={"row"}>
                <div className={"col"}>STORY1</div>
            </div>
            <div className={"row"}>
                <div className={"col"}>STORY2</div>
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
