import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";

import React from "react";
import "./index.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="logo">
                <img src="./logo.jpg" alt="logo" />
                <h3>iTrustmyproperty</h3>
            </div>
            <div className="footer-items">
                <p>iTrustmyproperty: Your Dream Home Awaits</p>
                <div className="item">
                    <p>Subscribe via Gmail Today</p>
                    <div className="sub-items-box">
                        <input type="text" placeholder="YOUR G-MAIL" />
                        <button>Subscribe</button>
                    </div>
                </div>
                <div className="item">
                    <p>FOLLOW US</p>
                    <div className="sub-items-box">
                        <FaInstagramSquare className="social-icon" />
                        <FaFacebookSquare className="social-icon" />
                        <FaSquareXTwitter className="social-icon" />
                    </div>
                </div>
                <div className="item">
                    <p>CALL US</p>
                    <p>02 8541 9746</p>
                </div>
            </div>
            <hr />
            <div className="cr-pp-tc">
                <p>&copy; iTrustmyproperty 2024. All rights reserved.</p>
                <p>Privacy Policy | Terms of Service</p>
            </div>
        </div>
    );
};

export default Footer;
