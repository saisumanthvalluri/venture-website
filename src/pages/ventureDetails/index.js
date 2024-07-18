import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import DoneIcon from "@mui/icons-material/Done";
// import RemoveIcon from "@mui/icons-material/Remove";
import { FaRoad } from "react-icons/fa6";
import { facilities, imageTabs } from "../../appConstants";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./index.css";

const VentureDetails = () => {
    const [activeImgId, setActiveImgId] = useState(0);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    return (
        <div className="venture-details-bg">
            <Header />
            <img src="./new-bg.jpg" alt="bg" className="bg-image" />
            <div className="details-box">
                <img src="./LVR.png" alt="bg" className="logo" />
                <h2>
                    LVR GARDENS{" "}
                    <span>
                        by <Link to="/company-details">Sri Bhavya Constructions & Developers</Link>
                    </span>
                </h2>

                <p>
                    LVR Gardens Venture HighlightsCRDA Approved Gated CommunityMain Entrance Arch with SecurityCentrally
                    Monitored CCTV Cameras , 60ft Main Road with Dividers and Street Lights40 ft Internal Blacktop
                    RoadsOverhead Tank Solar Fenced Compound WallsNaming Board for Each and Every plotWater Tap
                    Connection for Individual PlotsChildren Play Area with Open SpaceElectric SupplyDrainage
                    SystemAvenue Plantation Luxurious Independent Houses..... Etc
                </p>

                <div className="image-view-box">
                    <img src={imageTabs[activeImgId].img} alt="bg" />
                    <div className="image-tabs">
                        {imageTabs.map((item) => (
                            <img
                                src={item.img}
                                alt="bg"
                                onClick={() => setActiveImgId(item.id)}
                                style={{
                                    opacity: activeImgId === item.id ? "0.7" : "1",
                                }}
                            />
                        ))}
                    </div>
                </div>
                <div className="facilities">
                    <h3>Facilities</h3>
                    <ul className="facilities-list">
                        {facilities.map((e) => {
                            const { icon } = e;
                            return (
                                <li key={e.id}>
                                    {/* {item.availability ? (
                                    <DoneIcon sx={{ color: "green" }} />
                                ) : (
                                    <RemoveIcon sx={{ color: "gray" }} />
                                )} */}
                                    <p>{e.text}</p>
                                    {icon}
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="highlights">
                    <h3>Location HighLights</h3>
                    <ul className="highlights-list">
                        <li>3 KM to School</li>
                        <li>1 KM to College</li>
                        <li>1 KM to Store</li>
                        <li>2 KM to Hospital</li>
                        <li>500 Mtrs to Public Transportation</li>
                        <li>750 mtrs (Vejendla Station ) to Railway Station</li>
                        <li>1 KM to Bus Stop</li>
                    </ul>
                </div>
                <div className="layout-box">
                    <h3>Layout</h3>
                    <img src="./new-layout.jpg" alt="bg" />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default VentureDetails;
