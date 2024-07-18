import { Link } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { topventures } from "../../appConstants";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./index.css";

const CompanyDetails = () => {
    return (
        <div className="comp-details-bg">
            <Header />
            <img src="./new-bg.jpg" alt="bg" className="bg-image" />
            <div className="details-box">
                <img src="./Realtor-logo.png" alt="bg" className="logo" />
                <h2>Sri Bhavya Constructions & Infra</h2>

                <p className="description">
                    Sri Bhavya Constructions Private Limited is a private limited company established in 2016. The
                    company is engaged in the construction of residential and commercial properties. The company is
                    engaged in the construction of residential and commercial properties. The company is engaged in the
                </p>
                <p className="description">
                    Sri Bhavya Constructions Private Limited is a private limited company established in 2016. The
                    company is engaged in the construction of residential and commercial properties. The company is
                    engaged in the construction of residential and commercial properties. The company is engaged in the
                </p>

                <div className="on-going-projects">
                    <h4>On Going Projects</h4>
                    <ul className="on-going-projects-list">
                        {topventures.map((item) => (
                            <Link to="/venture-details">
                                <li key={item.id}>
                                    <img src={item.img} alt={item.heading} />
                                    <FavoriteBorderIcon className="heart-icon" />
                                    <p className="heading">{item.heading}</p>
                                    <div className="address-box">
                                        <LocationOnIcon className="loc-icon" />
                                        <p>{item.address}</p>
                                    </div>
                                    <ul className="tags-list">
                                        {item.tags.map((tag) => (
                                            <li
                                                key={tag.id}
                                                style={{
                                                    backgroundColor: tag.bgColor,
                                                }}>
                                                {tag.text}
                                            </li>
                                        ))}
                                    </ul>
                                    <span className="price">
                                        <span>{item.price}</span>/month
                                    </span>
                                    <hr />
                                    <div className="counts">
                                        <div className="count-item">
                                            <p>Area</p>
                                            <span>{item.area}</span>
                                        </div>
                                        <div className="count-item">
                                            <p>Beds</p>
                                            <span>{item.beds}</span>
                                        </div>
                                        <div className="count-item">
                                            <p>Baths</p>
                                            <span>{item.baths}</span>
                                        </div>
                                        <div className="count-item">
                                            <p>Garages</p>
                                            <span>{item.garages}</span>
                                        </div>
                                    </div>
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CompanyDetails;
