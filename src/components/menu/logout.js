import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Button = styled.button`
  background: transparent;
  color: black;
  width: 100%;
  font-size: 1.7em;
  border: none;
  cursor: pointer;
`;

const Container = styled.div`
    position: relative;
    width: 200px;
    margin: 0 15px;
    &:after {
        position: absolute;
        bottom: -8px;
        left: 10%;
        content: "";
        border: 0px solid black;
        width: 0%;
        transition: .3s linear;
      }

    &:hover:after {
        width: 80%;
        border: 2px solid black;
        background: black;v
      }
      
`;

function LogoutArea(props) {
  return (
    <Container>
      <Link to="/">
        <Button onClick={() => props.setToken(null)}>
          <FontAwesomeIcon icon={faSignInAlt} /> &nbsp;Wyloguj się{' '}
        </Button>
      </Link>
    </Container>
  );
}

export default LogoutArea;
