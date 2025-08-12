import './App.css';
import UseStatePOC from './Hooks/usestate/useStatePOC';
import UseEffectPOC from './Hooks/useEffect/useEffectPOC';
import UseRefPOC from './Hooks/useRef/useRefPoc';
import ReactMemoParent from './ReactMemo/ReactMemoParrent';
import UseMemoPOC from './Hooks/useMemo/useMemoPOC';
import UseCallbackPOC from './Hooks/useCallback/useCallbackPoc';
import UseCallbackUseMemoReactMemo from './Hooks/useMemo_useCallback_ReactMemo/usememo_useCallback_ReactMemo';
import UseReducerPOC from './Hooks/useReducer/useReducerPOC';
import { UseContextPOCProvider } from './Hooks/useContext/useContextPOCProvider'; // Capital U
import CounterRead from './Hooks/useContext/contextRead';
import CounterUpdater from './Hooks/useContext/contextupdate';
import { ContextAPIProviderConsumer } from './ContextAPIProviderCosumer/ContextAPIProviderConsumer';
import Consumer from './ContextAPIProviderCosumer/Consumer';
import CodeSplittingLazyLoading from './CodeSplittingAndLazyLoading/codeSplittingLazyLoading';
import ReactFibreShowCase from './ReactFibre/ReactFibreShowCase';
import HOC from './HOC/HOC';
import DebouncePOC from './Debouncing/Debouncing';
import ThrottlePOC from './Throtling/Throtling';
import ClickOutsideCustomHookPOC from './CustomeHooks/ClickOutSidePOCCustomHooksPOC';

function App() {
  return (
    <div className="App">
      React POCs whole React 

      <UseStatePOC />
      <hr />
      <UseEffectPOC />
      <hr/>
      <UseRefPOC/>
      <hr/>
      <ReactMemoParent/>
      <hr/>
      <UseMemoPOC/>
      <hr/>
      <UseCallbackPOC/>
      <hr/>
      <UseCallbackUseMemoReactMemo/>
      <hr/>
      <UseReducerPOC/>
      <hr/>
      <UseContextPOCProvider >
         <CounterRead />
        <CounterUpdater />
      </UseContextPOCProvider>
      <hr></hr>
      <ContextAPIProviderConsumer>
        <Consumer/>
      </ContextAPIProviderConsumer>
      <hr></hr>
      <CodeSplittingLazyLoading/>

      <hr></hr>
      <ReactFibreShowCase/>
      <hr></hr>
      <HOC/>
      <hr></hr>
      <DebouncePOC/>
      <hr></hr>
      <ThrottlePOC/>
      <hr></hr>
      <ClickOutsideCustomHookPOC/>
      <hr></hr>
      <hr></hr>
    </div>
  );
}

export default App;
