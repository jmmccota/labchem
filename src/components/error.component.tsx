import {useRouteError} from 'react-router-dom';

export function ErrorComponent() {
    let error = useRouteError();
    console.error(error);
    // Uncaught ReferenceError: path is not defined
    return <div>Something went wrong! Go to <a href="/">home</a></div>;
}
