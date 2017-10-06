import React from 'react'

import { storiesOf } from '@storybook/react'

import IntegrationAutosuggest from '../components/dev/auto-complete/IntegrationAutosuggest'

storiesOf('Auto Complete', module)
  .add('Auto Suggest', () =>
    <div>
      <IntegrationAutosuggest />
    </div>
  )
