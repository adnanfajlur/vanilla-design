import React from 'react'

import { storiesOf } from '@storybook/react'
import Center from '../components/center'

import PaperSheet from '../components/dev/paper/PaperSheet'

storiesOf('Papers', module)
  .add('Paper', () =>
    <Center>
      <PaperSheet />
    </Center>
  )
