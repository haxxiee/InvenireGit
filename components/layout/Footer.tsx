const footerYear: number = new Date().getFullYear();

const Footer = (): JSX.Element => {
  return (
    <footer className="flex justify-center items-center p-5 bg-transparent">
      <p className="text-sm">
        Copyright &copy; {footerYear} All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
