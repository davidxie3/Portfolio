import { ButtonGroup } from '@chakra-ui/react'
import React from 'react'
import NavButton from './nav-buttons.js';

export default function NavBar(){
    return (
        <ButtonGroup>
            <NavButton id="button1"/>
        </ButtonGroup>
    );
}