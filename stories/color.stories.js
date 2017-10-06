import React from 'react'

import { storiesOf } from '@storybook/react'
import Center from '../components/center'

import Color from '../components/dev/colors/Color'

storiesOf('Colors', module)
  .add('Material colors', () =>
    <Center>
      <Color />
    </Center>
  )
