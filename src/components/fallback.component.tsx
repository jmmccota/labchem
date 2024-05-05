import { FallbackProps } from "react-error-boundary";

export default function fallbackRender({ error }: FallbackProps) {
    console.error(error);
    return (
      <div role="alert">
        <p>Something went wrong:</p>
        <pre style={{ color: "red" }}>{error.message}</pre>
      </div>
    );
  }