import { ErrorWidget } from "./ErrorWidget";
import React from "react";
/**
 * Source: https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary
 */
export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  // error: Error, info: React.ErrorInfo
  componentDidCatch(error, info) {
    // TODO: Report error to logging API
    console.log("Error:",error,"ErrorInfo:",info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <ErrorWidget/>;
    }

    return this.props.children;
  }
}