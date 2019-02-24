import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators as tomatoAction } from '../../reducer';
import Timer from './presenser';

function mapStateToProps(state) {
  const { isPlaying, elapsedTime, timeDuration } = state;
  return {
    isPlaying,
    elapsedTime,
    timeDuration
  }
}

function mapDispatchToProps(dispatch) {
  return {
    startTimer: bindActionCreators(tomatoAction.startTimer, dispatch),
    restartTimer: bindActionCreators(tomatoAction.restartTimer, dispatch),
    addSecond: bindActionCreators(tomatoAction.addSecond, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);