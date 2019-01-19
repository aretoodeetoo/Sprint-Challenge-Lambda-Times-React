import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

// const ActiveTab = styled.div`
//   background-color: #fff;
//   color: #333;
//   border: 2px solid #333;
// `

// const TabStyles = styled.div`
//   display: flex;
//   justify-content: none;
//   align-items: center;
//   flex-direction: row;
//   color: #fff;
//   background-color: #333;
//   margin: 0 5px;
//   padding: 2px 10px;
//   font-size: 12px;
//   letter-spacing: 2px;
//   cursor: pointer;
//   font-weight: bold;

//   &:hover{
//     text-decoration: underline;
//   }
// `

const TabDiv = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  margin: 0 5px;
  padding: 2px 10px;
  font-size: 12px;
  letter-spacing: 2px;
  cursor: pointer;
  font-weight: bold;
  color: #fff;
  background-color: #fff;

  background-color: ${props => (props.selectedTab === props.tab ? '#fff' : '#333')}
  color: ${props => (props.selectedTab === props.tab ? '#333' : '#fff')}
  border: ${props => (props.selectedTab === props.tab ? '2px solid #333' : null)}

  &:hover{
    text-decoration: underline;
  }
`
// ${props => props.tab === props.selectedTab && css `
// background-color: #fff;
// color: #333;
// border: 2px solid #333;
// `}



const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  return (
    <TabDiv
    selectedTab={props.selectedTab}
    tab={props.tab}
      onClick={() => {
        props.changeSelected(props.tab);
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
      }}
    >
      {props.tab.toUpperCase()}
    </TabDiv>
  );
};

// Make sure you include PropTypes on your props.

Tab.propTypes = {
  tab: PropTypes.string,
  selectedTab: PropTypes.string,
  changeSelected: PropTypes.func
}

export default Tab;
