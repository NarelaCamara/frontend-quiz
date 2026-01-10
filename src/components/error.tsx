const ErrorScreen = () => {
  return (
    <div className="min-h-fit flex flex-col items-center justify-center   p-4 sm:p-6 lg:p-8">
      <div className="max-w-md w-full text-center">
        {/* Icono de advertencia o error (puedes usar un SVG o un icono de librería como Heroicons) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-20 w-20 mx-auto text-red-500 mb-6 animate-bounce-slow"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>

        <h1 className="text-4xl sm:text-5xl font-medium mb-4 text-[#626C7F] dark:text-[#FFFFFF] text-[20px]  pb-6">
          ¡Algo salió mal!
        </h1>

        <p className="text-lg sm:text-xl  mb-6 text-[#626C7F] dark:text-[#FFFFFF] text-[20px] pb-6 ">
          Disculpe las molestias. Estamos trabajando en ello para solucionarlo
          lo antes posible.
        </p>
      </div>
    </div>
  );
};

export default ErrorScreen;
