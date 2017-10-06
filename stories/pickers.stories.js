import React from 'react'

import { storiesOf } from '@storybook/react'
import Center from '../components/center'

import DatePickers from '../components/dev/pickers/DatePickers'
import TimePickers from '../components/dev/pickers/TimePickers'
import DateAndTimePickers from '../components/dev/pickers/DateAndTimePickers'

storiesOf('Pickers', module)
  .add('Date Pickers', () =>
    <Center>
      <DatePickers />
    </Center>
  )
  .add('Time Pickers', () =>
    <Center>
      <TimePickers />
    </Center>
  )
  .add('Date And Time Pickers', () =>
    <Center>
      <DateAndTimePickers />
    </Center>
  )
