import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const CustomButton = ({ children, className, onClick }) => {
  const BootstrapButton = styled(Button)({
    color: "var(--white-color)",
    boxShadow: "none",
    textTransform: "capitalize",
    fontSize: 15,
    padding: "6px 12px",
    backgroundColor: "var(--primary-color)",
    fontWeight: 600,
    borderRadius: "8px",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      backgroundColor: "var(--primary-color)",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "var(--primary-color)",
    },
    "&:focus": {
      boxShadow: "none",
    },
  });
  return (
    <>
      <BootstrapButton className={`${className}`} onClick={onClick}>
        {children}
      </BootstrapButton>
    </>
  );
};

export default CustomButton;
