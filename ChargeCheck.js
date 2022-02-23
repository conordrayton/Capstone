import React, {useState} from 'react';
import { Alert, SliderComponent } from 'react-native';

//This is going to be a loop that runs every few seconds.
//It will record the current value of charging and the previous value of charging
//If there has been a change, it will generate a date, either for a stop or a start
export async function ChargeCheck(){
    //On first calling the function, we'll set the charging state
    //as off by default. That way it will generate a start date when it
    //sees a start.
    const [charging,setCharge] = useState(false);

    while(true){
    const res = await fetch(`http://${espIP}/charging`,{
    method: 'GET',
    headers:{
        'cookie': cookie
    }}).catch(err);

    //This means that the charger WAS off but is now turning on
    //At this point we can generate a start date
    if(res.status==200){
        if(charging==false){
            console.log(startDate = Date.now());
        }
        setCharge(true);
    }
    //This will happens if the charging stops.
    if(!res.ok){
        if(charging==true){
            console.log(stopDate = Date.now());
        }
        setCharge(false);
    }
    Sleep(4000);
}
}