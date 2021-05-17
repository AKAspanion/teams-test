import cs from 'classnames';
import { useEffect } from 'react';
import { FaChevronUp } from 'react-icons/fa';
import { BsMoon, BsSun } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { withErrorBoundary } from 'react-error-boundary';

import Routes from '../routes';
import { ErrorFallback } from '../views';
import { setTheme } from '../redux/actions';
import { selectTheme } from '../redux/selectors/';

function App() {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <main className="bg-gray-200 bg-opacity-40 dark:bg-gray-700 text-gray-500 dark:text-white h-full relative">
      <div className="max-w-screen-lg mx-auto">
        <Routes />
      </div>
      <div
        className={cs(
          'bg-white h-18 w-10 hover:translate-y-0 translate-y-1/2  fixed bottom-0 left-1/2',
          'transform -translate-x-1/2 cursor-pointer rounded-full rounded-b-none overflow-hidden',
          'dark:text-white dark:bg-gray-800',
        )}>
        <div className="flex h-8 items-center justify-center">
          <FaChevronUp />
        </div>
        <div
          className="flex h-8 items-center justify-center"
          onClick={() =>
            dispatch(setTheme(theme === 'dark' ? 'light' : 'dark'))
          }>
          {theme === 'dark' ? <BsSun /> : <BsMoon />}
        </div>
        <div className="flex h-4"></div>
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
