import React from "react"
import "./resume.css"


const Resume = () => {
 
    return (
      <div className="container-main">

        <section  id="wrapHero" className="section-page">
        <img className="aslam-pic" src="/aslam.jpg" alt="mex"/>

        <div>
            <h1 className="aslam">Aslam Iliyas</h1>
            <p className="bio">Softwear Developer(Programmer) </p>
            <p className="email-adrr">👉 youngfizzy001@gmail.com</p>
        </div>
        </section>


        <section className="section-page">

            <div className="social-list">
            <a href="https://web.facebook.com/profile.php?id=100076310060822" className="youtube social">facebook </a>
            <a href="https://wa.link/ev1irl" className="youtube social">Whatapp </a>
            <a href="https://t.me/Aslam_iliyas" className="youtube social">Telegram </a>
            <a href="https://github.com/aslam48/aslam-projet" className="youtube social">GitHub </a>
            <a href="https://www.upwork.com/freelancers/~019a574e379070d074" className="youtube social">UpWork </a>
            </div>
        </section>


     <section className="section-page">
        <h2 className="skills">Skills and Qualifcation</h2>
        <ul className="list-style">
            <li>✔️ 1 (1/2) years expirence Front end developer</li>
            <li>✔️ 50+ project created</li>
            <li>✔️ intermidate knowledge of API</li>
        </ul>
     </section>


     <section className="push" >
        <h2 className="tite">Tech Stack</h2>

        <div id="wrap-card-tech">
            <div className="card-techstack">
                <span>Html</span>
            </div>

            <div className="card-techstack">
                <span>css</span>
            </div>

            <div className="card-techstack">
                <span> Javascript</span>
            </div>

            <div className="card-techstack">
                <span>React.js</span>
            </div>

            <div className="card-techstack">
                <span>loading more...</span>
            </div>
        </div>
     </section>


     <section className="push2">
        <h2 className="tite">Others Skills</h2>
        <div id="wrap-card-tech">
        <div className="card-otherstack">
                <span>Lead generation</span>
            </div>

            <div className="card-otherstack">
                <span>Spanish translator</span>
            </div>

            <div className="card-otherstack">
                <span>typing</span>
            </div>

           

            <div className="card-otherstack">
                <span>Vitual Assiastance</span>
            </div>
            </div>
     </section>





     <section>
        <div className="work-History-wrap">
            <h2 className="tite">Expirence</h2>

            <div className="pask1">
                <h4 className="tite-2">build a funding tech site <mark> <a href="https://bia-client.netlify.app/" className="b">Black in ai</a></mark></h4>
               <ul>
                <li>✔️ based on building the user UI</li>
                <li>✔️ and responsiveness of the site</li>
               </ul>
            </div>

            <div id="line-break"></div>

            <div className="pask1">
                <h4 className="tite-2">Costomer Service: <mark ><a href="https://www.121companyformation.co.uk/" className="b" >@121 company formation</a></mark> </h4>
               <ul>
                <li>✔️ email handeling</li>
                <li>✔️ and hotel booking</li>
               </ul>
            </div>

            <div id="line-break"></div>

            <div className="pask1">
                <h4 className="tite-2">Typing Random Aspect type</h4>
               <ul>
                <li>✔️ world to pdf</li>
                <li>✔️ company email landings</li>
               </ul>
            </div>
        </div>
     </section>




     <section>
     <h2 id="tite-2" className="tite">Skills</h2>
        <div id="line-break"></div>

<div className="pask1">
    <h4 className="tite-2"> </h4>
   <ul>
    <li>💪 User interface design</li>
    <li>💪 User experience design </li>
    <li>💪 Team work </li>
    <li>💪 Training and development  </li>
    <li>💪 Maintenance and repair </li>
    <li>💪 Contextual inquiry</li>
   </ul>
</div>
</section>


     <section>
        <h2 id="tite-2" className="tite">Education</h2>
        <div id="line-break"></div>

<div className="pask1">
    <h4 className="tite-2"> </h4>
   <ul>
    <li>💻 free codecamp</li>
    <li>💻 W3school </li>
    <li>💻 Travis media </li>
    <li>💻 log rocket </li>
   </ul>
</div>
     </section>
      </div>
    )
}




export default Resume
