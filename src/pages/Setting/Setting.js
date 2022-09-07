import React from 'react';
import { useLocation } from "react-router-dom";
import Typography from '../../components/Typography/Typography';
import {
  SettingContainer,
  ItemConatiner
} from './SettingStyle';

export default function Setting() {
    const location = useLocation();
  return (
      <SettingContainer>
        {location.state.length !== 0 && location.state.map(item => 
           (
            <ItemConatiner>
               <Typography  as="h4" fontWeight="500">{item}</Typography>
            </ItemConatiner>
           
          )
        )}
      </SettingContainer>
  )
}
