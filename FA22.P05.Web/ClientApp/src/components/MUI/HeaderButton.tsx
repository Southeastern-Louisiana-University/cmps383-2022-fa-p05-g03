import { Button, styled } from "@mui/material";
import type { ButtonProps } from "@mui/material";

export const HeaderButton = styled(Button)<ButtonProps>(() => ({
  color: "black",
  background: "linear-gradient(to bottom, #00d2ff, #928dab)",

  "&:hover": {
    background: "white",
    color: "black",
  },
}));
