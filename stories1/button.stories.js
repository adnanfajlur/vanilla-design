import React from 'react'

import { storiesOf } from '@storybook/react'
import Center from '../components/center'

import FlatButtons from '../components/dev/buttons/FlatButtons'
import RaisedButtons from '../components/dev/buttons/RaisedButtons'
import FloatingActionButtons from '../components/dev/buttons/FloatingActionButtons'
import IconButtons from '../components/dev/buttons/IconButtons'
import ButtonBases from '../components/dev/buttons/ButtonBases'

storiesOf('Buttons', module)
  .add('Flat buttons', () =>
    <Center>
      <FlatButtons />
    </Center>
  )
  .add('Raised buttons', () =>
    <Center>
      <RaisedButtons />
    </Center>
  )
  .add('Floating Action buttons', () =>
    <Center>
      <FloatingActionButtons />
    </Center>
  )
  .add('Icon buttons', () =>
    <Center>
      <IconButtons />
    </Center>
  )
  .add('Button base', () =>
    <Center>
      <ButtonBases />
    </Center>
  )
