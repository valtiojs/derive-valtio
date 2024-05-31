import { derive } from 'derive-valtio';
import { proxy, useSnapshot } from 'valtio';

const state = proxy({ count: 0 });
const derived = derive({ double: (get) => get(state).count * 2 });

const Counter = () => {
  const snap = useSnapshot(derived);
  return (
    <>
      count: {snap.double} <button onClick={() => ++state.count}>inc</button>
    </>
  );
};

export default function App() {
  return <Counter />;
}
