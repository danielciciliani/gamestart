import SubmitButton from "../SubmitButton/SubmitButton";
import "./Form.css";

export default function Form(){
    return (
        <div className="form">
            <h1 className="form_title">Connect Your Account</h1>
            <p className="form_text">...and unlock your benefits!</p>

            <form action="">
                <input type="text" placeholder="Email Address" />
                <button type="submit"></button>
            </form>
            <p>Send Me Offers, News, and Fun Stuff!</p>
            
            <SubmitButton children={"Connect"} ></SubmitButton>
        </div>


    );
}