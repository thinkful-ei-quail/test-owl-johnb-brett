import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import ParticipantList from './ParticipantList'

it('should render without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ParticipantList participants={[]}/>, div)
    ReactDOM.unmountComponentAtNode(div) 
})

it('renders UI as expected', () => {
    const tree = renderer
        .create(<ParticipantList participants={[]} />)
        .toJSON()
    expect(tree).toMatchSnapshot()
})