import { div } from "framer-motion/client";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import PrivacyPolicyImage from "../assets/terms-and-condition-img.jpg";
import { RxFontStyle } from "react-icons/rx";

const PrivacyPolicy = () => {
  return (
    <div>
      <div
        className="banner d-flex justify-content-center align-items-center"
        style={{
          backgroundImage: `url(${PrivacyPolicyImage})`,
        }}
      >
        <div className="overlay-banner"></div>
        <h1 className="text-white position-relative">
          Terms and <span>Conditions</span>
        </h1>
      </div>

      {/* privacy Policy */}
       <motion.div
                    className="container my-9 our-mission-sec"
                   
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
      <div className="container">
        <div className="t_content">
          <div className="mb-5">
            <h2>TERMS AND CONDITIONS</h2>
            <p>
            <span style={{fontStyle:"italic"}}>Thank you for choosing us.</span> <br></br>
            This document, i.e., Privacy Policy ("Policy") contains the manner and details in which 3CAD Hospitality LLP that owns and controls the brands known as 'Food Darzee, Coached Darzee and Baked Darzee ("we", "us", "our") collects and processes the data that you, the user ("user", "you", "your") of this platform ("Platform") provide to us. 3CAD Hospitality LLP is a limited liability partnership incorporated under the Limited Liabilities Partnership Act, 2008 in India and having its registered office at 207,Veena Beena Shopping Centre, Turner Road, Bandra (West), Suburban Mumbai – 400050.
            </p>
            <p>
            We may change the terms of this Policy from time to time. Please check this page regularly for updates. In the event that there are material changes to the Policy, we may send you additional notice by way of an e-mail or a notification on the Platform.
            </p>
            <p>
            While we aim to be completely transparent in the manner we choose to protect your privacy, you may not agree with the terms of this Policy. Should this be the case, please remember it is your choice whether you wish to continue using our Services and Platform.
            </p>
            <p>
            This Policy and the Terms of Use are to be read in consonance and form part of a single understanding. Any capitalised terms not defined herein shall be interpreted to mean as defined in the Terms of Use.
            </p>           
          </div>

          <div className="mb-5">
            <h2>WHY WE COLLECT AND PROCESS PERSONAL DATA AND HOW WE USE IT</h2>
            <ul>
                <li>To fulfil buying and selling requests on the Platform.</li>
                <li>To enable our nutritionists to communicate with you and send a personalised diet plan.</li>
                <li>To conduct business planning and forecasting.</li>
                <li>To enable us to diagnose and identify any technical advancements or troubleshoot issues.</li>
                <li>For marketing and advertising purposes.</li>
                <li>To answer your questions or requests for information or handle your complaints.</li>
                <li>To ensure that content provided regarding our Services is presented in the most effective manner for you and for your computer or other devices.</li>
                <li>To notify you about updates or changes to our Services or Platform features and content.</li>
                <li>To provide you with promotional communications, to the extent that you have provided consent to receive such communications under applicable law.</li>
                <li>To comply with legal obligations and requests by law enforcement.</li>
                <li>Inferences drawn from your browsing patterns help us understand your preferences better, thereby allowing us to offer a more focused range of products and optimise our Services.</li>
                <li>Inferences drawn from how you interact with the Platform allow us to constantly identify what we could do better to help our users.</li>
                <li>To detect, investigate and prevent fraudulent transactions and other illegal activities and protect the rights and property of 3CAD Hospitality LLP.  </li>
            </ul>
          </div>

          <div className="mb-5">
            <h2>ANALYTICS TECHNOLOGIES</h2>
            <ol>
                <li>You can control the use of cookies at the individual browser level. If you choose not to activate cookies or to later disable them, you can still visit our Platform, but your ability to use some features may be limited.</li>
                <li>Web beacons, tags, and scripts may be used on the Platform or in e-mails to help us deliver cookies, count visits, understand usage and advertising campaign effectiveness, and determine whether an e-mail has been opened and clicked on. We may receive reports based on the use of the aforesaid technologies by our service/analytics providers on an individual and aggregated basis.</li>
                <li>We partner with third parties, such as Google Analytics, to manage the advertising of our brand on other sites or platforms as well as across other devices you use, based on your past visits to our Platform. Our third-party partners such as Google Ads and Facebook Ads may use tracking technologies to gather data about your activities on our Platform to deliver such advertising to you, including retargeting ads.</li>
                <li>We may use third-party trackers to let us know when users have visited the Platform by “clicking-through” our sponsored advertising or content hosted on third-party platforms. The Platform uses Google Analytics code to gather statistical data. These cookies help us accurately estimate the number of visitors on the Platform and the volume of usage of the Platform. This is done, inter alia, to ensure that the Platform is available and running efficiently even with maximum traffic.</li>
                <li>In the event you seek to opt-out of this tracking, please contact us at <Link to="mailto:inquiries@fooddarzee.com.">inquiries@fooddarzee.com.</Link> Please note that this does not opt you out of being served advertisements. You may continue to receive generic ads on these third-party platforms. You may also opt-out of receiving advertisements across devices by adjusting your ad preference in your relevant device account, Google account, or Apple account.</li>                
            </ol>
          </div>
          <div className="mb-5">
            <h2>WHO DO WE SHARE YOUR DATA WITH?</h2>
            <ul>
                <li>I.T. & e-mail service providers</li>
                <li>To enable our nutritionists to communicate with you and send a personalised diet plan.</li>
                <li>Fraud prevention vendors</li>
                <li>Payment processors</li>
                <li>Law enforcement authorities</li>
                <li>Delivery service providers</li>
                <li>Advertising partners</li>
                <li>Data analytics agencies</li>
                <li>Social media partners</li>
                <li>Entities seeking to acquire or invest in 3CAD Hospitality LLP</li>                
            </ul>
            
          </div>

          <div className="mb-5">
            <h2>HOW DO WE PROTECT YOUR DATA?</h2>
            <p>
            We implement appropriate technical and organisational measures to help protect the security of your personal data including pseudonymisation, encryption, access, and retention policies to guard against unauthorised access and unnecessary retention of personal data in our systems. Your password protects your account and therefore we recommend using a strong password that is unique to your account.
            </p>                      
          </div>

          <div className="mb-5">
            <h2>THIRD-PARTY LINKS</h2>
            <p>
            The Platform may contain links to external websites owned and operated by third parties. Please note that when you use third-party services, their own terms of use and privacy policies will govern your use of those services. 3CAD Hospitality LLP does not collect, process, or store any personal data provided by you to such third-party links, including the payment gateway, through the Platform. Please check these policies before you submit any personal data to these external websites.
            </p>
           
          </div>

          <div className="mb-5">
            <h2>GOVERNING LAW, JURISDICTION AND ARBITRATION</h2>
            <p>
            As provided in our <Link to="#"> Terms of Use</Link>
            </p>            
          </div>

          <div className="mb-5">
            <h2>Delivery</h2>
            <ol>
              <li>
                {" "}
                Food Darzee At present, our services for Food Darzee are only
                available within the territories of Mumbai, Navi Mumbai, Thane
                Bengaluru, Pune, Chennai, Delhi NCR and Hyderabad.
              </li>
              <li>
                {" "}
                Baked Darzee At present, our services for Baked Darzee are only
                available within the territories of Mumbai, Navi Mumbai, Thane,
                Bengaluru, Pune, Chennai, Delhi NCR and Hyderabad.
              </li>
              <li>
                {" "}
                Coached Darzee Our services for Coached Darzee are available
                across the territory of India.
              </li>
            </ol>
          </div>

          <div className="mb-5">
            <h2>CONTACT US</h2>
            <p>
            If you have any questions regarding this Policy, please feel free to reach out to us by contacting our Grievance Redressal Officer (Silpa Jha) at The Indian Food Company, Plot No. 357, Raja Park, 302004, Jaipur. Email address: team@thecorrectdiet.com and inquiries@thecorrectdiet.com or by writing to us at the following address:
            </p>            
          </div>
        </div>
      </div>
       </motion.div>
    </div>
  );
};

export default PrivacyPolicy;
