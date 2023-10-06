import Link from "next/link";



const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo">
                <Link href="/">
                    Adwait Portfolio
                </Link>
            </div>
            <a download=""href="https://drive.google.com/file/d/11-ThXlPgOezUrN2AL86X_5i50J0Hyp_q/view?usp=drive_link" target = "_blank"className="cta-btn">Resume</a>
        </div>
    )
}

export default Navbar;