import React from 'react'

import { storiesOf } from '@storybook/react'
import Center from '../components/center'

import ListDividers from '../components/dev/dividers/ListDividers'
import InsetDividers from '../components/dev/dividers/InsetDividers'

storiesOf('Dividers', module)
  .add('Inset Dividers', () =>
    <Center>
      <ListDividers />
    </Center>
  )
  .add('List Dividers', () =>
    <Center>
      <InsetDividers />
    </Center>
  )
