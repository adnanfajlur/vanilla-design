import React from 'react'

import { storiesOf } from '@storybook/react'

import SimpleBadge from '../components/dev/badges/SimpleBadge'

storiesOf('Badges', module)
  .add('Simple Badge', () =>
    <div>
      <SimpleBadge />
    </div>
  )
