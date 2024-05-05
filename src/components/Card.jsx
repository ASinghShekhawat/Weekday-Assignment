import "./Card.css";
import Time from "../assets/Time.svg";
import { Button } from "@mui/material";
const Card = ({ data }) => {
  return (
    <div className="card">
      <div className="timing">⏳ Posted 10 days ago</div>
      <div className="header1">
        <img className="cardImage" src={data.logoUrl} />
        <div className="heading">
          <div className="companyName">{data.companyName || ""}</div>
          <div className="designation">{data.jobRole || ""}</div>
          <div className="experience">
            {data.location || ""} | Exp:{" "}
            {(data.minExp && data.minExp + "yrs") || "0yrs"}
            {data.maxExp && " - " + data.maxExp + "yrs"}
          </div>
        </div>
      </div>
      <div className="salarySection">
        <p>
          Estimated Salary: {data.salaryCurrencyCode || ""}{" "}
          {data.minJdSalary || "0"} - {data.maxJdSalary || ""}
          <span aria-label="Offered salary range"> ✅</span>
        </p>
      </div>
      <div className="aboutCompany">
        <div className="about">About Company:</div>
        <div className="aboutUs">About us</div>
        <div className="description">
          {data.jobDetailsFromCompany || "No description found"}
        </div>
        <Button className="viewJobButton" variant="text">
          View Job
        </Button>
      </div>
      <div className="minimumExperience">
        Minimum Experience
        <br />
        <div className="exp">
          {(data.minExp && data.minExp + "yrs") || "0yrs"}
        </div>
      </div>
      <div className="actions">
        <Button
          variant="contained"
          className="successBtn"
          onClick={() => {
            window.location.href = data.jdLink;
          }}
        >
          ⚡ Easy Apply
        </Button>

        <Button variant="contained" className="referralBtn">
          Unlock referral asks
        </Button>
      </div>
    </div>
  );
};

export default Card;
