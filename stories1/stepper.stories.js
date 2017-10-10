import React from 'react'

import { storiesOf } from '@storybook/react'
import Center from '../components/center'

import TextMobileStepper from '../components/dev/stepper/TextMobileStepper'
import DotsMobileStepper from '../components/dev/stepper/DotsMobileStepper'
import ProgressMobileStepper from '../components/dev/stepper/ProgressMobileStepper'

storiesOf('Stepper', module)
  .add('Text', () =>
    <Center>
      <TextMobileStepper />
    </Center>
  )
  .add('Dots', () =>
    <Center>
      <DotsMobileStepper />
    </Center>
  )
  .add('Progress', () =>
    <Center>
      <ProgressMobileStepper />
    </Center>
  )
