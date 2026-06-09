import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    hours_studied: "",
    previous_scores: "",
    extracurricular: 0,
    sleep_hours: "",
    papers_practiced: "",
  });

  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  const getPerformanceLevel = (score) => {
    if (score >= 85) return "Excellent ⭐";
    if (score >= 70) return "Good 👍";
    if (score >= 50) return "Average 📚";
    return "Needs Improvement 📈";
  };

  const handlePredict = async () => {
    try {
      setLoading(true);

      const response = await axios.post(
        "http://127.0.0.1:8000/predict",
        {
          hours_studied: Number(form.hours_studied),
          previous_scores: Number(form.previous_scores),
          extracurricular: Number(form.extracurricular),
          sleep_hours: Number(form.sleep_hours),
          papers_practiced: Number(form.papers_practiced),
        }
      );

      setPrediction(response.data.prediction);
    } catch (error) {
      console.error(error);
      alert("Prediction Failed");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setForm({
      hours_studied: "",
      previous_scores: "",
      extracurricular: 0,
      sleep_hours: "",
      papers_practiced: "",
    });

    setPrediction(null);
  };

  return (
    <div className="container">
      <div className="card">

        <div className="logo">🎓</div>

        <h1>Student Performance Predictor</h1>

        <p>
          Predict student performance using Multiple Linear Regression trained
          on academic and lifestyle factors.
        </p>

        <label>Hours Studied (per day)</label>
        <input
          type="number"
          min="0"
          max="24"
          value={form.hours_studied}
          onChange={(e) =>
            setForm({
              ...form,
              hours_studied: e.target.value,
            })
          }
        />

        <label>Previous Exam Score</label>
        <input
          type="number"
          min="0"
          max="100"
          value={form.previous_scores}
          onChange={(e) =>
            setForm({
              ...form,
              previous_scores: e.target.value,
            })
          }
        />

        <label>Participates in Extracurricular Activities</label>
        <select
          value={form.extracurricular}
          onChange={(e) =>
            setForm({
              ...form,
              extracurricular: e.target.value,
            })
          }
        >
          <option value={0}>No</option>
          <option value={1}>Yes</option>
        </select>

        <label>Average Sleep Hours</label>
        <input
          type="number"
          min="0"
          max="24"
          value={form.sleep_hours}
          onChange={(e) =>
            setForm({
              ...form,
              sleep_hours: e.target.value,
            })
          }
        />

        <label>Question Papers Practiced</label>
        <input
          type="number"
          min="0"
          value={form.papers_practiced}
          onChange={(e) =>
            setForm({
              ...form,
              papers_practiced: e.target.value,
            })
          }
        />

        <button onClick={handlePredict}>
          {loading ? "Predicting..." : "Predict Performance"}
        </button>

        <button
          style={{ marginTop: "10px", background: "#334155" }}
          onClick={handleReset}
        >
          Reset
        </button>

        {prediction !== null && (
          <div className="result">
            <p>{getPerformanceLevel(prediction)}</p>
            <h2>{prediction.toFixed(2)}</h2>
          </div>
        )}

      </div>
    </div>
  );
}

export default App;
