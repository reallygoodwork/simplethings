import React from 'react';

function App() {

  const [hasSavedSpec, setHasSavedSpec] = React.useState<boolean>(false);
  const [spec, setSpec] = React.useState<string>('');

  const onCreate = () => {
    parent.postMessage(
      { pluginMessage: { type: "GENERATE_SPEC" } },
      "*"
    );
  };

  const useSaved = () => {
    parent.postMessage(
      { pluginMessage: { type: "USE_SAVED" } },
      "*"
    );
  }


  React.useEffect(() => {
    window.onmessage = (event) => {
      const { type, spec } = event.data.pluginMessage;
      if (type === "SPEC") {
        setSpec(`export const ${spec.name} = ${JSON.stringify(spec, null, 2)}`);
      } else if (type === "SAVED") {
        setSpec(`export const ${spec.name} = ${JSON.stringify(spec, null, 2)}`);
      } else if (type === "HAS_SAVED") {
        setHasSavedSpec(true);
      } else if (type === "CLEAR_SAVED") {
        setHasSavedSpec(false);
      }
    };
  }, []);

  return <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
    <div style={{ display: 'flex', gap: '12px' }}>
      <button disabled={!hasSavedSpec} style={{ flex: 1, height: 72, backgroundColor: 'greenyellow', appearance: 'none', border: 'none' }} onClick={useSaved}>Use saved spec</button>
      <button style={{ flex: 1, height: 72, backgroundColor: 'olivedrab', appearance: 'none', border: 'none' }} onClick={onCreate}>Generate New Spec</button>
      </div>
    <textarea value={spec} id="spec" style={{ width: '100%', height: '500px' }} readOnly={true}></textarea>
  </div>;
}

export default App;