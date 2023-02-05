import React from 'react';
import { TextField } from '@mui/material';
import { StyledTextField } from './MUIStyles';
type inputField = {
    placeholder?: string;
    keyText?: string;
    label?: string;
    disabled?: boolean;
    error?: boolean;
    inputProps?: object;
    type?: string;
    values?: string;
    sx?: object;
    handleChange: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
};
export function InputField({ placeholder, type = 'aplhanumeric', error = false, disabled = false, sx = {},label, keyText, inputProps = {}, values, handleChange }: inputField) {
    return (
        <div>
            <StyledTextField
                fullWidth
                label={label}
                variant='filled'
                placeholder={placeholder}
                name={keyText}
                id={keyText}
                sx={sx}
                value={values}
                error={error}
                onChange={(e) => handleChange(e)}
                disabled={disabled}
            />
        </div>
    );
}

