import { Input } from '@chakra-ui/react'
import * as React from 'react'

function validateEmail(value: any) {
    let error;
    if (!value) {
      error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address';
    }
    return error;
}

export const EmailInput = (props: any) => {
    return(
    <Input
        type="email"
        id="email"
        placeholder="john@doe"
        errorBorderColor="red.500"
        name="email"
        onChange={validateEmail}
    />)
}

