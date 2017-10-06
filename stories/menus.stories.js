import React from 'react'

import { storiesOf } from '@storybook/react'
import Center from '../components/center'

import SimpleMenu from '../components/dev/menus/SimpleMenu'
import SimpleListMenu from '../components/dev/menus/SimpleListMenu'
import LongMenu from '../components/dev/menus/LongMenu'

storiesOf('Menus', module)
  .add('Simple Menus', () =>
    <Center>
      <SimpleMenu />
    </Center>
  )
  .add('Selected Menus', () =>
    <Center>
      <SimpleListMenu />
    </Center>
  )
  .add('Max height menus', () =>
    <Center>
      <LongMenu />
    </Center>
  )
  
