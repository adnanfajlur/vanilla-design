import React from 'react'

import { storiesOf } from '@storybook/react'

import IconAvatars from '../components/dev/avatars/IconAvatars'
import LetterAvatars from '../components/dev/avatars/LetterAvatars'
import ImageAvatars from '../components/dev/avatars/ImageAvatars'

storiesOf('Avatars', module)
  .add('Image Avatars', () =>
    <div>
      <ImageAvatars />
    </div>
  )
  .add('Icon Avatars', () =>
    <div>
      <IconAvatars />
    </div>
  )
  .add('Letter Avatars', () =>
    <div>
      <LetterAvatars />
    </div>
  )