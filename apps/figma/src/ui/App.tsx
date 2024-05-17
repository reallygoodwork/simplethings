import React from 'react';

function App() {

  const [spec, setSpec] = React.useState<string>('');

  const onCreate = () => {
    parent.postMessage(
      { pluginMessage: { type: "GENERATE_SPEC" } },
      "*"
    );
  };

  React.useEffect(() => {
    window.onmessage = (event) => {
      const { type, spec } = event.data.pluginMessage;
      if (type === "SPEC") {
        setSpec(JSON.stringify(spec, null, 2));
      }
    };
  }, []);

  return <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
    <button style={{ height: 72, backgroundColor: 'greenyellow', appearance: 'none', border: 'none' }} onClick={onCreate}>Generate Spec</button>
    <textarea value={spec} id="spec" style={{ width: '100%', height: '500px' }} readOnly={true}></textarea>
  </div>;
}

export default App;