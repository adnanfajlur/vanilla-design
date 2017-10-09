import React from 'react'

import { storiesOf } from '@storybook/react'
import Center from '../components/center'

import CircularIndeterminate from '../components/dev/progress/CircularIndeterminate'
import CircularFab from '../components/dev/progress/CircularFab'
import CircularDeterminate from '../components/dev/progress/CircularDeterminate'
import LinearIndeterminate from '../components/dev/progress/LinearIndeterminate'
import LinearDeterminate from '../components/dev/progress/LinearDeterminate'
import LinearBuffer from '../components/dev/progress/LinearBuffer'
import LinearQuery from '../components/dev/progress/LinearQuery'

storiesOf('Progress', module)
  .add('Circular', () =>
    <Center>
    	<div>
    		<span>Indeterminate</span>
	      <CircularIndeterminate />

    		<span>Interactive Integration</span>
	      <CircularFab />
	      
    		<span>Determinate</span>
	      <CircularDeterminate />
	     </div>
    </Center>
  )
  .add('Linear', () =>
    <Center>
    	<div>
    		<span>Indeterminate</span>
	      <LinearIndeterminate />

    		<span>Indeterminate</span>
	      <LinearDeterminate />
	      
    		<span>Buffer</span>
	      <LinearBuffer />

    		<span>Query</span>
	      <LinearQuery />
	     </div>
    </Center>
  )
