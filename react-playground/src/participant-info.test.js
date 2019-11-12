import React from 'react';
import ReactDOM from 'react-dom';
import IndividualParticipant from './participant-info'
import renderer from 'react-test-renderer';

describe('<IndividualParticipant Component />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(<IndividualParticipant name="Peter" avatar="https://tf-assets-prod.s3.amazonaws.com/avatars/ea85f0a2-aaa2-4da6-936f-29dfe3bd78a6_MaggieMcClellan.png" inSession="true" onStage="false"/>, div);
        
        ReactDOM.unmountComponentAtNode(div);

    })

    it('renders the UI as expected', () => {

        const tree = renderer
            .create(<IndividualParticipant />)
            .toJSON();
        expect(tree).toMatchSnapshot();

    });

});