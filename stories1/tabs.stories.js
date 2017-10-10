import React from 'react'

import { storiesOf } from '@storybook/react'
import Center from '../components/center'

import BasicTabs from '../components/dev/tabs/BasicTabs'
import BasicTabsWrappedLabel from '../components/dev/tabs/BasicTabsWrappedLabel'
import CenteredTabs from '../components/dev/tabs/CenteredTabs'
import DisabledTabs from '../components/dev/tabs/DisabledTabs'
import FullWidthTabs from '../components/dev/tabs/FullWidthTabs'
import IconLabelTabs from '../components/dev/tabs/IconLabelTabs'
import IconTabs from '../components/dev/tabs/IconTabs'
import ScrollableTabsButtonAuto from '../components/dev/tabs/ScrollableTabsButtonAuto'
import ScrollableTabsButtonForce from '../components/dev/tabs/ScrollableTabsButtonForce'
import ScrollableTabsButtonPrevent from '../components/dev/tabs/ScrollableTabsButtonPrevent'

storiesOf('Tabs', module)
  .add('Basic', () =>
    <Center>
      <BasicTabs />
    </Center>
  )
  .add('Wrapped Labels', () =>
    <Center>
      <BasicTabsWrappedLabel />
    </Center>
  )
  .add('Full width', () =>
    <Center>
      <CenteredTabs />
    </Center>
  )
  .add('Centered', () =>
    <Center>
      <DisabledTabs />
    </Center>
  )
  .add('Automatic Scroll Buttons', () =>
    <Center>
      <FullWidthTabs />
    </Center>
  )
  .add('Forced Scroll Buttons', () =>
    <Center>
      <IconLabelTabs />
    </Center>
  )
  .add('Prevent Scroll Buttons', () =>
    <Center>
      <IconTabs />
    </Center>
  )
  .add('Icon Tabs', () =>
    <Center>
      <ScrollableTabsButtonAuto />
    </Center>
  )
  .add('icon', () =>
    <Center>
      <ScrollableTabsButtonForce />
    </Center>
  )
  .add('Disabled Tab', () =>
    <Center>
      <ScrollableTabsButtonPrevent />
    </Center>
  )
