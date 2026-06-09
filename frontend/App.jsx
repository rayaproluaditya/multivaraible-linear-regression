import { useState } from "react";
import axios from "axios";

function App() {
  const [form, setForm] = useState({
    hours_studied: 0,
    previous_scores: 0,
    extracurricular: 0,
    sleep_hours: 0,
    papers_practiced: 0,
  });

  const [prediction, setPrediction] = useState(null);

  const handlePredict = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/predict",
        form
      );

      setPrediction(response.data.prediction);
    } catch (error) {
      console.error(error);
      alert("Prediction failed");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Student Performance Predictor</h1>

      <input
        type="number"
        placeholder="Hours Studied"
        onChange={(e) =>
          setForm({
            ...form,
            hours_studied: Number(e.target.value),
          })
        }
      />

      <br /><br />

      <input
        type="number"
        placeholder="Previous Scores"
        onChange={(e) =>
          setForm({
            ...form,
            previous_scores: Number(e.target.value),
          })
        }
      />

      <br /><br />

      <select
        onChange={(e) =>
          setForm({
            ...form,
            extracurricular: Number(e.target.value),
          })
        }
      >
        <option value={0}>No</option>
        <option value={1}>Yes</option>
      </select>

      <br /><br />

      <input
        type="number"
        placeholder="Sleep Hours"
        onChange={(e) =>
          setForm({
            ...form,
            sleep_hours: Number(e.target.value),
          })
        }
      />

      <br /><br />

      <input
        type="number"
        placeholder="Question Papers Practiced"
        onChange={(e) =>
          setForm({
            ...form,
            papers_practiced: Number(e.target.value),
          })
        }
      />

      <br /><br />

      <button onClick={handlePredict}>
        Predict
      </button>

      {prediction !== null && (
        <h2>
          Predicted Performance Index: {prediction.toFixed(2)}
        </h2>
      )}
    </div>
  );
}

export default App;