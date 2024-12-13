import React from "react";

const TermsAndConditions = () => {

  return (
    <div className="pt-[10rem] pb-[1rem] text-white">
      <div className="wrapper font-light">
        <h3 className="text-3xl">
          Terms and Conditions for Collecting User Consent for Calls
        </h3>
        <ul className="my-7 flex flex-col gap-4">
          <li>
            <h2 className="font-medium">1. Consent Requirement</h2>
            <p>
              By signing up on our platform, users explicitly consent to be
              contacted via phone for purposes related to our services,
              including appointments, offers, and support.
            </p>
          </li>

          <li>
            <h2 className="font-medium">2. Consent Collection Mechanism</h2>
            <p>
              Users must check a consent checkbox during the signup process,
              indicating agreement to receive calls. The consent checkbox is
              unchecked by default and must be actively selected by the user.
            </p>
            <p>
              Text displayed alongside the checkbox explicitly states the
              purpose of the calls.
            </p>
          </li>

          <li>
            <h2 className="font-medium">3. Proof of Consent</h2>
            <p>
              A timestamped record of user consent is securely stored in our
              database. Screenshots or system logs of the signup page with the
              consent checkbox are available as proof.
            </p>
          </li>

          <li>
            <h2 className="font-medium">4. Opt-Out Mechanism</h2>
            <p>
              Users can revoke consent at any time by updating their preferences
              on our portal or contacting our support team. Once consent is
              revoked, no further calls will be made.
            </p>
          </li>

          <li>
            <h2 className="font-medium">5. Compliance with Regulations</h2>
            <p>
              Our consent collection process adheres to local data protection
              and telecommunication regulations, ensuring privacy and
              transparency.
            </p>
          </li>

          <li>
            <h2 className="font-medium">6. User Responsibility</h2>
            <p>
              Users agree to provide accurate contact details and understand
              that their consent applies only to the purposes outlined during
              signup.
            </p>
          </li>

          <li>
            <h2 className="font-medium">7. Dispute Resolution</h2>
            <p>
              Any disputes regarding consent-related issues will be handled as
              per the terms specified in our privacy policy.
            </p>
          </li>

          <li>
            <p>
              This framework ensures ethical communication practices while
              safeguarding user trust and compliance with legal requirements.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TermsAndConditions;
