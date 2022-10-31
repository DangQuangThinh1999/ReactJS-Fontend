
import { ViewportProvider, MyComponent } from '~/components/Popper/Responsive';

function App() {
    return (
        <ViewportProvider>
            <MyComponent />
        </ViewportProvider>
    );
}

export default App;
