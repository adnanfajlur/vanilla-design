import React from 'react'

import { storiesOf } from '@storybook/react'
import Center from '../components/center'

import SimpleBadge from '../components/dev/badges/SimpleBadge'

storiesOf('Badges', module)
  .add('Simple Badge', () =>
    <Center>
      <SimpleBadge />
    </Center>
  )
