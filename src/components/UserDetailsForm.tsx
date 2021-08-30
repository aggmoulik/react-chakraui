import { Button, FormControl, Input, Stack, FormErrorMessage } from '@chakra-ui/react';
import * as React from 'react'
import { useForm } from "react-hook-form";
import { CustomForm } from './CustomForm';
import { EmailInput } from './InputComponents/EmailInput';

export const UserDetailsForm = () => {

    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting }
      } = useForm();

      function onSubmit(values: any) {
        return new Promise<void>((resolve) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            resolve();
          }, 3000);
        });
      }
    

    return(
        <CustomForm heading="Basic Details">
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
            <Stack spacing={4}>
            <Input
                errorBorderColor="red.500"
                id="name"
                placeholder="Full Name ( John Doe )"
                {...register("name", {
                    required: "This is required",
                    minLength: { value: 4, message: "Minimum length should be 4" }
                  })}
            />
            {
                errors?.name &&
                <FormErrorMessage>{errors.name}</FormErrorMessage>
            }
            
            
            {/* <Input
                errorBorderColor="red.500"
                type="email"
                id="email"
                placeholder="john@doe"
                {...register("email", {
                    required: "This is required",
                    minLength: { value: 4, message: "Minimum length should be 4" }
                  })}
            /> */}

            <EmailInput 
                {...register("email", {
                    required: "This is required",
                    minLength: { value: 4, message: "Minimum length should be 4" }
                })}
            />
            
            <Input
                errorBorderColor="red.500"
                id="contact"
                placeholder="+91 0000000000"
                {...register("contact", {
                    required: "This is required",
                    maxLength: { value: 10, message: "Enter 10 digit mobile number" }
                    
                  })}
            />
            
            <Input
                errorBorderColor="red.500"
                id="tagline"
                placeholder="Profile Tagline"
                {...register("tagline", {
                    required: "This is required",
                    minLength: { value: 4, message: "Minimum length should be 4" }
                  })}
            />
            
            <Input
                errorBorderColor="red.500"
                id="location"
                placeholder="Location"
                {...register("contact", {
                    required: "This is required",
                    minLength: { value: 4, message: "Minimum length should be 4" }
                  })}
            />

            <Button type="submit" name="submit">Log In</Button>

            </Stack>
            </FormControl>
        </form>
        </CustomForm>
    )

}