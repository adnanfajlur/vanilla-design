import React from 'react'

import { storiesOf } from '@storybook/react'

import FlatButtons from '../components/dev/buttons/FlatButtons'
import RaisedButtons from '../components/dev/buttons/RaisedButtons'
import FloatingActionButtons from '../components/dev/buttons/FloatingActionButtons'
import IconButtons from '../components/dev/buttons/IconButtons'
import ButtonBases from '../components/dev/buttons/ButtonBases'

storiesOf('Buttons', module)
  .add('Flat buttons', () =>
    <div>
      <FlatButtons />
    </div>
  )
  .add('Raised buttons', () =>
    <div>
      <RaisedButtons />
    </div>
  )
  .add('Floating Action buttons', () =>
    <div>
      <FloatingActionButtons />
    </div>
  )
  .add('Icon buttons', () =>
    <div>
      <IconButtons />
    </div>
  )
  .add('Button base', () =>
    <div>
      <ButtonBases />
    </div>
  )
