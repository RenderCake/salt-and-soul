import React from 'react'
import { renderStylesToString } from 'emotion-server'

export default {
  tapHtml: html => renderStylesToString(html),
}
