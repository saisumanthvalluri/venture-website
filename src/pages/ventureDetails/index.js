import { useEffect, useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import RemoveIcon from "@mui/icons-material/Remove";
import { facilities, imageTabs } from "../../appConstants";
import Header from "../../components/Header";
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
            <img src="./bg.jpg" alt="bg" className="bg-image" />
            <div className="details-box">
                <img src="./sa-logo.jpg" alt="bg" className="logo" />
                <h2>
                    SUKRUTHI AVATHIKA <span>by Subhagruha</span>
                </h2>

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
                        {facilities.map((item) => (
                            <li key={item.id}>
                                {item.availability ? (
                                    <DoneIcon sx={{ color: "green" }} />
                                ) : (
                                    <RemoveIcon sx={{ color: "gray" }} />
                                )}
                                <p style={{ color: !item.availability ? "gray" : "" }}>{item.text}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="layout-box">
                    <h3>Layout</h3>
                    <img src="./layout.jpg" alt="bg" />
                </div>
            </div>
        </div>
    );
};

export default VentureDetails;
