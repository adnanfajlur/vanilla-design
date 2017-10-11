import React from 'react'

import { storiesOf } from '@storybook/react'
import Center from '../components/center'

import BasicTable from '../components/main/table/BasicTable'
import EnhancedTable from '../components/main/table/EnhancedTable'

storiesOf('Tables', module)
  .add('Basic Table', () =>
    <Center>
      <BasicTable />
    </Center>
  )
  .add('Enhanced Table', () =>
    <Center>
      <EnhancedTable />
    </Center>
  )
