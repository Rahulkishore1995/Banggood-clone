
import { Signavbar } from "./Signavbar";
import "./SignUp.css";
import { Apple, Facebook, Google, Twitter } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { SignFooter } from "./SignFooter";

export const SignUp = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Signavbar />
      <br />
      <br />
      <div className="signup">
        <div className="SigninRegister">
          <div onClick={() => navigate("/signIn")}>SIGN IN</div>
          <div onClick={() => navigate("/signUp")}>REGISTER</div>
        </div>
        <br />
        <br />
        <input type="text" name="Email" id="Email" placeholder="Email" />
        <br />
        <br />

        <input
          type="password"
          name="Password"
          id="Password"
          placeholder="Password"
        />
        <br />
        <br />
        <div>
          <div className="flex1">
            <input type="checkbox" name="" id="box1" />
            <div>
              I agree to Banggood.com{" "}
              <span className="underline">Terms of Use</span>
            </div>
          </div>

          <div className="flex2">
            <input type="checkbox" name="" id="box2" />
            <div>
              I agree to Banggood.com{" "}
              <span className="underline">Privacy Policy</span>
            </div>
          </div>
        </div>
        <br />
        <button className="joinUp" onClick={() => navigate("/signIn")}>
          Create Your Account
        </button>
        <div style={{ marginTop: "5px", marginLeft: "-44%", color: "gray" }}>
          Forgot your password?
        </div>
        <br />
        <div style={{ fontSize: "17px", fontWeight: "500", color: "gray" }}>
          Quick Access With
        </div>
        <br />
        <div id="icon">
          <div>
            {" "}
            <Apple size={30} />
          </div>
          <div>
            {" "}
            <Facebook size={30} color="royalblue" />
          </div>

          <img
            src="https://pbs.twimg.com/profile_images/1455185376876826625/s1AjSxph_400x400.jpg"
            alt="google"
            height={30}
            width={30}
          />
          <div>
            {" "}
            <Twitter size={30} color="#1da1f2" />
          </div>
        </div>
      </div>
      <br />
      <br />
      <SignFooter />
    </div>
  );
};
