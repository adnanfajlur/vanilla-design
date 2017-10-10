import React from 'react'

import { storiesOf } from '@storybook/react'
import Center from '../components/center'

import TypographyTheme from '../components/main/typography/TypographyTheme'

storiesOf('Typography', module)
  .add('Typography', () =>
    <Center>
      <TypographyTheme />
    </Center>
  )
