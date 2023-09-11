import React, {useEffect, useState} from 'react';

const PersonalPage = () => {
    const [currentDay, setCurrentDay] = useState("");
    const [currentUTCTime, setCurrentUTCTime] = useState("");

    useEffect(() => {
      const currentDate = new Date();

    //   current day of the week
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", ""]
   const currentWeekDay = weekDays[currentDate.getUTCDay()];
   setCurrentDay(currentWeekDay);
   

//    current UTC Time
const currentUTCTime = currentDate.getTime();
setCurrentUTCTime(currentUTCTime);
    }, [])
    
  return (
    <div  className='p-4 items-center text-center '>
        {/* Slack Name */}
        <h1 data-testid="slackUserName" className='text-3xl font-zodiak '>Dolapo Wahab</h1>
    
    {/* Slack Picture */}
   
   <img  src="../dolapo.JPG" alt="Dolapo Wahab" data-testid="SlackDisplayImage" className='w-50 h-40 mt-4  mx-auto rounded-md  '/>
  
   {/* current day of the week */}
   <p data-testid="currentDayOfTheWeek" className='text-lg mt-4 font-zodiak'>Current Day: {currentDay}</p>
    
    {/* current UTC Time */}
    <p data-testid="currentUTCTime" className='text-lg font-zodiak'>Current UTC Time (milliseconds) : {currentUTCTime}</p>
    

    {/* Track */}
    <p data-testid="myTrack" className='text-lg mt-4 font-zodiak '>Track:Frontend</p>
    
    {/* gitHub Url */}
    <a href='https://github.com/Diadem111/INTERN_PROJECT' data-testid="githubURL" className='text-blue-500 mt-4' target='_blank' rel="noopener noreferrer">GutHub Repository</a>
    </div>
  )
}

export default PersonalPage