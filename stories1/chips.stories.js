import React from 'react'

import { storiesOf } from '@storybook/react'
import Center from '../components/center'

import Chips from '../components/dev/chips/Chips'
import ChipsArray from '../components/dev/chips/ChipsArray'

storiesOf('Chips', module)
  .add('Chip', () =>
    <Center>
      <Chips />
    </Center>
  )
  .add('Chip Array', () =>
    <Center>
      <ChipsArray />
    </Center>
  )
