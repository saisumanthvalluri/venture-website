import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import AppsIcon from "@mui/icons-material/Apps";
import WindowIcon from "@mui/icons-material/Window";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import HotelRoundedIcon from "@mui/icons-material/HotelRounded";
import BathtubRoundedIcon from "@mui/icons-material/BathtubRounded";
import WarehouseRoundedIcon from "@mui/icons-material/WarehouseRounded";
import HouseRoundedIcon from "@mui/icons-material/HouseRounded";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import StarIcon from "@mui/icons-material/Star";
import Select from "@mui/material/Select";
import Header from "../../components/Header";
import { gunturVentures } from "../../appConstants";
import "./index.css";
import { useState } from "react";

const VentureInGuntur = () => {
    const [sortBy, setSortBy] = useState("sort by Price");

    const handleChangeSortBy = (e) => {
        setSortBy(e.target.value);
    };

    return (
        <div className="gunt-ventures-bg">
            <Header />
            <img src="./bg.jpg" alt="bg" className="bg-image" />
            <div className="gunt-ventures-box">
                <h5>Ventures in Guntur</h5>
                <div className="sort-box">
                    <FormControl sx={{ width: "150px" }}>
                        <InputLabel id="demo-simple-select-label">Approved By</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={sortBy}
                            label="Approved By"
                            size="small"
                            onChange={(e) => handleChangeSortBy(e)}>
                            <MenuItem value="sort by Price">sort by: Price</MenuItem>
                            <MenuItem value="sort by Size">sort by: Size</MenuItem>
                        </Select>
                    </FormControl>

                    <div className="grid-box">
                        <AppsIcon color="primary" className="grid-icon" />
                        <WindowIcon color="primary" className="grid-icon" />
                        <ViewHeadlineIcon color="primary" className="grid-icon" />
                    </div>
                </div>
                <ul>
                    {gunturVentures.map((item) => (
                        <li key={item.id}>
                            <div className="item-img-box">
                                <span
                                    style={{
                                        backgroundColor: item.tagBgColor,
                                    }}>
                                    {item.tagText}
                                </span>
                                <StarIcon className="star-icon" />
                                <img src={item.img} alt={item.heading} />
                            </div>
                            <div className="item-details-box">
                                <span>{item.type}</span>
                                <h4>{item.heading}</h4>
                                <div className="location-box">
                                    <LocationOnIcon className="loc-icon" />
                                    <p>{item.address}</p>
                                </div>
                                <hr />

                                <div className="counts">
                                    <div className="count-item">
                                        <HouseRoundedIcon />
                                        <p>{item.area}</p>
                                    </div>
                                    <div className="count-item">
                                        <HotelRoundedIcon />
                                        <p>{item.beds}</p>
                                    </div>
                                    <div className="count-item">
                                        <BathtubRoundedIcon />
                                        <p>{item.baths}</p>
                                    </div>
                                    <div className="count-item">
                                        <WarehouseRoundedIcon />
                                        <p>{item.garages}</p>
                                    </div>
                                </div>
                                <p className="price">{item.price}</p>
                                <hr />
                                <div className="owner-info-box">
                                    <div className="owner-img-box">
                                        <img src={item.ownerImg} alt="owner" />
                                        <p>{item.ownerName}</p>
                                    </div>
                                    <div className="owner-details-box">
                                        <button>DETAIL</button>
                                        <LocationOnIcon />
                                        <SyncAltIcon />
                                        <FavoriteIcon />
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default VentureInGuntur;
