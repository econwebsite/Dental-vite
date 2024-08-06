import Productmedicalimg from "../assets/Productmedimg.png";
import productcard1 from "../assets/techimg1.jpg";
import "../Blog comp/Blogpage.css"
import productcard2 from "../assets/techimg2.jpg";
import productcard3 from "../assets/Techimg3.jpg";
import { RiTwitterXLine, RiLinkedinFill, RiYoutubeFill, RiFacebookFill, RiInstagramLine, RiMailLine, RiPinterestFill } from 'react-icons/ri';
import { FaTelegramPlane } from 'react-icons/fa';


const BlogPage = () => {
  return (
    <div>
    <div className="Blogpage-cointainer">
    <div className='mainContainer'>
      <div className="content-Blog">
        <div className="Blog-left-column">
        <div className="breadcrumb">Home {'>'} Dental Imaging</div>
          <h1>How cameras Maximize the Power of Modern Dental Application</h1>
          <p>By Balaji S, July 16, 2024</p>
          {/* <div className="custom-icon-box">
            <div className="custombutton-row">
            <button className="blog-icon-share">Share</button>
              <button className="blog-icon-button"><RiTwitterXLine /></button>
              <button className="blog-icon-button"><RiLinkedinFill /></button>
              <button className="blog-icon-button"><RiYoutubeFill /></button>
              <button className="blog-icon-button"><RiFacebookFill /></button>
              <button className="blog-icon-button"><RiInstagramLine /></button>
              <button className="blog-icon-button"><RiMailLine /></button>
              <button className="blog-icon-button"><FaTelegramPlane /></button>
              <button className="blog-icon-button"><RiPinterestFill /></button>
            </div>
          </div> */}
          <div className="blogborder-box">
            <p>Modern dentistry has been transformed by advanced cameras, aiding in diagnosis, treatment, and patient communication. High-quality intraoral cameras capture detailed images of teeth and gums, and cameras in dental loupes and surgical lights enhance procedures. These cameras provide magnified views, enabling efficient procedures and improving patient engagement. This blog explores various types of dental cameras, their features, and their impact on dental care.</p>
            <img src={Productmedicalimg} alt="Dental Camera" className="blog-medicalimage" />
            <p>The use of cameras has changed how dental professionals diagnose, treat, and communicate with their patients. For instance, high-quality intraoral cameras that capture detailed images of teeth and gums. There are also cameras integrated into dental loupes and surgical lights to enhance critical dental processes. Other use cases include diagnostic imaging, treatment planning, etc.</p>
            <br></br>
            <p>The cameras provide magnified views of the oral cavity to empower dentists to perform complicated procedures with greater efficiency. Along the way, this also improves patient understanding and engagement while helping build ongoing dental care records.</p>
            <br></br>
            <p>In this blog, we will look at the various types of dental cameras and get insights into their key features.</p>
            <br></br>
            <h3>Types of Cameras Used In Dentistry</h3>
            <br></br>
            <p>The use of cameras has changed how dental professionals diagnose, treat, and communicate with their patients. For instance, high-quality intraoral cameras that capture detailed images of teeth and gums. There are also cameras integrated into dental loupes and surgical lights to enhance critical dental processes. Other use cases include diagnostic imaging, treatment planning, etc.</p>
            <br></br>
            <p>The cameras provide magnified views of the oral cavity to empower dentists to perform complicated procedures with greater efficiency. Along the way, this also improves patient understanding and engagement while helping build ongoing dental care records.</p>
            <br></br>
            <p>In this blog, we will look at the various types of dental cameras and get insights into their key features.</p>
          </div>
          {/* <div className="blog-button-group">
            <button className="blog-explore-button">Explore all our dentistry cameras</button>
            <button className="blog-selector-button">Camera Selector Page</button>
          </div> */}
        </div>
        <div className="Blog-right-column">
          <div className="Blogrelated-articles">
            <p>Related Blogs</p>
            <hr/>
            <div className="CardBlogs">
              <img src={productcard1} alt="Camera Model 1" className="Cardrelated-image" />
              <h2>Building an AI-enabled point of care device</h2>
              <p>Learn how e-con helped a leading Us medical device manufacturer</p>
              <button className="Blogreadmore-1">Read More</button>
            </div>
            <div className="CardBlogs">
              <img src={productcard2} alt="Camera Model 2" className="Cardrelated-image" />
              <h2>Building an AI-enabled point of care device</h2>
              <p>Learn how e-con helped a leading Us medical device manufacturer</p>
              <button className="Blogreadmore-1">Read More</button>
            </div>
            <div className="CardBlogs">
              <img src={productcard3} alt="Camera Model 3" className="Cardrelated-image" />
              <h2>Building an AI-enabled point of care device</h2>
              <p>Learn how e-con helped a leading Us medical device manufacturer</p>
              <button className="Blogreadmore-1">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default BlogPage;