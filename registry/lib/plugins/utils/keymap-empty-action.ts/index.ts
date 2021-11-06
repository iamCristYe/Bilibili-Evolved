import { PluginMetadata } from '@/plugins/plugin'
import { KeyBindingAction } from 'registry/lib/components/utils/keymap/bindings'

export const plugin: PluginMetadata = {
  name: 'keymap.actions.empty',
  displayName: '快捷键扩展 - 无动作',
  description: '添加一个"无动作", 将按键绑定到这个上面就可以阻止原有的快捷键行为.',
  setup: ({ addData }) => {
    addData('keymap.actions', (actions: Record<string, KeyBindingAction>) => {
      actions.empty = {
        displayName: '无动作',
        prevent: true,
        run: none,
      }
    })
    addData('keymap.presets', (presetBase: Record<string, string>) => {
      presetBase.empty = ''
    })
  },
}
