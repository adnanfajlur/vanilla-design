import React from 'react'

import { storiesOf } from '@storybook/react'

import Color from '../components/dev/colors/Color'

storiesOf('Colors', module)
  .add('Material colors', () =>
    <div>
      <Color />
    </div>
  )
