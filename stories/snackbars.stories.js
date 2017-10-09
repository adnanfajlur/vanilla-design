import React from 'react'

import { storiesOf } from '@storybook/react'
import Center from '../components/center'

import SimpleSnackbar from '../components/dev/snackbars/SimpleSnackbar'
import LongTextSnackbar from '../components/dev/snackbars/LongTextSnackbar'
import PositionedSnackbar from '../components/dev/snackbars/PositionedSnackbar'
import DirectionSnackbar from '../components/dev/snackbars/DirectionSnackbar'
import FadeSnackbar from '../components/dev/snackbars/FadeSnackbar'

storiesOf('Snackbars', module)
  .add('Simple', () =>
    <Center>
      <SimpleSnackbar />
    </Center>
  )
  .add('Message Length', () =>
    <Center>
      <LongTextSnackbar />
    </Center>
  )
  .add('Positioned', () =>
    <Center>
      <PositionedSnackbar />
    </Center>
  )
  .add('Direction', () =>
    <Center>
      <DirectionSnackbar />
    </Center>
  )
  .add('Fade', () =>
    <Center>
      <FadeSnackbar />
    </Center>
  )
