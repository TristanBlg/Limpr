import React from 'react'
import {MemoryRouter} from 'react-router'
import renderer from 'react-test-renderer'

import List from '../../src/components/List'

describe('Component: <List/>', () => {
  let title = "Title",
      items = [
        {
          "id": 1,
          "name": "Item 1"
        },
        {
          "id": 2,
          "name": "Item 2"
        },
        {
          "id": 3,
          "name": "Item 3"
        }
      ];

  it('render the component', () => {
    const component = renderer.create(
      <MemoryRouter>
        <List title={title} items={items} />
      </MemoryRouter>
    ).toJSON()
    expect(component).toMatchSnapshot();
  })
})
