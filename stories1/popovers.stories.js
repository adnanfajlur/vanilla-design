import React from 'react'

import { storiesOf } from '@storybook/react'
import Center from '../components/center'

import AnchorPlayground from '../components/dev/popovers/AnchorPlayground'

storiesOf('Popovers', module)
  .add('Anchor playground', () =>
    <Center>
      <AnchorPlayground />
    </Center>
  )
