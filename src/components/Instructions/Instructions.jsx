import "./Instructions.css";

const checkIcon = "/check.png";



export default function Instructions() {
    return (
        <>
            <div className="instructions_wrapper">
                <div className="instructions_item">
                    <div><img src={checkIcon} alt=""></img></div>
                    <h4>Access to 100+ GAMES for FREE thanks to ads</h4>
                </div>
                <div className="instructions_item">
                    <div><img src={checkIcon} alt=""></img></div>
                    <h4>Log In Across All Your Devices</h4>
                </div>
                <div className="instructions_item">
                    <div><img src={checkIcon} alt=""></img></div>
                    <h4>Skip the Line with Customer Support</h4>
                </div>
            </div>
        </>
    );
};