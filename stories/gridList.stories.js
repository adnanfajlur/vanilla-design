import React from 'react'

import { storiesOf } from '@storybook/react'
import Center from '../components/center'

import ImageGridList from '../components/dev/grid-list/ImageGridList'
import TitlebarGridList from '../components/dev/grid-list/TitlebarGridList'
import AdvencedGridList from '../components/dev/grid-list/AdvencedGridList'
import SingleLineGridList from '../components/dev/grid-list/SingleLineGridList'

storiesOf('Grid List', module)
  .add('Image Only Grid List', () =>
    <Center>
      <ImageGridList />
    </Center>
  )
  .add('Grid List With Titlebars', () =>
    <Center>
      <TitlebarGridList />
    </Center>
  )
  .add('Advanced Grid List', () =>
    <Center>
      <AdvencedGridList />
    </Center>
  )
  .add('Single Line Grid List', () =>
    <Center>
      <SingleLineGridList />
    </Center>
  )
