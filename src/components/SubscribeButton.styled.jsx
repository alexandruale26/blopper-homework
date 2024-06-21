import styled from "@mui/material/styles/styled";
import { Button } from "@mui/material";

const SubscribeButton = styled(Button)({
  width: "12rem",
  color: "#fff",
  backgroundColor: "orange",
  padding: "0.8rem",
  fontSize: "1.5rem",
  textTransform: "capitalize",
  alignSelf: "center",
  "&:hover": {
    backgroundColor: "red",
  },
});

export default SubscribeButton;
