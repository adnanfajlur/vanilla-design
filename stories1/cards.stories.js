import React from 'react'

import { storiesOf } from '@storybook/react'
import Center from '../components/center'

import SimpleCard from '../components/dev/cards/SimpleCard'
import SimpleMediaCard from '../components/dev/cards/SimpleMediaCard'
import MediaControlCard from '../components/dev/cards/MediaControlCard'
import RecipeReviewCard from '../components/dev/cards/RecipeReviewCard'

storiesOf('Cards', module)
  .add('Simple Card', () =>
    <Center>
      <SimpleCard />
    </Center>
  )
  .add('Media Card', () =>
    <Center>
      <SimpleMediaCard />
    </Center>
  )
  .add('UI Controls Card', () =>
    <Center>
      <MediaControlCard />
    </Center>
  )
  .add('Complex Interaction Card', () =>
    <Center>
      <RecipeReviewCard />
    </Center>
  )
