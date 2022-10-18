import { useMediaQuery, useTheme } from "@mui/material";
import { displayBreakPoint } from "../interfaces";


export const useDisplayBreakpoints = () => {

    const theme = useTheme();
    const greaterThanXLarge = useMediaQuery(theme.breakpoints.up("xl"));
    const largeToXLarge = useMediaQuery(theme.breakpoints.between("lg", "xl"));0
    const midToLarge = useMediaQuery(theme.breakpoints.between("md", "lg"));
    const smallToMid = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const lessThanSmall = useMediaQuery(theme.breakpoints.down("sm"));
    let currentDisplayBreakPoint: displayBreakPoint = 'sm';
    if (greaterThanXLarge) {
        console.log("Greater than extra large");
        currentDisplayBreakPoint = 'xl';
    } else if (largeToXLarge) {
        console.log("Greater than Between large and xlarge");
        currentDisplayBreakPoint = 'lg';
    }
    else if (midToLarge) {
        console.log("Between mid and large");
        currentDisplayBreakPoint = 'md';
    } else if (smallToMid) {
        console.log("Between small to mid");
        currentDisplayBreakPoint = 'sm';
    } else if (lessThanSmall) {
        console.log("Less than small");
        currentDisplayBreakPoint = 'xs';
    }


  return {
    currentDisplayBreakPoint,
  }
}
