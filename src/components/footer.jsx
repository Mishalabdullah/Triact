import React from "react";
function Footer() {
  return (
    <div className="py-5 text-center items-center">
      <p className="text-sm opacity-50">
        &copy; {new Date().getFullYear} Mishal . All Rights Reserved
      </p>
    </div>
  );
}
export default Footer;
