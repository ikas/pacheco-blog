import { configure } from '@storybook/react'

// automatically import all files ending in *.stories.js
function requireAll(requireContext) {
  return requireContext.keys().map(requireContext)
}

function loadStories() {
  requireAll(require.context("..", true, /-story\.js?$/))
}

configure(loadStories, module)