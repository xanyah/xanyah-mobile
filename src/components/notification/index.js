import React from 'react'
import {
  Text,
  TouchableOpacity,
} from 'react-native'
import TimerMixin from 'react-timer-mixin'
import PropTypes from 'prop-types'

import { getNotificationColor } from '../../utils/notifications-helper'

export default class Notification extends React.Component {
  constructor(props) {
    super(props)
    this.mixins = [ TimerMixin ]
  }

  componentWillReceiveProps(newProps) {
    if (newProps.notification.text !== this.props.notification.text) {
      setTimeout(() => this.props.destroyNotification(), 5000)
    }
  }

  render() {
    const { destroyNotification, notification: { text, type } } = this.props
    const colors = getNotificationColor(type)
    return (text
      ? (
        <TouchableOpacity
          onPress={destroyNotification}
          style={{
            backgroundColor: colors.background,
            bottom: 0,
            height: 60,
            left: 0,
            position: 'absolute',
            right: 0,
          }}
        >
          <Text style={{ color: colors.text, fontSize: 16 }}>{text}</Text>
        </TouchableOpacity>
      )
      : null)
  }
}

Notification.propTypes = {
  destroyNotification: PropTypes.func.isRequired,
  notification: PropTypes.object,
}

Notification.defaultProps = {
  notification: {},
}
