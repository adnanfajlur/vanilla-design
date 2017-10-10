import React from 'react'

import { storiesOf } from '@storybook/react'
import Center from '../components/center'

import AppBarButton from '../components/main/app-bar/AppBarButton'

storiesOf('App Bars', module)
  .add('Buttons', () =>
    <Center>
      <AppBarButton />
    </Center>
  )
