import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardStyles = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: space-between;
  align-items: none;
  flex-direction: column;
  background-color: #fff;
  width: 380px;
  margin-bottom: 16px;
  padding: 24px;
`

const CardHeadline = styled.div`
  font-size: 25px;
  font-family: Didot, serif;
`
const CardAuthor = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  margin-top: 15px;
`
const CardImageContainer = styled.div`
  padding-right: 10px;
  border-right: 1px solid lightgrey;
  height: 40px;
`
const CardImage = styled.img`
  width: 40px;
`
const AuthorSpan = styled.span`
  padding-left: 10px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`

const Card = props => {
  return (
    <CardStyles>
      <CardHeadline>{props.card.headline}</CardHeadline>
      <CardAuthor>
        <CardImageContainer>
          <CardImage src={props.card.img} alt="News Icon" />
        </CardImageContainer>
        <AuthorSpan>By {props.card.author}</AuthorSpan>
      </CardAuthor>
    </CardStyles>
  );
};

// Make sure to include PropTypes.
Card.propTypes = {
  card: PropTypes.object
}

export default Card;
