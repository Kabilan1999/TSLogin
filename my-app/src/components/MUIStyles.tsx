import React from 'react';
import {styled} from '@mui/material/styles';
import { TextFields } from '@mui/icons-material';
import TextField from '@mui/material/TextField';


export const StyledTextField = styled(TextField)(()=>({
    '& .MuiFilledInput-root':{
        height: '40px',
        borderRadius: '12px'
    }
}))

