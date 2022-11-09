import { usestate } from "react";

const NarratorCard = (props) => {
  const { data, id } = props;

  const onClick = () => {
    setPage(2);
  };

  return (
    <div className="narrator-card">
      <div className="question-intro">

        <h1>I swear alliegience to the bastion as {id==1?"paraons":id==2?"vanguards":"echoes"}</h1>
        <p>
          {data[3].common[0]}
        </p>
        <p>
          {data[3].common[1]}
        </p>
        <p>
          {data[3].common[2]}
        </p>
        <p>
          {data[3].common[3]}
        </p>
      </div>

      <div className="logo-bottom">
        <img src="/image/logo-brown.svg" width="200px" />
      </div>
      <div className="btn-x">
        <img src="/image/x.svg" width="40px" />

        <h2 className="btn-continue">
          Signed:
        </h2>
      </div>
    </div>
  );
};

export default NarratorCard;
