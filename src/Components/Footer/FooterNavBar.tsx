import {NavLink} from "react-router-dom";



export default function FooterNavBar (){
    return (<div className="footerNavBar">
        <div className="footerAds">
        <div>Ads Near You</div>
        <div>Latest Ads</div>
        <div>Most Viewed</div>
        </div>
        <div className="footerInfo">
        <div><NavLink to="/ContactUs">Contact Us</NavLink></div>
        <div><NavLink to="/AppInfo">App Info</NavLink></div>
        </div>
    </div>)
}