import { usestate } from "react";
import Badge from "@mui/material/Badge";

const NarratorCard = (props) => {
  const { data, step, setPage, id } = props;

  const onClick = () => {
    setPage(2);
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
        <h1>Narrator</h1>
        <p>
          {" "}
          {data != undefined && data.length > 0 ? data[step].narrator : ""}
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

export default NarratorCard;
