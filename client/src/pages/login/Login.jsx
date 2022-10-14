import './login.scss';

export default function Login() {
    return (
        <div className="login">
            <div className="top">
                <div className="wrapper">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                        alt=""
                        className="logo"
                    />
                    <button className="buyButton">BUY</button>
                </div>
            </div>
            <div className="container">
                <form action="">
                    <h1>Sign In</h1>
                    <input type="email" placeholder="Email or phone number" />
                    <input type="password" placeholder="Email or phone number" />
                    <button className="loginButton">Sign In</button>
                    <span>
                        New to Netflix? <b>Sign up now. </b>
                    </span>
                    <small>
                        This page is protected by google reCAPCHA to ensure you'are not a bot.
                        <b>Learn more</b>
                    </small>
                </form>
            </div>
        </div>
    );
}
