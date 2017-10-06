import React from 'react'

import { storiesOf } from '@storybook/react'
import Center from '../components/center'

import TemporaryDrawer from '../components/dev/drawers/TemporaryDrawer'
import PermanentDrawer from '../components/dev/drawers/PermanentDrawer'
import PersistentDrawer from '../components/dev/drawers/PersistentDrawer'
import MiniDrawer from '../components/dev/drawers/MiniDrawer'
import ResponsiveDrawer from '../components/dev/drawers/ResponsiveDrawer'

storiesOf('Drawers', module)
  .add('Temporary Drawer', () =>
    <Center>
      <TemporaryDrawer />
    </Center>
  )
  .add('Permanent Drawer', () =>
    <Center>
      <PermanentDrawer />
    </Center>
  )
  .add('Persistent Drawer', () =>
    <Center>
      <PersistentDrawer />
    </Center>
  )
  .add('Mini Variant Drawer', () =>
    <Center>
      <MiniDrawer />
    </Center>
  )
  .add('Responsive Drawer', () =>
    <Center>
      <ResponsiveDrawer />
    </Center>
  )
