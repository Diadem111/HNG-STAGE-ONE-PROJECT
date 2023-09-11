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
    <div>PersonalPage</div>
  )
}

export default PersonalPage