import React from 'react'

import { storiesOf } from '@storybook/react'
import Center from '../components/center'

import TextFields from '../components/main/form-item/TextFields'
import Radios from '../components/main/form-item/Radios'

storiesOf('Form Item', module)
  .add('Text Field', () =>
    <Center>
      <TextFields />
    </Center>
  )
  .add('Radio', () =>
    <Center>
      <Radios />
    </Center>
  )
