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
    <div  className='p-4'>
        {/* Slack Name */}
        <h1 data-testid="slackUserName" className='text-3xl'>Dolapo Wahab</h1>
    
    {/* Slack Picture */}
    <img  src="" alt="Dolapo Wahab" data-testid="SlackDisplayImage" className='w-32 h-32 mt-4'/>
   
   {/* current day of the week */}
   <p data-testid="currentDayOfTheWeek" className='text-lg mt-4'>Current Day: {currentDay}</p>
    
    {/* current UTC Time */}
    <p data-testid="currentUTCTime" className='text-lg'>Current UTC Time (milliseconds) : {currentUTCTime}</p>
    

    {/* Track */}
    <p data-testid="myTrack" className='text-lg mt-4'>Track:Frontend</p>
    
    git
    </div>
  )
}

export default PersonalPage