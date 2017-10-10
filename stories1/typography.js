import React from 'react'
import Typography from 'material-ui/Typography'

import { storiesOf } from '@storybook/react'
import Center from '../components/center'

storiesOf('Typography', module)
  .add('Typography', () =>
    <Center>
    	<Typography type="display4" gutterBottom>
        Display 4
      </Typography>
    </Center>
  )
