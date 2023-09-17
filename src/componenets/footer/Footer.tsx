import classes from "./Footer.module.scss";

import Email from "./componenets/email/Email";
import AppFooter from "./componenets/footer/Footer";

const Footer = () => {
  return (
    <div className={classes["container"]}>
      <Email />
      <AppFooter />
    </div>
  );
};

export default Footer;
