import fbIcon from "../media/fbicon.png";
import twitterIcon from "../media/twittericon.png";
import linkedinIcon from "../media/linkedinicon.png";

const footer=()=>{

    return(
        <>
    <div className="footer-container">
      <div className="footer-column">
        <h3 className="footer-heading">Products</h3>
        <p className="footer-link">Listing</p>
        <p className="footer-link">Properties</p>
        <p className="footer-link">Agents</p>
        <p className="footer-link">Blog</p>
      </div>

      <div className="footer-column">
        <h3 className="footer-heading">Resources</h3>
        <p className="footer-link">Our Homes</p>
        <p className="footer-link">Stories</p>
        <p className="footer-link">Video</p>
        <p className="footer-link">Free Trial</p>
      </div>

      <div className="footer-column">
        <h3 className="footer-heading">Company</h3>
        <p className="footer-link">Partnerships</p>
        <p className="footer-link">Terms of use</p>
        <p className="footer-link">Privacy</p>
        <p className="footer-link">Sitemap</p>
      </div>

      <div className="footer-column">
        <h3 className="footer-heading">Get in touch</h3>
        <p className="footer-text">
          You’ll find your next home, in any style you prefer.
        </p>

        <div className="icon-box">
          <img src={fbIcon} alt="fbIcon" className="icon" />
          <img src={twitterIcon} alt="twitterIcon" className="icon" />
          <img src={linkedinIcon} alt="linkedinIcon" className="icon" />
        </div>
      </div>
    </div>
    </>
    )
}

export default footer;