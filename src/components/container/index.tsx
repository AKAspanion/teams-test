const Container = ({
  children,
  className = '',
}: React.PropsWithChildren<ContainerProps>) => {
  return (
    <section className="min-h-screen">
      <div className="md:p-6 p-3">
        <div
          className={`bg-white dark:bg-gray-900 rounded-md overflow-hidden ${className}`.trim()}>
          {children}
        </div>
      </div>
    </section>
  );
};

export default Container;
