import logo from "../images/datacombanner.jpg"
import './Banner.css';

function Banner() {
    return (
    <a href="https://datacom.com/nz/en/careers/graduates/talentx"> 
        <img src={logo} alt="banner" className="banner"/>
    </a>
    )
}

export default Banner;