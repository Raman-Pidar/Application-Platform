import { Avatar, Box, Button, Paper, Typography } from "@mui/material";
import ElectricBoltTwoToneIcon from "@mui/icons-material/ElectricBoltTwoTone";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
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

  return (
    // <div className="cardContainer">
    //     <img className="icon" src={logoUrl} alt='logo'/>
    //     {jobRole}
    // </div>
    <>
      <Box key={jdUid}>
        <Paper
          elevation={1}
          sx={{
            borderRadius: "1rem",
            padding: "0.5rem",
            border: "1px solid lightGrey"
          }}
        >
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
              <span style={{ fontSize: "0.7rem" }}>
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
            <span>
            {jobDetailsFromCompany.slice(0,370)}</span>
          </Typography>

          {minExp && (
            <p>
              <span style={{ color: "gray" }}> Minimum Experience </span> <br />
              {minExp} years
            </p>
          )}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "0.5rem",
            }}
          >
            <Button
              variant="contained"
              href={jdLink}
              sx={{ bgcolor: "#5fe8d1", color: "black" }}
            >
              <ElectricBoltTwoToneIcon
                sx={{ color: "yellow", marginRight: "0.5rem", font: "inherit" }}
              />
              Easy Apply
            </Button>
            <Button
              variant="contained"
              sx={{ gap: "0.2rem" , backgroundColor:'blue'}}
              onClick={() => {
                alert("clicked");
              }}
            >
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ filter: 'blur(2px)'}}/>
              <Avatar alt="Sravis Howard" src="/static/images/avatar/2.jpg" sx={{ filter: 'blur(2px)'}}/>
              Unlock referral asks
            </Button>
          </div>
        </Paper>
      </Box>
    </>
  );
};
