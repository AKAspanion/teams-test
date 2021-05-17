import { withErrorBoundary } from 'react-error-boundary';

import Routes from '../routes';
import { ErrorFallback } from '../views';

function App() {
  return (
    <main className="bg-gray-200 bg-opacity-40 dark:bg-gray-700 text-gray-500 dark:text-white h-full">
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
