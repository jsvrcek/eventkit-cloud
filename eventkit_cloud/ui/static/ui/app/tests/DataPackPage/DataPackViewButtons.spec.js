import React from 'react';
import sinon from 'sinon';
import {mount, shallow} from 'enzyme';
import ActionViewModule from 'material-ui/svg-icons/action/view-module';
import ActionViewStream from 'material-ui/svg-icons/action/view-stream';
import IconButton from 'material-ui/IconButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import DataPackViewButtons from '../../components/DataPackPage/DataPackViewButtons';

describe('DataPackViewButtons component', () => {
    const getProps = () => {
        return {
            handleGridSelect: () => {},
            handleListSelect: () => {}
        }
    };
    const muiTheme = getMuiTheme();
    injectTapEventPlugin();
    
    it('should render two icon buttons', () => {
        const props = getProps();
        const wrapper = mount(<DataPackViewButtons {...props} />, {
            context: {muiTheme},
            childContextTypes: {muiTheme: React.PropTypes.object}
        });
        expect(wrapper.find(IconButton)).toHaveLength(2);
        expect(wrapper.find(ActionViewModule)).toHaveLength(1);
        expect(wrapper.find(ActionViewStream)).toHaveLength(1);
    });

    it('should call handleGridSelect', () => {
        let props = getProps();
        props.handleGridSelect = new sinon.spy();
        const wrapper = mount(<DataPackViewButtons {...props} />, {
            context: {muiTheme},
            childContextTypes: {muiTheme: React.PropTypes.object}
        });
        wrapper.find(IconButton).first().simulate('click');
        expect(props.handleGridSelect.calledOnce).toBe(true);
    });

    it('should call handleListSelect', () => {
        let props = getProps();
        props.handleListSelect = new sinon.spy();
        const wrapper = mount(<DataPackViewButtons {...props} />, {
            context: {muiTheme},
            childContextTypes: {muiTheme: React.PropTypes.object}
        });
        wrapper.find(IconButton).last().simulate('click');
        expect(props.handleListSelect.calledOnce).toBe(true);
    });
});