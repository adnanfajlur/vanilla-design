/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import { configure } from '@storybook/react'
import '../static/styles/normalize.css'
import '../static/styles/base.css'

const req = require.context('../stories/', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
