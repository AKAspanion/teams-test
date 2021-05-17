import { withErrorBoundary } from 'react-error-boundary';

import Routes from '../routes';
import { ErrorFallback } from '../views';

function App() {
  return (
    <main>
      <Routes />
    </main>
  );
}

export default withErrorBoundary(App, {
  FallbackComponent: ErrorFallback,
  onError(error, info) {
    console.log(error, info);
  },
});
