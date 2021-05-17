import { withErrorBoundary } from 'react-error-boundary';

import Routes from '../routes';
import { ErrorFallback } from '../views';

function App() {
  return (
    <main className="bg-white dark:bg-gray-900 dark:text-white h-full">
      <div className="max-w-screen-lg mx-auto">
        <Routes />
      </div>
    </main>
  );
}

export default withErrorBoundary(App, {
  FallbackComponent: ErrorFallback,
  onError(error, info) {
    console.log(error, info);
  },
});
