import React from 'react'

import { storiesOf } from '@storybook/react'
import Center from '../components/center'

import IconAvatars from '../components/dev/avatars/IconAvatars'
import LetterAvatars from '../components/dev/avatars/LetterAvatars'
import ImageAvatars from '../components/dev/avatars/ImageAvatars'

storiesOf('Avatars', module)
  .add('Image Avatars', () =>
    <Center>
      <ImageAvatars />
    </Center>
  )
  .add('Icon Avatars', () =>
    <Center>
      <IconAvatars />
    </Center>
  )
  .add('Letter Avatars', () =>
    <Center>
      <LetterAvatars />
    </Center>
  )