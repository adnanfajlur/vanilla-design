import React from 'react'

import { storiesOf } from '@storybook/react'
import Center from '../components/center'

import AlertDialog from '../components/dev/dialogs/AlertDialog'
import AlertDialogSlide from '../components/dev/dialogs/AlertDialogSlide'
import ConfirmationDialog from '../components/dev/dialogs/ConfirmationDialog'
import FormDialog from '../components/dev/dialogs/FormDialog'
import FullScreenDialog from '../components/dev/dialogs/FullScreenDialog'
import SimpleDialog from '../components/dev/dialogs/SimpleDialog'

storiesOf('Dialogs', module)
  .add('Alerts', () =>
    <Center>
      <div>
        <AlertDialog />
        <AlertDialogSlide />
      </div>
    </Center>
  )
  .add('Confirmation Dialog', () =>
    <Center>
      <ConfirmationDialog />
    </Center>
  )
  .add('Form Dialog', () =>
    <Center>
      <FormDialog />
    </Center>
  )
  .add('Full-screen Dialog', () =>
    <Center>
      <FullScreenDialog />
    </Center>
  )
  .add('FormDialog', () =>
    <Center>
      <SimpleDialog />
    </Center>
  )
