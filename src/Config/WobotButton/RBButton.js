import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import PropTypes from 'prop-types';

import colors from '@config/colors';
import RBText from './RBText';

const button = {
  flex: 1,
  height: 47,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 50,
  marginVertical: 4,
  marginHorizontal: 15,
  paddingHorizontal: 16,
};

const shadow = {
  ...Platform.select({
    ios: {
      shadowColor: colors.black,
      shadowOpacity: 0.1,
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowRadius: 5,
    },
    android: {
      elevation: 2,
    },
  }),
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
  },
  activeSolidButton: {
    ...button,
    ...shadow,
    backgroundColor: colors.activeButton,
  },
  inActiveSolidButton: {
    ...button,
    ...shadow,
    backgroundColor: colors.inActiveButton,
  },
  activeWiredButton: {
    ...button,
    borderColor: colors.activeButtonBorderColor,
    borderWidth: 1,
  },
  inActiveWiredButton: {
    ...button,
    borderColor: colors.inActiveButtonBorderColor,
    borderWidth: 1,
  },
});

class RBButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { value, buttonType, active, onPress, backgroundColor, buttonSize } = this.props;
    const isWiredButton = buttonType === 'wired';
    const isActive = active === undefined ? true : active;

    let buttonStyle;
    if (isWiredButton) {
      buttonStyle = isActive ? styles.activeWiredButton : styles.inActiveWiredButton;
    } else {
      buttonStyle = isActive ? styles.activeSolidButton : styles.inActiveSolidButton;
    }

    let buttonColor = colors.activeButtonTextColor;
    if (isWiredButton) {
      buttonColor = isActive ? colors.primary : colors.inActiveButtonTextColor;
    }

    if (isActive && backgroundColor) buttonStyle = { ...buttonStyle, backgroundColor };
    if (buttonSize === 'inline') {
      const { flex, ...rest } = buttonStyle;
      buttonStyle = rest;
    }

    return (
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          activeOpacity={isActive ? 0.8 : 1}
          // onPress={typeof onPress === 'function' && isActive ? () => onPress() : null}
          onPress={typeof onPress === 'function' ? () => onPress() : null}
          style={buttonStyle}
        >
          <RBText fontType="bold" color={buttonColor}>
            {value}
          </RBText>
        </TouchableOpacity>
      </View>
    );
  }
}

// You must declare that a prop is a specific JS type
RBButton.propTypes = {
  value: PropTypes.string.isRequired,
  buttonType: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  active: PropTypes.bool,
};

RBButton.defaultProps = {
  buttonType: 'solid',
  active: true,
};

export default RBButton;
