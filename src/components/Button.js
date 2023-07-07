import classNames from "classnames";
import PropTypes from "prop-types";

function Button({
  primary,
  secondary,
  warning,
  success,
  danger,
  rounded,
  outline,
  children,
  ...rest
}) {
  if (!primary && !secondary && !warning && !success && !danger) {
    primary = true;
  }

  const classes = classNames(
    "px-4 py-1 border",
    {
      "bg-blue-500 text-white": !outline && primary,
      "bg-gray-500 text-white": !outline && secondary,
      "bg-yellow-500 text-white": !outline && warning,
      "bg-green-500 text-white": !outline && success,
      "bg-red-500 text-white": !outline && danger,
      "rounded-full": rounded,
      "bg-white text-blue-500": outline && primary,
      "bg-white text-gray-500": outline && secondary,
      "bg-white text-yellow-500": outline && warning,
      "bg-white text-green-500": outline && success,
      "bg-white text-red-500": outline && danger,
      "border-blue-600": primary,
      "border-gray-600": secondary,
      "border-yellow-600": warning,
      "border-green-600": success,
      "border-red-600": danger,
    },
    rest.className
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

Button.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  warning: PropTypes.bool,
  success: PropTypes.bool,
  danger: PropTypes.bool,
  rounded: PropTypes.bool,
  outline: PropTypes.bool,
  checkVariation: function (props) {
    const { primary, secondary, warning, success, danger } = props;
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!success) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        "Only one variation of primary, secondary, warning, success, danger."
      );
    }
  },
};

export default Button;
