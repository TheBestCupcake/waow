import type { ReactNode } from "react";

interface AlertProps {
  children: ReactNode;
  onClick: () => void;
}

const Alert = ({ children, onClick }: AlertProps) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}{" "}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="ale"
        onClick={onClick}
      ></button>
    </div>
  );
};

export default Alert;
