import { Button} from '@chakra-ui/react'
import React from 'react'


export default function NavButton({name}){
    return (
        <Button fontFamily='ClashDisplay Medium'>{name}</Button>
    );
}