import { renderStylesToString } from 'emotion-server'

export default {
  tapHtml: html => console.log('hello') || renderStylesToString(html),
}
