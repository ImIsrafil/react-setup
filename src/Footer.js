import React from "react";

const Footer = ({ length }) => {
  const today = new Date();
  return (
    <footer>
      <p>
        <strong>
          {length} {length > 1 ? "items" : "item"} in list
        </strong>
        <br />
        Copyright &copy;
        {today.getFullYear()}/{today.getMonth() + 1}/{today.getDate()} at&nbsp;
        {today.getHours() > 12
          ? Math.abs(today.getHours() - 12)
          : today.getHours()}
        :{today.getMinutes()}:{today.getSeconds()}
      </p>
    </footer>
  );
};

export default Footer;
