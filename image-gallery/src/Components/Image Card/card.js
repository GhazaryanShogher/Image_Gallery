import React, {Fragment} from 'react';
import styled, { css } from 'styled-components';

const Image = styled.img`
  outline:none;
  border-radius: 10px;

  width:363px;
  height:242px;  
  margin: 7px;
  transition: all .3s ease-in-out;
  box-shadow: 0px 14px 30px -15px rgb(0 0 0 / 90%);
`;

function Card(props){

    return(
        <Fragment>
            <Image src={props.src}></Image>
        </Fragment>
    )

}
 
export default Card;