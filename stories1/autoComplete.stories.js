import React from 'react'

import { storiesOf } from '@storybook/react'
import Center from '../components/center'

import IntegrationAutosuggest from '../components/dev/auto-complete/IntegrationAutosuggest'


storiesOf('Auto Complete', module)
  .add('Auto Suggest', () =>
    <Center>
      <IntegrationAutosuggest />
    </Center>
  )
