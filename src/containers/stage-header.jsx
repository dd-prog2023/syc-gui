import PropTypes from 'prop-types';
import React from 'react';
import bindAll from 'lodash.bindall';
import VM from 'scratch-vm';
import {STAGE_SIZE_MODES} from '../lib/layout-constants';
import {setStageSize} from '../reducers/stage-size';
import {setFullScreen} from '../reducers/mode';

import {connect} from 'react-redux';

import StageHeaderComponent from '../components/stage-header/stage-header.jsx';

// eslint-disable-next-line react/prefer-stateless-function
class StageHeader extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'handleKeyPress',
            'handleTriggerCoordinate',
            'handleZoomOutCoordinateFontSize',
            'handleZoomInCoordinateFontSize',
            'handleOpenStageNativeSizePopover',
            'handleCloseStageNativeSizePopover',
        ]);

        this.minCoordinateFontSize = 10;
        this.maxCoordinateFontSize = 18;
        this.coordinateFontSize = 14;

        this.state = {
            isShowCoordinate: false, // �Ƿ���ʾ��������
            stageNativeSizePopoverOpen: false,
        };
    }
    componentDidMount () {
        document.addEventListener('keydown', this.handleKeyPress);
    }
    componentWillUnmount () {
        document.removeEventListener('keydown', this.handleKeyPress);
    }
    handleKeyPress (event) {
        if (event.key === 'Escape' && this.props.isFullScreen) {
            this.props.onSetStageUnFull(false);
        }
    }

    /**
     * ���������������ʾ or ����
     */
     handleTriggerCoordinate () {
        const visible = !this.state.isShowCoordinate;

        this.props.vm.runtime.triggerCoordinate(visible);

        this.setState({
            isShowCoordinate: visible
        });
    }

    /**
     * ��С����ϵ������
     */
     handleZoomOutCoordinateFontSize () {
        let temp = this.coordinateFontSize - 1;

        temp = temp >= this.minCoordinateFontSize ? temp : this.minCoordinateFontSize;
        console.log('temp :>> ', temp);

        this.coordinateFontSize = temp;
        this.props.vm.runtime.setCoordinateFontSize(temp);
    }

    /**
     * �Ŵ�����ϵ������
     */
     handleZoomInCoordinateFontSize () {
        let temp = this.coordinateFontSize + 1;

        temp = temp <= this.maxCoordinateFontSize ? temp : this.maxCoordinateFontSize;

        this.coordinateFontSize = temp;
        this.props.vm.runtime.setCoordinateFontSize(temp);
    }

    /**
     * �� stageNativeSize �� Popover ���
     */
    handleOpenStageNativeSizePopover () {
        this.setState({stageNativeSizePopoverOpen: true});
    }

    /**
     * �ر� stageNativeSize �� Popover ���
     */
    handleCloseStageNativeSizePopover () {
        this.setState({stageNativeSizePopoverOpen: false});
    }

    render () {
        const {
            ...props
        } = this.props;
        return (
            <StageHeaderComponent
                {...props}
                isShowCoordinate={this.state.isShowCoordinate}
                onKeyPress={this.handleKeyPress}
                onTriggerCoordinate={this.handleTriggerCoordinate}
                onZoomOutCoordinateFontSize={this.handleZoomOutCoordinateFontSize}
                onZoomInCoordinateFontSize={this.handleZoomInCoordinateFontSize}
            />
        );
    }
}

StageHeader.propTypes = {
    isFullScreen: PropTypes.bool,
    isPlayerOnly: PropTypes.bool,
    onSetStageUnFull: PropTypes.func.isRequired,
    showBranding: PropTypes.bool,
    stageSizeMode: PropTypes.oneOf(Object.keys(STAGE_SIZE_MODES)),
    vm: PropTypes.instanceOf(VM).isRequired
};

const mapStateToProps = state => ({
    stageSizeMode: state.scratchGui.stageSize.stageSize,
    showBranding: state.scratchGui.mode.showBranding,
    isFullScreen: state.scratchGui.mode.isFullScreen,
    isPlayerOnly: state.scratchGui.mode.isPlayerOnly
});

const mapDispatchToProps = dispatch => ({
    onSetStageLarge: () => dispatch(setStageSize(STAGE_SIZE_MODES.large)),
    onSetStageSmall: () => dispatch(setStageSize(STAGE_SIZE_MODES.small)),
    onSetStageFull: () => dispatch(setFullScreen(true)),
    onSetStageUnFull: () => dispatch(setFullScreen(false))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StageHeader);
