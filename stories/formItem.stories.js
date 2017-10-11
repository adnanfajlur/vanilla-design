import React from 'react'

import { storiesOf } from '@storybook/react'
import Center from '../components/center'

import Autocomplete from '../components/main/form-item/Autocomplete'
import Checkboxes from '../components/main/form-item/Checkboxes'
import TextFields from '../components/main/form-item/TextFields'
import Radios from '../components/main/form-item/Radios'

storiesOf('Form Item', module)
  .add('Autocomplete', () =>
    <Center>
      <Autocomplete />
    </Center>
  )
  .add('Checkboxes', () =>
    <Center>
      <Checkboxes />
    </Center>
  )
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
