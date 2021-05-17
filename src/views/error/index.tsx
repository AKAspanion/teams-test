import React from 'react';
import { FallbackProps } from 'react-error-boundary';

import { Container } from '../../components';

const ErrorFallback = ({ error }: FallbackProps) => {
  return (
    <Container>
      <div className="max-w-screen-lg mx-auto" role="alert">
        <p className="text-3xl">Something went wrong</p>
        <pre className="pb-4">{error.message}</pre>
      </div>
    </Container>
  );
};

export default ErrorFallback;
