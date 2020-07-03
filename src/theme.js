import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#000000" },
    secondary: { main: "#FFFFFF" },
    background: { default: "#FFFFFF" },
  },
  typography: {
    fontFamily: "Raleway",
  },
});

export default theme;
