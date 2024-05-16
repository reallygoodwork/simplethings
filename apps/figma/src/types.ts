import { EventHandler } from '@create-figma-plugin/utilities'

export interface CreateSpecHandler extends EventHandler {
  name: 'CREATE_SPEC'
}

export interface CloseHandler extends EventHandler {
  name: 'CLOSE'
  handler: () => void
}