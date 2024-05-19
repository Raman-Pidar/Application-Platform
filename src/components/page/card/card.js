import { useState } from "react";

import { Avatar, Button, Typography } from "@mui/material";
import ElectricBoltTwoToneIcon from "@mui/icons-material/ElectricBoltTwoTone";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import {Modal} from "../Modal/Modal"
import "./card.css";
export const JobCard = ({ jd }) => {
  const {
    companyName,
    jdLink,
    jdUid,
    jobDetailsFromCompany,
    jobRole,
    location,
    logoUrl,
    maxExp,
    maxJdSalary,
    minExp,
    minJdSalary,
    salaryCurrencyCode,
  } = jd;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const onClose = () => setIsModalOpen(false);

  return (
    <>
      <div className="cardContainer" key={jdUid}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              padding: "0.5rem",
              gap: "1rem",
            }}
          >
            <Avatar alt="company logo" src={logoUrl} />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.2rem",
              }}
            >
              <span style={{ color: "gray" }}>{companyName}</span>
              <span style={{ fontSize: "1.1rem" }}>
                {" "}
                {jobRole.toUpperCase()}{" "}
              </span>
              <span style={{ fontSize: "0.8rem" }}>
                {" "}
                <b>{location.toUpperCase()}</b>
              </span>
            </div>
          </div>

          {maxJdSalary && minJdSalary && (
            <div style={{display:'flex', alignItems:'center'}}>
              <span>
                Estimated Salary: {salaryCurrencyCode} {minJdSalary}-
                {maxJdSalary} LPA
              </span>
              <span>
                <CheckBoxIcon
                  sx={{ color: 'green'}}
                />
              </span>
            </div>
          )}

          <Typography variant="h6" component="body">
            About Company:
          </Typography>
          <Typography variant="subtitle2" component="body" sx={{flexGrow:'2'}}>
            <b> About us </b>
            <br />
            <p>
            {jobDetailsFromCompany.slice(0,300)}</p>
              <span>
                <Button onClick={openModal} sx={{textTransform:'none',justifyContent: "center" }}>
                  View job</Button>
              </span>
          </Typography>

          {minExp && (
            <span>
              <span style={{ color: "gray" }}> Minimum Experience </span> <br />
              {minExp} years
            </span>
          )}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "0.5rem",
              width:'18rem',
              
              alignSelf:'center',
              marginTop:'1rem',
            }}
          >
            <Button
              variant="contained"
              href={jdLink}
              sx={{ bgcolor: "#54EFC3", color: "black" , borderRadius:'0.5rem',  textTransform:'none'}}
            >
              <ElectricBoltTwoToneIcon
                sx={{ color: "yellow", marginRight: "0.5rem", font: "inherit" }}
              />
              Easy Apply
            </Button>
            <Button
              variant="contained"
              sx={{ gap: "0.2rem" , backgroundColor:'#4943DA', borderRadius:'0.5rem', textTransform:'none'}}
              onClick={() => {
                alert("clicked");
              }}
            >
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ filter: 'blur(2px)'}}/>
              <Avatar alt="Sravis Howard" src="/static/images/avatar/2.jpg" sx={{ filter: 'blur(2px)'}}/>
              Unlock referral asks
            </Button>
          </div>

        </div>
      {isModalOpen && <Modal jd={jd} onClose={onClose}/>}
    </>
  
        
  );
};
