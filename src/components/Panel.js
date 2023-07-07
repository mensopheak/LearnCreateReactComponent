import classNames from "classnames";

function Panel({ children, className, ...rest }) {
  const classes = classNames(
    "border border-gray-400 p-1 rounded-md",
    className
  );

  return (
    <div {...rest} className={classes}>
      {children}
    </div>
  );
}

export default Panel;
