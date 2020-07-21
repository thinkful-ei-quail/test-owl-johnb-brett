import React from 'react'
import ReactDOM from 'react-dom'
import Participant from './Participant'
import renderer from 'react-test-renderer'

it('should render without crashing', () => {
   const div = document.createElement('div')
   ReactDOM.render(<Participant />, div)
   ReactDOM.unmountComponentAtNode(div) 
})

it('renders the UI as expected', () => {
    const tree = renderer
        .create(<Participant name='john' inSession onStage />)
        .toJSON()
    expect(tree).toMatchSnapshot()
})