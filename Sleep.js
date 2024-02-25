const getSleepHours = day => {
    if (day === 'Monday') {
        return 8;
      } else if (day === 'Tuesday') {
        return 7;
      }
      else if (day === 'Wednessday') {
        return 5;
      }
      else if (day === 'Thursday') {
        return 6;
      }
      else if (day === 'Friday') {
        return 5;
      }
      else if (day === 'Saturday') {
        return 7;
      }
      else if (day === 'Sunday') {
        return 4;
      }
      else {
        console.log("Incrorrect") ;
      }
    }; 
    const getActualSleepHours = () => {
      const sum = getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + 
    getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday') ;
     return sum ;
    };
    const getIdealSleepHours = () => {
      const idealHours = 8;
      return idealHours * 7;
    };
    const calculateSleepDebt = () => {
        const actualSleepHours = getActualSleepHours();
        const idealSleepHours = getIdealSleepHours();
        if (actualSleepHours === idealSleepHours) {
      console.log('You  got the perfect amount of sleep');
    } else if (actualSleepHours > idealSleepHours) {
      console.log('You got more sleep than needed.');
    } else {
      console.log('You should get some rest');
    }
    if (actualSleepHours < idealSleepHours) {
      console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
    }
    };
    calculateSleepDebt();
      
    
    
    