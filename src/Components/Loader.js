import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

const withLoader = WrappedComponent => props => {
  const { loading, ...otherProps } = props;
  const opacity = loading ? 0.5 : 1;

  return (
    <div style={{ position: "relative" }}>
      <div style={{ opacity }}>
        <WrappedComponent {...otherProps} />
      </div>
      {loading && (
        <div
          style={{
            display: "inline-block",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
          }}
        >
          <CircularProgress color="secondary" />
        </div>
      )}
    </div>
  );
};
export default withLoader;
