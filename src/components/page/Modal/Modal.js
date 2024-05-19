import { Avatar, Button, Typography } from "@mui/material";
import ElectricBoltTwoToneIcon from "@mui/icons-material/ElectricBoltTwoTone";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import "./modal.css";

export const Modal = ({ jd ,onClose}) => {
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

 
  
    return (
        <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="close-button" onClick={onClose}>×</button>
          <div className="modalContainer" key={jdUid}>
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
              {jobDetailsFromCompany}</p>
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
                marginTop:'1rem',
                alignSelf:'center',
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
        </div>
      </div>
      
          
    );
  };

export default Modal
