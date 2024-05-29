import React from 'react'
import { javascript } from '@codemirror/lang-javascript'
import CodeMirror from '@uiw/react-codemirror'

function App() {
  const [hasSavedSpec, setHasSavedSpec] = React.useState<boolean>(false)
  const [spec, setSpec] = React.useState<string>('')

  const onCreate = () => {
    parent.postMessage({ pluginMessage: { type: 'GENERATE_SPEC' } }, '*')
  }

  const useSaved = () => {
    parent.postMessage({ pluginMessage: { type: 'USE_SAVED' } }, '*')
  }

  const generateTypo = () => {
    parent.postMessage({ pluginMessage: { type: 'GENERATE_TYPOGRAPHY' } }, '*')
  }

  React.useEffect(() => {
    window.onmessage = (event) => {
      const { type, spec, typography } = event.data.pluginMessage
      if (type === 'SPEC') {
        setSpec(`export const ${spec.name} = ${JSON.stringify(spec, null, 2)}`)
      } else if (type === 'SAVED') {
        setSpec(`export const ${spec.name} = ${JSON.stringify(spec, null, 2)}`)
      } else if (type === 'HAS_SAVED') {
        setHasSavedSpec(true)
      } else if (type === 'CLEAR_SAVED') {
        setHasSavedSpec(false)
      } else if (type === 'TYPOGRAPHY') {
        setSpec(`export const typography = ${JSON.stringify(typography, null, 2)}`)
      }
    }
  }, [])



  return (
    <div className="flex flex-col antialiased bg-white h-dvh">
      <div className="flex gap-2 bg-darkgreen p-4">
        <button
          disabled={!hasSavedSpec}
          className="bg-brand text-dark flex items-center gap-1.5 rounded py-2.5 px-5 text-sm font-normal tracking-tight"
          onClick={useSaved}
        >
          <div className="i-ph-floppy-disk-back-duotone" /> Use saved spec
        </button>

        <button
          className="bg-brand hover:bg-brand/90 text-dark flex items-center gap-1.5 rounded py-2.5 px-5 text-sm font-normal tracking-tight"
          onClick={onCreate}
        >
          <div className="i-ph-magic-wand-duotone" />
           Generate New Spec
        </button>
        <button
          className="bg-brand text-dark flex items-center gap-1.5 rounded py-2.5 px-5 text-sm font-normal tracking-tight"
          onClick={() => {
            navigator.clipboard.writeText(this.state.textToCopy)
          }}
        >
          <div className="i-ph-clipboard-text-duotone" />
          Copy
        </button>
      </div>
      <div className="flex-1 bg-darkgreen">
        <CodeMirror theme={'dark'} height='100%' maxHeight='800' value={spec} className='flex-1' extensions={[javascript({ jsx: true })]} />
        </div>
    </div>
  )
}

export default App
