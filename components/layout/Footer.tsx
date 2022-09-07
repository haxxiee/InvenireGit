import React from "react";

const footerYear: number = new Date().getFullYear();

const Footer = (): JSX.Element => {
  return (
    <footer className="flex justify-center items-center bg-neutral-100 p-5">
      <p className="text-sm">
        Copyright &copy; {footerYear} All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
