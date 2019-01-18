import React, { Component } from 'react';
import styled from 'styled-components';

import Tabs from './Tabs';
import Cards from './Cards';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';

// Styled Component
const ContentContainerStyles = styled.div`
  display: flex; 
  flex-direction: column; 
  align-items: center;
`

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    console.log('Component has mounted');
    this.setState({
      tabs: tabData,
      cards: cardData
    })
  }

  changeSelected = tab => {
    this.setState({ selected: tab });
    // this function should take in the tab and update the state with the new tab.
  };

  filterCards = e => {
    console.log('Cards are filtering?');
   if (this.state.selected === 'all'){
     return this.state.cards;
   } else {
     return this.state.cards.filter(card => card.tab === this.state.selected)
   }

  };

  render() {
    return (
      <ContentContainerStyles>
        {/* 
          Add 2 props to the Tabs component, 
          `selectedTab` that includes the currently selected tab
          and `selectTabHandler` that includes the function to change the selected tab
        */}
        <Tabs tabs={this.state.tabs}
        selectedTab={this.state.selected}
        selectTabHandler={this.changeSelected} />
        <Cards
        cards={this.filterCards()} />
      </ContentContainerStyles>
    );
  }
}
