import React from "react";

function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-7">
      <div className="container flex justify-center">
        <aside className="grid-flow-col items-center ">
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
      </div>
    </footer>
  );
}

export default Footer;
