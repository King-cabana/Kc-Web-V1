import React from 'react'
import { Stepper } from 'react-form-stepper'

const ProgressBar = (props) => {
    return (
      <Stepper
        { ...props }
        connectorStateColors={true}
        connectorStyleConfig={{
          completedColor: '#0068FF',
          activeColor: '#0068FF',
          disabledColor: '#ffffff'
        }}
        styleConfig={{
          activeBgColor: '#0068FF',
          completedBgColor: '#0068FF',
          inactiveBgColor: '#ffffff',
          activeTextColor: '#ffffff',
          completedTextColor: '#ffffff',
          inactiveTextColor: '#0068FF'
        }}
        />
  )
}

export default ProgressBar