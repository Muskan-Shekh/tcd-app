import { div } from "framer-motion/client";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import termsAndCondition from "../assets/terms-and-condition-img.jpg";

const TermsAndCondition = () => {
  return (
    <div>
      <div
        className="banner d-flex justify-content-center align-items-center"
        style={{
          backgroundImage: `url(${termsAndCondition})`,
        }}
      >
        <div className="overlay-banner"></div>
        <h1 className="text-white position-relative">
          Terms and <span>Conditions</span>
        </h1>
      </div>

      {/* about terms and conditions */}
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
              This Platform is operated by 3CAD Hospitality Limited Liability
              Partnership. This document, i.e., the Terms of Use (“Terms”)
              contains the terms and conditions between 3CAD Hospitality LLP
              (“we”, “our”, “us”) that owns and controls the brands known as ‘Food
              Darzee’, ‘Baked Darzee’ and ‘Coached Darzee’ and you, the user of
              the Platform (“User”, “you”, “your”). 3CAD Hospitality LLP is a
              limited liability partnership incorporated under the Limited
              Liabilities Partnership Act, 2008 in India and having its registered
              office at 207,Veena Beena Shopping Center, Turner Road, Bandra
              (West), Suburban Mumbai – 400050.
            </p>
            <p>
              To make this reader-friendly, we have divided these Terms of Use
              into four sections. These are:
            </p>
            <ol>
              <li>Acceptance of the Terms</li>
              <li>Terms of Use of the Platform</li>
              <li>Acceptance of the Terms</li>
              <li>Acceptance of the Terms</li>
            </ol>
          </div>

          <div className="mb-5">
            <h2>ACCEPTANCE OF THE TERMS</h2>
            <p>
              3CAD Hospitality LLP offers services and sale and delivery of its
              products through this Platform (“Services”), conditional to your
              acceptance of these Terms. Your acceptance of these Terms is
              essential for us to provide our Services safely and seamlessly, in
              accordance with the applicable law(s).
            </p>
            <p>
              Please read these Terms very carefully. If you do not agree to these
              Terms, 3CAD Hospitality LLP will not be able to provide any of its
              Services to you. By accessing or viewing the Platform and/or using
              the Services, you represent that you have read the Terms and agree
              to be bound by the same
            </p>
            <p>
              These Terms, together with any other terms that you may agree to by
              reference, constitute a legally binding agreement (“Agreement”)
              between you and 3CAD Hospitality LLP.
            </p>
            <p>
              We may amend/modify these Terms at any time, and such modifications
              shall be effective immediately upon posting on the Platform. We
              will, wherever possible, attempt to notify you of any changes to the
              Terms by way of push notifications and/or pop-ups and/or e-mails.
            </p>
            <p>
              Your continued use of our Services will constitute your agreement to
              any changes we make.
            </p>
            <p>
              If you do not agree to the Terms & Conditions as may be modified
              from time to time, you have the option to not avail or discontinue
              from availing our Services.
            </p>
          </div>

          <div className="mb-5">
            <h2>TERMS OF USE OF THE WEBSITE</h2>
            <p>
              Legal age and Eligibility: In order to avail of our Services on your
              own, you must be of legal age and eligible to enter into a binding
              contract with us, as per the laws applicable to you. In the event
              that you are a minor availing our Services, it will be assumed that
              you have the due authorization from your legal guardian to accept
              these Terms.
            </p>
            <p>
              Corporate User: If you are availing our Services on behalf of any
              entity, you represent and warrant that you are authorized to accept
              these Terms on such entity's behalf and that such entity agrees to
              indemnify you and 3CAD Hospitality LLP for any violations of the
              Agreement.
            </p>
            <p>
              Advertisement and Promotions: By accessing our Platform, you agree
              that we can display events or promotional offers relating to our
              products and Services.
            </p>
            <p>
              Please read these Terms very carefully. If you do not agree to these
              Terms, 3CAD Hospitality LLP will not be able to provide any of its
              Services to you. By accessing or viewing the Platform and/or using
              the Services, you represent that you have read the Terms and agree
              to be bound by the same.
            </p>
            <p>
              These Terms, together with any other terms that you may agree to by
              reference, constitute a legally binding agreement (“Agreement”)
              between you and 3CAD Hospitality LLP.
            </p>
            <p>
              We may amend/modify these Terms at any time, and such modifications
              shall be effective immediately upon posting on the Platform. We
              will, wherever possible, attempt to notify you of any changes to the
              Terms by way of push notifications and/or pop-ups and/or e-mails.
            </p>
            <p>
              Your continued use of our Services will constitute your agreement to
              any changes we make.
            </p>
            <p>
              If you do not agree to the Terms & Conditions as may be modified
              from time to time, you have the option to not avail or discontinue
              from availing our Services.
            </p>
          </div>
          <div className="mb-5">
            <h2>Privacy Policy</h2>
            <p>
              When you use the Platform, we will collect certain information from
              you as set forth in more detail in our Privacy Policy, which is
              hereby incorporated by reference. The Privacy Policy is available
              at <Link to="/">Privacy Policy</Link>
            </p>
          </div>

          <div className="mb-5">
            <h2>Subscription</h2>
            <ol>
              <li>
                {" "}
                Food Darzee – To obtain our services for Food Darzee, users will
                be required to subscribe to any of our available subscription
                packages. Upon subscribing successfully, we will create an account
                for the User based on the registered mobile number provided by us.
                For all further information and tasks related to the subscription
                plan, Users can login on the Food Darzee Application through their
                registered mobile number.
              </li>
              <li>
                {" "}
                Baked Darzee – To obtain our services and/or purchase our products
                from the Baked Darzee platform, users can add requisite products
                to their shopping cart and ‘checkout’ to the payment stage. Users
                have the option of creating an account on the Baked Darzee
                Platform at the “checkout” stage by providing a username and
                password
              </li>
              <li>
                {" "}
                Coached Darzee – To obtain our services for Coached Darzee, users
                will be required to subscribe to any of our available subscription
                packages.
              </li>
            </ol>
          </div>

          <div className="mb-5">
            <h2>Order</h2>
            <p>
              Please note that completion of the online checkout process shall not
              constitute our acceptance of your offer to purchase products and/or
              avail services from us. Our acceptance of your order is, inter alia,
              subject to our receipt of complete payment from you and availability
              of the products with us.
            </p>
            <p>
              Prior to dispatch of the product(s), 3CAD Hospitality LLP has the
              right to decline an order for any reason, including legal or
              regulatory reasons or non-availability of necessary materials due to
              unforeseen circumstances.
            </p>
            <p>
              We will notify you by e-mail as soon as possible to acknowledge that
              we have received and are processing your order. In case of Baked
              Darzee, if we cannot supply you with the product you ordered, we
              will not process your order, address an e-mail notifying you of the
              same, and, if you have already paid for the product, refund the full
              amount, as soon as reasonably possible.
            </p>
          </div>

          <div className="mb-5">
            <h2>Payment</h2>
            <p>
              The digital payment service is provided on the Platform using a
              third-party payment gateway. By clicking on the payment link on the
              Platform and entering the payment details, the User confirms that
              the credit or debit card or banking information provided is
              complete, accurate, and their own. Please check our Privacy Policy
              to understand who collects, processes, and stores the payment
              information supplied by the User at the time of payment. The prices
              /fees for our services and products as displayed on the Platform are
              inclusive of applicable taxes, delivery charges and any transaction
              fee that may be chargeable by the payment gateway service provider
              for facilitating the digital transaction.
            </p>
            <p>
              The User shall be liable for any damages, loss, costs, expenses,
              indirect losses, or consequential damages of any kind that may be
              suffered or incurred by 3CAD Hospitality LLP as a result of any
              fraudulent or illegal transaction perpetrated by the User.
            </p>
            <p>
              3CAD Hospitality LLP does not guarantee the security of the payment
              information provided by the User on the payment gateway link. We do
              not accept or assume liability for any damages, losses, costs,
              expenses, indirect losses, or consequential damages of any kind
              which may be suffered or incurred by the User from the use of the
              third-party payment gateway service.
            </p>
            <p>
              All card payments shall be subject to authorisation by the User’s
              card issuer. We take full payment immediately for all products.
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
            <h2>LEGAL TERMS & CONDITIONS</h2>
            <p>
              Disclaimers 3CAD Hospitality LLP is an entity engaged in providing
              nutritional food and services on the Platform. However, 3CAD
              Hospitality LLP does not take any responsibility for any adverse
              health effects on the User arising from consumption of any
              meals/products or usage of our Services. General: We expressly
              disclaim any liabilities and warranties regarding security,
              accuracy, reliability, applicability to you, effectiveness,
              timeliness, and performance of our Services, or that the Services
              will be error-free or that any errors will be corrected. No advice
              or information provided to you by 3CAD Hospitality LLP will create
              any liability or warranty that is not expressly stated herein.
              Nothing available on the Platform shall constitute 3CAD Hospitality
              LLP ’s opinion and should not be relied upon in making (or refrain
              from making) any decision.
            </p>
            <p>
              Nutritional Services: We expressly rely on the personal and health
              details provided/disclosed to us by the User for providing our
              Services. We do not take any responsibility for any adverse health
              or physical effects that may be caused due to consumption of our
              food products and/or due to the User’s lack of disclosure or
              negligence in disclosing any important personal or health details.
              User must consult a physician prior to availing the services
              provided by 3CAD Hospitality LLP.
            </p>
            <p>
              Wallet Usage: We expressly state that 3CAD Hospitality LLP reserves
              the right to change wallet usage policy and usage restrictions as
              per its own will and without any prior notice. By subscribing to our
              plan, the user hereby agrees that he / she has no objections with
              respect to the same.
            </p>
            <p>
              We do not provide or claim to provide any medical advice. Our
              representations regarding weight loss are based on an average
              understanding and the actual results may vary from person to person.
              We do not diagnose, treat or cure any disease. The benefits and/or
              effects of consuming our product(s)/meals(s) may vary from person to
              person-depending on several factors including their genetic make-
              up, life style and physical activity levels.
            </p>
            <p>
              Entire Agreement: This Agreement constitutes the entire agreement between the parties with respect to the within-subject matter and supersedes any previous understanding, document, e-mail between the parties. This Agreement shall only be modified in writing, executed by both parties
            </p>
            <p>• Prevailing Language: The English language version of these Terms shall be decisive in all respects and shall prevail in case of any inconsistencies with translated versions if any.</p>
            <p>ENTITY NAME: The Indian Food Company, Plot No. 357, Raja Park, 302004, Jaipur. <Link to="mailto:team@thecorrectdiet.com ">Email address: team@thecorrectdiet.com and inquiries@thecorrectdiet.com</Link></p>
          </div>
        </div>
      </div>
      </motion.div>
    </div>
  );
};

export default TermsAndCondition;
