import React from 'react'
import {Link} from 'react-router-dom'
import {shallow} from '../../enzyme'

import List from '../../src/components/List'

describe('List tests', () => {
  it('renders title', () => {
    const title = "Title"
    const wrapper = shallow(<List title="Title" />)

    expect(wrapper.find('.list-title').text()).toEqual('Title')
  })

  it('renders list-items', () => {
    const items = [
      {
        "name": "Item 1",
        "author": "Author 1"
      },
      {
        "name": "Item 2",
        "author": "Author 2"
      },
      {
        "name": "Item 3",
        "author": "Author 3"
      }
    ]
    const wrapper = shallow(<List items={items} />)

    expect(wrapper.find('.list-nav').children()).toHaveLength(items.length)
  })

  it('renders a list item', () => {
    const items = [
      {
        "name": "Item 1"
      },
      {
        "name": "Item 2",
        "author": "Author 2"
      }
    ]
    const wrapper = shallow(<List items={items} />)

    expect(wrapper.contains(<li><Link to="/" className="list-link">Item 1</Link></li>)).toBeTruthy()
  })
})
