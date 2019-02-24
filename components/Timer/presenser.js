import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import Button from '../Button';

function setTime(time) {
  let minute = Math.floor(time / 60);
  time -= minute * 60;
  let seconds = parseInt(time % 60, 10);
  return `${minute < 10 ? `0${minute}` : minute}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

class Timer extends Component {
  componentWillReceiveProps(nextProps) {
    const currentProps = this.props;
    if (!currentProps.isPlaying && nextProps.isPlaying) {
      let timerInterval = setInterval(() => {
        this.props.addSecond();
      }, 1000);
      this.setState({
        timerInterval
      })
    } else if (currentProps.isPlaying && !nextProps.isPlaying) {
      clearInterval(this.state.timerInterval);
    }
  }

  render() {
    const {
      isPlaying,
      elapsedTime,
      timeDuration,
      startTimer,
      restartTimer,
      addSecond
    } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar barStyle={'light-content'} />
        <View style={styles.upper}>
          <Text style={styles.time}>{setTime(timeDuration - elapsedTime)}</Text>
        </View>
        <View style={styles.lower}>
          {!isPlaying ?
            <Button iconName="play-circle" onPress={startTimer} /> :
            <Button iconName="stop-circle" onPress={restartTimer} />
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CE0B24'
  },
  upper: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  lower: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  time: {
    fontSize: 120,
    fontWeight: '100',
    color: 'white'
  }
});

export default Timer;