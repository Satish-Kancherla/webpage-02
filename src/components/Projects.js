import { Link,Outlet } from "react-router-dom";
import p1 from "./images/p2.mp4";

const Projects = () => {
    return (
        <div className="1">
        <div className="container-projects">
            <div className="proj-1">
                <video src={p1} autoPlay loop muted />
            </div>
            <div className="proj-2">
                <h1>Projects</h1>
                <div className="proj-2a">
                    <nav>
                        <Link to="/projects/featured">Featured Projects</Link>
                        <Link to="/projects/new">New Projects</Link>
                    </nav>
                 </div>
            </div>
            <div className="cont-5">
                <div className="cont-55">
                    <div className="cont-5b">
                        <h1>Join Us Today</h1>
                    </div>
                    <div className="cont-5a">
                      <input type="text" placeholder="Enter your email here"/><button>Join</button>
                    </div>
                </div>
                <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.190148060066!2d78.37861227591131!3d17.450610800979266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93ded9f6f0d7%3A0xa3d91e5d00d50b63!2sCyber%20Towers!5e0!3m2!1sen!2sus!4v1701434840998!5m2!1sen!2su"
                     height={400}width={975}/>
                 </div>
                <div className="add">
                    
                <div className="add-1">
                    <form>
                        <table >
                        <h2>Request for a Service</h2>
                        <tr><input type="text" placeholder="Name"/></tr>
                        <tr><input type="email" placeholder="Email"/></tr>
                        <tr><input type="number"placeholder="Phone"/></tr>
                        <textarea rows={4} cols={40} placeholder="Type your message here..."/><br/>
                        <button>Submit</button>
                        </table>
                    </form>
                </div>

                <div className="add-2">
                    <h4>United States</h4>
                    <p>1998 Shiloh rd E Ste 321, Alpharetta, AG 54321</p>
                    <br/>
                    <h4>India</h4>
                    <p>Cyber Towers,1 rd Floor,Street No-1, Hi-Tech city,<br/> Madhapur, Hyderabad, Telangana 500081 INDIA<br/> Tel.040-40068214</p>
                    <br/>
                    <h4>E-mails</h4>
                    <p>Careers: jobs@data.com<br/> Services: services@data.com<br/> Products: products@data.com<br/> Solutions: solutions@data.com<br/> General:   info@data.com</p>
                    </div>
            </div>
            </div>

            <Outlet />
        </div>
        </div>
      );
}
 
export default Projects;