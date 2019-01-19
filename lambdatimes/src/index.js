import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import App from './App';
import styled from 'styled-components';

const Root = styled.div`
    width: 100%;
`

ReactDOM.render(<App />, document.getElementById('root'));
