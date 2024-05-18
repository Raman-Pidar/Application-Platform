import './card.css'
export const JobCard=(jd)=>{

const {companyName,
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
salaryCurrencyCode} = jd;

return(
    <div className="cardContainer">
        
        <img src={logoUrl} alt='logo'/>
    </div>
)

}