import { Dialog } from "@mui/material";
import styled from "styled-components";

export const CustomDialog = styled(Dialog)`
 .MuiPaper-root{
    width: 90%;
 }

 .MuiDialogContent-root{
  padding: 0;
 }

 section{
   display: flex;
   justify-content: space-around;
 }

 section label{
   width: 40%;
 }

`