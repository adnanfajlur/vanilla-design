import React from 'react'

import { storiesOf } from '@storybook/react'

import IntegrationAutosuggest from '../components/dev/auto-complete/IntegrationAutosuggest'
import Center from '../components/center'

storiesOf('Auto Complete', module)
  .add('Auto Suggest', () =>
    <Center>
      <IntegrationAutosuggest />
    </Center>
  )
