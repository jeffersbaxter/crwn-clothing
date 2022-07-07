import React from "react";
import { FormInputLabel, Group, Input } from './form-input.styles';

const FormInput = ({ handleChange, label, ...otherProps}) => (
    <Group>
        <Input onChange={handleChange} {...otherProps} />
        {label ? (
            <FormInputLabel className={
                `${
                    otherProps.value.length ? 'shrink' : ''
                } form-input-label`}
            >
                {label}
            </FormInputLabel>
        ) : null}
    </Group>
);

export default FormInput;
