import { Button, styled } from "@mui/material";
import type { ButtonProps } from "@mui/material";

export const NavButton = styled(Button)<ButtonProps>(() => ({
  color: "white",
  backgroundColor: "transparent",
}));
