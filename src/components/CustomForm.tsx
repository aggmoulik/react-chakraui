import { Divider, Heading } from '@chakra-ui/react'
import * as React from 'react'

type Props = {
    heading: string,
    children: React.ReactNode
}

export const CustomForm = (props: Props) => {
    return(
        <div>
            <Heading marginRight="700px" alignItems="revert" fontSize="lg">{props.heading}</Heading>
            <Divider marginBottom="12px" marginTop="12px" />
            {props.children}
        </div>
    )
}