import { useState } from "react";
import { Link } from "react-router-dom";
import { topventures } from "../../appConstants";
import Header from "../../components/Header";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./index.css";

const Home = () => {
    const [approvedBy, setApprovedBy] = useState("DTPC");
    const handleSearch = (e) => {
        e.preventDefault();
        // console.log(e);
    };

    const handleChangeApprovedBy = (e) => {
        setApprovedBy(e.target.value);
    };

    return (
        <div className="home-bg">
            <Header />
            <img src="./bg.jpg" alt="bg" className="bg-image" />

            <div className="approved-div">
                <div className="find-property-box-bg">
                    <div className="find-property-box">
                        <h4>Find Your Property</h4>
                        <form onSubmit={(e) => handleSearch(e)}>
                            <div className="input-select-box">
                                <TextField
                                    size="small"
                                    id="outlined-basic"
                                    label="Venture Name/City/Village"
                                    variant="outlined"
                                    sx={{ width: "350px" }}
                                />
                                <FormControl sx={{ width: "150px" }}>
                                    <InputLabel id="demo-simple-select-label">Approved By</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={approvedBy}
                                        label="Approved By"
                                        size="small"
                                        onChange={(e) => handleChangeApprovedBy(e)}>
                                        <MenuItem value="DTPC">DTPC</MenuItem>
                                        <MenuItem value="UDS">UDS</MenuItem>
                                        <MenuItem value="CRDA">CRDA</MenuItem>
                                        <MenuItem value="RERA">RERA</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <button type="submit">Search</button>
                        </form>
                    </div>
                </div>
                <h4>Ventures Approved by</h4>
                <ul>
                    <li>
                        <p>DTCP</p>
                        <span>Approved</span>
                    </li>
                    <li>
                        <p>UDA</p>
                        <span>Approved</span>
                    </li>
                    <li>
                        <p>CRDA</p>
                        <span>Approved</span>
                    </li>
                    <li>
                        <p>RERA</p>
                        <span>Approved</span>
                    </li>
                </ul>
                <h4>Top Ventures</h4>
            </div>

            <div className="top-ventures">
                <ul>
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
    );
};

export default Home;
