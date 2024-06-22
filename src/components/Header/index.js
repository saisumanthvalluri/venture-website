import { useState } from "react";
import "./index.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Link } from "react-router-dom";
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
};

const Header = () => {
    const [open, setOpen] = useState(false);
    const [activeBtn, setActiveBtn] = useState("login");

    const handleOpen = (val) => {
        setActiveBtn(val);
        setOpen(true);
    };
    const handleClose = () => setOpen(false);

    const handleChangeForm = (val) => {
        setActiveBtn(val);
    };

    const onLogin = (e) => {
        e.preventDefault();
    };

    return (
        <div className="header-bg">
            <Link to="/">
                <h1>Trustmyproperty</h1>
            </Link>
            <div className="login-btns">
                <button className="login-btn" onClick={() => handleOpen("login")}>
                    Login
                </button>
                <button className="register-btn" onClick={() => handleOpen("register")}>
                    Register
                </button>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <div className="tabs">
                        <button
                            onClick={() => handleChangeForm("login")}
                            className={activeBtn === "login" ? "active" : ""}>
                            Login
                        </button>
                        <button
                            onClick={() => handleChangeForm("register")}
                            className={activeBtn === "register" ? "active" : ""}>
                            Register
                        </button>
                    </div>

                    {activeBtn === "login" ? (
                        // Login Form
                        <form onSubmit={(e) => onLogin(e)} className="form">
                            <input type="text" placeholder="User Name" />
                            <input type="password" placeholder="Password" />
                            <button type="submit" className="login-btn">
                                Login
                            </button>
                        </form>
                    ) : (
                        // Register Form
                        <form className="form">
                            <input type="text" placeholder="User Name" />
                            <input type="email" placeholder="Email" />
                            <input type="text" placeholder="First Name" />
                            <input type="text" placeholder="Last Name" />
                            <input type="phone" placeholder="Phone" />
                            <input type="password" placeholder="Password" />
                            <input type="password" placeholder="re-type password" />
                            <div className="t-c-box">
                                <input type="checkbox" id="TC" />
                                <label htmlFor="TC">I agree to the terms and conditions</label>
                            </div>
                            <button type="submit" className="login-btn">
                                Login
                            </button>
                        </form>
                    )}
                </Box>
            </Modal>
        </div>
    );
};

export default Header;
