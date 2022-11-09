import { useState } from "react";
import Badge from "@mui/material/Badge";

const ContinueCard = (props) => {
  const { data, step, index, setPage, setStep, result, id } = props;
  const [isLast, setIsLast] = useState(false);

  const onClick = () => {
    if (step == 2 && !isLast) {
      setStep(3);
      setIsLast(true);
    } else if (step == 3 && isLast) {
      setPage(4);
    } else {
      setStep(step + 1);
      setPage(2);
    }
  };

  return (
    <div className="narrator-card">
      <div className="question-intro">
        <div className="question-picture">
          <Badge color="primary" badgeContent="!" className="badge">
            <img
              src={"/image/member/" + id + ".png"}
              className="faction-picture"
            />
          </Badge>
        </div>
        <img src="/image/div2.svg" className="question-divider" />
        <h1>ERZEBETH</h1>
        <p>
          {data != undefined && data.length > 0
            ? isLast
              ? result.w == 2
                ? data[3].result[2]
                : result.r == 2
                ? data[3].result[0]
                : data[3].result[1]
              : data[step].choose[index].continue
            : ""}
        </p>
      </div>

      <div className="logo-intro">
        <img src="/image/logo-brown.svg" width="200px" />
      </div>
      <div className="btn-x">
        <img src="/image/x.svg" width="40px" />

        <h2 className="btn-continue" onClick={onClick}>
          continue
        </h2>
      </div>
    </div>
  );
};

export default ContinueCard;
