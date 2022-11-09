import Grid from "@mui/material/Unstable_Grid2";
import Badge from "@mui/material/Badge";

const QuestionCard = (props) => {
  const { data, step, setIndex, setPage, result, setResult, id } = props;
  const url = step + 1;
  const onClick = (num) => {
    setPage(3);
    setIndex(num);
    if (data[step].choose[num].evaluate == "right") {
      setResult({ ...result, r: result.r + 1 });
    } else if (data[step].choose[num].evaluate == "wrong") {
      setResult({ ...result, w: result.w + 1 });
    } else {
      setResult({ ...result, n: result.n + 1 });
    }
  };

  return (
    <div className="question-card">
      <div className="question-intro">
        <div className="question-picture">
          <Badge color="primary" badgeContent="!" className="badge">
            <img src={"/image/member/"+id+".png"} className="faction-picture" />
          </Badge>
        </div>
        <img src="/image/div2.svg" className="question-divider" />
        <h1>ERZEBETH</h1>
        <p>
          {" "}
          {data != undefined && data.length > 0 ? data[step].question : ""}
        </p>
      </div>

      <div className="logo-intro">
        <img src="/image/logo-brown.svg" width="200px" />
      </div>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        className="question-container"
      >
        <Grid xs={5} className="question-answer-left">
          <div className="question-answer-img">
            <img src="/image/a.svg" onClick={() => onClick(0)} />
          </div>
          <div className="question-answer-content">
            {data != undefined && data.length > 0
              ? data[step].choose[0].answer
              : ""}
          </div>
        </Grid>

        <Grid xs={2} className="question-number">
          <img src={"/image/" + url + ".svg"} />
        </Grid>

        <Grid xs={5} className="question-answer-right">
          <div className="question-answer-content">
            {data != undefined && data.length > 0
              ? data[step].choose[1].answer
              : ""}
          </div>
          <div className="question-answer-img">
            <img src="/image/B.svg" onClick={() => onClick(1)} />
          </div>
        </Grid>
      </Grid>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        className="question-container question-container2"
      >
        <Grid xs={5} className="question-answer-left">
          <div className="question-answer-img">
            <img src="/image/c.svg" onClick={() => onClick(2)} />
          </div>
          <div className="question-answer-content">
            {data != undefined && data.length > 0
              ? data[step].choose[2].answer
              : ""}
          </div>
        </Grid>

        <Grid xs={2} className="question-number"></Grid>

        <Grid xs={5} className="question-answer-right">
          <div className="question-answer-content">
            {data != undefined && data.length > 0
              ? data[step].choose[3].answer
              : ""}
          </div>
          <div className="question-answer-img">
            <img src="/image/d.svg" onClick={() => onClick(3)} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default QuestionCard;
