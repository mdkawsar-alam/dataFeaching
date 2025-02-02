

import WithoutDependency from './components/useEffectTest/WithoutDependency';
import WithDepency from './components/useEffectTest/WithDepency';
import DataFeaching from './components/DataFeachiung/DataFeaching';

const App = () => {
  return (
    <div>

{/* <WithoutDependency/>
<WithDepency/> */}

<DataFeaching/>

    </div>
  )
}

export default App;