import styles from "./loginPage.module.css"
import { FaGooglePlusG } from "react-icons/fa";
import Button from "../../components/button/button.component";

const LoginPage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.top}>
                <div className={styles.logo}>
                    <img src="https://www.trashedgraphics.com/wp-content/uploads/2012/02/default_icon-778x584.jpg" alt="logo" />
                    <span>Sellzy</span>
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.login}>
                    <div className={styles.head}>
                        <h1>Login to your account</h1>
                        <span>Login Using Google Account</span>
                        <div className={styles.googleIcon}>
                            <FaGooglePlusG/>
                        </div>
                    </div>
                    <form className={styles.loginForm}>
                        <input type="email" placeholder="Email"/>
                        <input type="password" placeholder="Password"/>
                        <Button txt={"Signin"} clr={"#fff"} bg={"#29B499"} p={"18px"}  fs={"14px"} br={"25px"} w={"40%"} center/>
                    </form>
                </div>
            </div>
        </div>
        <div className={styles.right}>
            <h2>New Here?</h2>
            <p>Signup and controlle your shop at a place!</p>
            <Button txt={"Sign Up"} clr={"#212322"} br={"25px"} bg={"#fff"} fs={"15px"} p={"18px"} w={"35%"} center fw={"600"}/>
        </div>
    </div>
  )
}

export default LoginPage