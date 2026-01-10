const Spinner = () => {
  return (
    <div className="flex items-center justify-center">
      <div
        className={`h-12 w-12 border-8 animate-spin rounded-full dark:border-gray-200 border-gray-500 border-t-current`}
        role="status"
      >
        <span className="sr-only">Cargando...</span>
      </div>
    </div>
  );
};

export default Spinner;
