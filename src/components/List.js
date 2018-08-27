// @flow

import * as React from 'react'
import styled from 'styled-components'

type Props = {
  isActive: boolean,
  title: string,
  items: Array<Object>
};

const List = (props: Props) => {
  const {title, items} = props

  return (
    <StyledList>
      <h2 className="list__title">{title}</h2>
      <ul className="list__nav">
        {items.map((el, key) => {
          return (
            <li key={key}>
              <a className="list__link">
                {el.name}<span className="list__link--high">{el.author && ` - ${el.author}`}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </StyledList>
  )
}

const StyledList = styled.div `
  margin-bottom: 40px;
  padding: 0 20px;

  .list{
    &__title{
      font-size: 1.6rem;
      font-weight: 700;
      color: #111;
      text-transform: uppercase;
      margin: 0;
    }
    &__nav{
      list-style: none;
      padding: 0;
      margin: 0;
    }
    &__link{
      font-size: 1.6rem;
      font-weight: 400;
      color: #111;
      text-decoration: none;

      &--high{
        color: #828282;
      }
    }
  }
`

export default List

