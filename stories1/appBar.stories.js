import React from 'react'

import { storiesOf } from '@storybook/react'

import SimpleAppBar from '../components/dev/app-bar/SimpleAppBar'
import ButtonAppBar from '../components/dev/app-bar/ButtonAppBar'
import TopBar from '../components/dev/app-bar/TopBar'

storiesOf('App Bars', module)
  .add('Simple app bar', () =>
    <div>
      <SimpleAppBar />
    </div>
  )
  .add('App with buttons', () =>
    <div>
      <ButtonAppBar />
    </div>
  )
  .add('Xcidic App Bar', () =>
    <div>
      <TopBar />
    </div>
  )
