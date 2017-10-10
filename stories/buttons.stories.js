import React from 'react'

import { storiesOf } from '@storybook/react'
import Center from '../components/center'

import RaisedButtons from '../components/main/buttons/RaisedButtons'
import FlatButtons from '../components/main/buttons/FlatButtons'
import FloatButtons from '../components/main/buttons/FloatButtons'
import IconButtons from '../components/main/buttons/IconButtons'

storiesOf('Buttons', module)
  .add('Raised buttons', () =>
    <Center>
      <RaisedButtons />
    </Center>
  )
  .add('Flat buttons', () =>
    <Center>
      <FlatButtons />
    </Center>
  )
  .add('Float buttons', () =>
    <Center>
      <FloatButtons />
    </Center>
  )
  .add('Icon buttons', () =>
    <Center>
      <IconButtons />
    </Center>
  )
