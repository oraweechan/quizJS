import { MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage";
import "./Home.css";

function Home(props) {
  const [category, setCategory] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!category) {
      setError(true);
      return;
    } else {
      setError(false);
      props.apiCall(category);
      navigate("/quizJS/play");
    }
  };

  return (
    <div className="content">
      <div className="settings">
        <div className="settings_select">
          {error && <ErrorMessage>Please fill all the fields</ErrorMessage>}

          <TextField
            select
            InputLabelProps={{ style: { color: "#FFFFFF" } }}
            label="Select Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            variant="outlined"
            style={{ marginBottom: 30, background: "#153544" }}
          >
            <MenuItem key="Javascript" value="javascript">
              Javascript
            </MenuItem>
            <MenuItem key="React" value="react">
              React
            </MenuItem>
            <MenuItem key="HtmlCss" value="htmlCss">
              HTML / CSS
            </MenuItem>
          </TextField>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}
          >
            Start Quiz
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
