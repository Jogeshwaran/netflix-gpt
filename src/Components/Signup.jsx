import { Header } from "./Header"

const SignUp = () => {
    return(
        <div>
            <Header />
            <div>
            <img 
                src="https://assets.nflxext.com/ffe/siteui/vlv3/3d31dac6-aaf0-4e6e-8bd7-e16c5d9cd9a3/web/IN-en-20260119-TRIFECTA-perspective_cce70d60-69c5-428f-99cf-44c212fcec3f_large.jpg"
                alt="main-banner"
            />
            <div class = "flex min-h-screen items-center justify-center flex-col">
            <h1 class = "text-2rem font-bold font-unset">Unlimited movies, shows, and more</h1>
            <p class="">Starts at ₹149. Cancel at any time.</p>
            </div>
            </div>
        </div>
    )
}

export default SignUp