/* eslint-disable @typescript-eslint/naming-convention */
import { Button, styled } from "@mui/material";
import type { ButtonProps } from "@mui/material";

export const HeaderButton = styled(Button)<ButtonProps>(() => ({
  color: "black",
  background: "linear-gradient(to top, #a1ffce, #faffd1)",

  "&:hover": {
    backgroundColor: "white",
    color: "black",
  },
}));
