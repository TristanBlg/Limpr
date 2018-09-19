import * as React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

function List(props){
  const {title, items} = props

  return (
    <StyledList>
      <h2 className="list-title">{title}</h2>
      <ul className="list-nav">
        {items && items.map(item => {
          return (
            <li key={item.id}>
              <Link className="list-link" to="/">
                {item.name}
              </Link>
              {item.author && (
                <React.Fragment>
                  &nbsp;-&nbsp;
                  <Link to="/" className="list-link list-link--high">
                    {item.author}
                  </Link>
                </React.Fragment>
              )}
            </li>
          )
        })}
      </ul>
    </StyledList>
  )
}

const StyledList = styled.div.attrs({
  className: 'list'
}) `
  margin-bottom: 40px;
  padding: 0 20px;

  .list{
    &-title{
      font-size: 1.6rem;
      font-weight: 700;
      color: #111;
      text-transform: uppercase;
      margin: 0;
    }
    &-nav{
      list-style: none;
      padding: 0;
      margin: 0;
    }
    &-link{
      font-size: 1.6rem;
      font-weight: 400;
      color: #111;

      &--high{
        color: #828282;
      }
    }
  }
`

export default List
