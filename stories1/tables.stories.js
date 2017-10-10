import React from 'react'

import { storiesOf } from '@storybook/react'
import Center from '../components/center'

import BasicTable from '../components/dev/tables/BasicTable'
import EnhancedTable from '../components/dev/tables/EnhancedTable'

storiesOf('Tables', module)
  .add('Basic Table', () =>
    <Center>
      <BasicTable />
    </Center>
  )
  .add('Sorting and Selecting', () =>
    <Center>
      <EnhancedTable />
    </Center>
  )
