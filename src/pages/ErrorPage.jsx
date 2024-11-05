import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    
      <div id="error-page" className="flex items-center flex-col h-screen justify-center">
        <h1 className="font-bold text-3xl tracking-wide mb-[2rem]">Oops!</h1>
        <p className="mb-[2rem] text-xl">Sorry, an unexpected error has occurred.</p>
        <p className="text-gray-500">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
  );
}
