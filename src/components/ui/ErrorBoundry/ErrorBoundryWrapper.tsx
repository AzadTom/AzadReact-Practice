import  { ReactNode } from 'react'
import { ErrorBoundary, useErrorBoundary } from 'react-error-boundary'

type TProps = {
    children:ReactNode;
}

const ErrorBoundryWrapper = (props:TProps) => {
  return (
    <ErrorBoundary fallback={<ErrorFallback/>}>
        {props.children}
    </ErrorBoundary>
  )
}

export default ErrorBoundryWrapper;


function ErrorFallback() {

  const { resetBoundary } = useErrorBoundary();

  return (
    <div role="alert" className='flex flex-col gap-2 items-center justify-center p-4'>
      <pre style={{ color: "red" }}>Something went wrong</pre>
      <button onClick={resetBoundary} className='text-xs bg-[#242424] border border-[#313131] px-2.5 py-1 rounded-md'>Try again</button>
    </div>
  );
}