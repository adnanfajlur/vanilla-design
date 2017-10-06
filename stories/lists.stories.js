import React from 'react'

import { storiesOf } from '@storybook/react'
import Center from '../components/center'

import SimpleList from '../components/dev/lists/SimpleList'
import FolderList from '../components/dev/lists/FolderList'
import InsetList from '../components/dev/lists/InsetList'
import NestedList from '../components/dev/lists/NestedList'
import PinnedSubheaderList from '../components/dev/lists/PinnedSubheaderList'
import CheckboxList from '../components/dev/lists/CheckboxList'
import CheckboxListSecondary from '../components/dev/lists/CheckboxListSecondary'
import SwitchListSecondary from '../components/dev/lists/SwitchListSecondary'
import InteractiveList from '../components/dev/lists/InteractiveList'

storiesOf('Lists', module)
.add('Simple List', () =>
  <Center>
    <SimpleList />
  </Center>
)
.add('Folder List', () =>
  <Center>
    <FolderList />
  </Center>
)
.add('Inset List', () =>
  <Center>
    <InsetList />
  </Center>
)
.add('Nested List', () =>
  <Center>
    <NestedList />
  </Center>
)
.add('Pinned Subheader List', () =>
  <Center>
    <PinnedSubheaderList />
  </Center>
).add('Checkbox List', () =>
  <Center>
    <CheckboxList />
  </Center>
)
.add('Checkbox List Secondary', () =>
  <Center>
    <CheckboxListSecondary />
  </Center>
)
.add('Switch List', () =>
  <Center>
    <SwitchListSecondary />
  </Center>
)
.add('Interactive List', () =>
  <Center>
    <InteractiveList />
  </Center>
)
