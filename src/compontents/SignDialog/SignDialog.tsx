import React from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import './SignDialog.css'

const style = {
    position: 'absolute' as 'absolute',
    top: '43%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1440,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const correctEmail = "giffers@gmail.com"

const SignDialog = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [hided, setHided] = React.useState(false)
    const handleHided = () => {
        setHided((prevState) => {
            return (
                !prevState
            )
        })
    }

    const [signType, setSignType] = React.useState(1)

    function getImagePath() {
        switch (signType) {
            case 1:
                return "/images/signin.png"
            case 2:
                return "/images/signup.png"
            case 3:
                return "/images/reset-pwd.png"
            case 4:
                return "/images/check-email.png"
            case 5:
                return "/images/verification.png"    
            default:
                break
        }
    }

    

    const checkEmail = (userEmail: string) => {
        return userEmail === correctEmail
    }

    function handleSendEmail(email: string) {

        checkEmail(email) ? setSignType(5) : setSignType(4)
    }

    return (
        <div>
            <button className="header-actions-item d-b cur-p user-btn" onClick={handleOpen}><img src="/images/user.png" alt="user" /></button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className="sign-content d-f align-center">
                        <div><img src={getImagePath()} alt="sign" /></div>
                        <div>
                            {signType === 3 ?
                                <>
                                    <h2 className="sign-title">Reset Your Password</h2>
                                    <h4 className="reset-subtitle">
                                        Enter your email and we'll send you a link to reset your password.
                                    </h4>
                                    <h5 className="sign-subtitle" style={{ marginTop: "4px" }}>Please  check it.</h5>
                                    <form action="" className="sign-fm d-f">
                                        <div className="input-bl d-f">
                                            <label htmlFor="signEmail">Email</label>
                                            <input type="email" className='reset-input' name="signEmail"
                                                id="signEmail" placeholder='focus001@gmail.com' />
                                            <p className="error-msg">We can not find your email.</p>
                                        </div>
                                        <button type="button" className='sign-btn'
                                            onClick={() => handleSendEmail(correctEmail)}
                                        >
                                            Send
                                        </button>
                                        <div className="have-bl d-f align-center">
                                            <div className="have-title"> Back to </div>
                                            <button type='button' className='have-btn' onClick={() => { setSignType(1) }}>
                                                Login
                                            </button>
                                        </div>
                                    </form>
                                </>
                                : signType === 4 ?
                                    <>
                                        <h2 className="sign-title">Check Email</h2>
                                        <p className="check-desc">
                                            Please check your email inbox and click on the provided link to reset your
                                            password. If you don't receive email, <span>Click here to resend</span>
                                        </p>
                                        <div className="check-back">Back to  <span onClick={() => setSignType(1)}>Login</span></div>
                                    </>
                                    : signType === 5 ?
                                        <>
                                            <h2 className="sign-title">Verification</h2>
                                            <h4 className="sign-subtitle">Verify your code.</h4>
                                            <form action="" className="sign-fm d-f">
                                                <div className="input-bl d-f">
                                                    <label htmlFor="signCode">Verification Code</label>
                                                    <input type="signCode"  name="signCode"
                                                        id="signCode" placeholder='0757' />
                                                </div>
                                                <button type="button" className='sign-btn'>
                                                    Verify Code
                                                </button>
                                            </form>
                                        </>
                                        :
                                        <>
                                            <h2 className="sign-title">{signType === 1 ? "Sign In" : "Sign Up"}</h2>
                                            <h4 className={signType === 2 ? "sign-subtitle" : "d-n"}>
                                                Sign up for free to access to in any of our products
                                            </h4>
                                            <div className="sign-social d-f">
                                                <a href="" className="sign-social-link">Continue With Google</a>
                                                <a href="" className="sign-social-link">Continue With Twitter</a>
                                            </div>
                                            <div className="sign-divider d-f jc-sb align-center">
                                                <div className="sign-divider-line"></div>
                                                <div className="sign-divider-title">Or</div>
                                                <div className="sign-divider-line"></div>
                                            </div>
                                            <form action="" className='sign-fm d-f'>
                                                <div className="input-bl d-f">
                                                    <label htmlFor="userInfo">User name or email address</label>
                                                    <input type="text" name='userInfo' id='userInfo' />
                                                </div>
                                                <div className="input-bl d-f">
                                                    <div className="d-f jc-sb">
                                                        <label htmlFor="signPwd">Password</label>
                                                        <div className="hide-bl d-f align-center">
                                                            <button type='button' className='btn-clear d-b' onClick={handleHided}>
                                                                <img src="/images/hide.png" alt="Hide" />
                                                            </button>
                                                            <div className="hide-title">{hided ? "Show" : "Hide"}</div>
                                                        </div>
                                                    </div>
                                                    <input type={hided ? "password" : "text"} name="signPwd" id="signPwd" />
                                                    <button type='button' className={signType === 1 ? 'sign-forget-btn' : 'd-n'}
                                                        onClick={() => setSignType(3)}>
                                                        Forget your password
                                                    </button>
                                                    {signType === 2 ?
                                                        <>
                                                            <p className="sign-pwd-note">
                                                                Use 8 or more characters with a mix of letters, numbers & symbols
                                                            </p>
                                                            <div className="check-box d-f">
                                                                <div className="check-bl d-f">
                                                                    <input type="checkbox" name="agree" id="agree" />
                                                                    <label htmlFor="agree">Agree to our Terms of use and Privacy Policy </label>
                                                                </div>
                                                                <div className="check-bl d-f">
                                                                    <input type="checkbox" name="subscribe" id="subscribe" />
                                                                    <label htmlFor="subscribe">Subscribe to our monthly newsletter</label>
                                                                </div>
                                                            </div>
                                                        </>
                                                        : null
                                                    }
                                                </div>
                                                <button type='button' className='sign-btn'>{signType === 1 ? "Sign In" : "Sign Up"}</button>
                                                <div className="have-bl d-f align-center">
                                                    <div className="have-title">
                                                        {signType === 1 ? "Don't have an account?" : "Already have an  account? "}
                                                    </div>
                                                    <button type='button' className='have-btn' onClick={() => { setSignType(signType === 1 ? 2 : 1) }}>
                                                        {signType === 1 ? "Sign up" : "Log in"}
                                                    </button>
                                                </div>
                                            </form>
                                        </>
                            }

                        </div>
                    </div>
                </Box>
            </Modal>

        </div>
    )
}

export default SignDialog
