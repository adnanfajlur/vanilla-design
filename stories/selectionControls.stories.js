import React from 'react'

import { storiesOf } from '@storybook/react'
import Center from '../components/center'

import Checkboxes from '../components/dev/selection-controls/Checkboxes'
import CheckboxesGroup from '../components/dev/selection-controls/CheckboxesGroup'
import RadioButtonsGroup from '../components/dev/selection-controls/RadioButtonsGroup'
import RadioButtons from '../components/dev/selection-controls/RadioButtons'
import Switches from '../components/dev/selection-controls/Switches'
import SwitchLabels from '../components/dev/selection-controls/SwitchLabels'

storiesOf('Selection Controls', module)
  .add('Checkboxes', () =>
    <Center>
    	<div>
	      <Checkboxes />
	      <CheckboxesGroup />
      </div>
    </Center>
  )
  .add('Radio Buttons', () =>
    <Center>
    	<div>
	      <RadioButtonsGroup />
	      <RadioButtons />
      </div>
    </Center>
  )
  .add('Switches', () =>
    <Center>
    	<div>
	      <Switches />
	      <SwitchLabels />
      </div>
    </Center>
  )
