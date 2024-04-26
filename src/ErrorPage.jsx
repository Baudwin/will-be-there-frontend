import {useRouteError} from "react-router-dom";
import {Navigation} from "./components/Navigation";

export function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <Navigation />
      <div
        id="error-page"
        className="w-full h-screen place-content-center text-center wrapper error-page -mt-12"
      >
        <h1 className="lg:text-3xl text-2xl tracking-tight font-lt">
          Something went wrong.
        </h1>
        <p className="text-sm text-green-900 pt-3">
          <p className="font-smbld">{error.statusText || error.message}</p>
        </p>
      </div>
    </>
  );
}
