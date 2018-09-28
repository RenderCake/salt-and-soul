import { renderStylesToString } from 'emotion-server'

console.log('hello')

export default {
  tapHtml: html => console.log('hello') || renderStylesToString(html),
}
