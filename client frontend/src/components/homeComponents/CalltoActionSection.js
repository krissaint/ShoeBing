import React from "react";
 
const CalltoActionSection = () => {
  return (
    <div className="subscribe-section bg-with-black">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="subscribe-head">
              <h2>Do you want to become our brand ambassador?</h2>
              <p>Sign up free and we will contact you.</p>
              <form className="form-section">
                <input placeholder="Your Email..." name="email" type="email" />
                <input value="Yes. I want!" name="subscribe" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalltoActionSection;
