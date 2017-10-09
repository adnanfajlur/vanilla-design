import React from 'react'

import { storiesOf } from '@storybook/react'
import Center from '../components/center'

import SimpleSelect from '../components/dev/selects/SimpleSelect'
import NativeSelect from '../components/dev/selects/NativeSelect'
import MultipleSelect from '../components/dev/selects/MultipleSelect'
import DialogSelect from '../components/dev/selects/DialogSelect'

storiesOf('Selects', module)
  .add('Simple', () =>
    <Center>
      <SimpleSelect />
    </Center>
  )
  .add('Native Select', () =>
    <Center>
      <NativeSelect />
    </Center>
  )
  .add('Multiple Select', () =>
    <Center>
      <MultipleSelect />
    </Center>
  )
  .add('Dialog Select', () =>
    <Center>
      <DialogSelect />
    </Center>
  )
