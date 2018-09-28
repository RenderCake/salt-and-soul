import React from 'react'
import { renderStylesToString } from 'emotion-server'

export default {
  renderToHtml: (render, Comp) => renderStylesToString(render(<Comp />)),
}
