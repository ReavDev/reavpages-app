import { ReactElement } from "react";

interface IfElseProps {
  children?: ReactElement | null;
  elseThen?: ReactElement | null;
  onElse?: ReactElement | null;
  ifOn?: boolean;
  ifOnElse?: boolean;
}

const IfElse = ({
  children = null,
  elseThen = null,
  onElse = null,
  ifOn = false,
  ifOnElse = true,
}: IfElseProps) => {
  return (
    <>
      {ifOn && <>{children}</>}
      {ifOnElse && <>{onElse}</>}

      {!ifOn && elseThen && !ifOnElse ? <>{elseThen}</> : null}
    </>
  );
};

export default IfElse;
