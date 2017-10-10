import React from 'react'

import { storiesOf } from '@storybook/react'
import Center from '../components/center'

import LabelBottomNavigation from '../components/dev/bottom-navigation/LabelBottomNavigation'
import SimpleBottomNavigation from '../components/dev/bottom-navigation/SimpleBottomNavigation'

storiesOf('Bottom Navigation', module)
  .add('Bottom Navigation', () =>
    <Center>
      <LabelBottomNavigation />
    </Center>
  )
  .add('Bottom Navigation with no label', () =>
    <Center>
      <SimpleBottomNavigation />
    </Center>
  )
