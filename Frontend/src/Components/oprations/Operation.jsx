import React from 'react';
import OperationCss from './Operation.module.css';
import trakingImg from '../../assets/Tracking.png';
import idLogo from '../../assets/IDlogo.png';
import clock from '../../assets/operationalClock.png'

function Operation() {
  return (
    <div className={OperationCss.container}>
      <div className={OperationCss.innerContainer}>
        <div className={OperationCss.delInfo}>
          <div className={OperationCss.delInfoHeading}>
            <h3> <img src={trakingImg} />Delivery information</h3>
          </div>
          <div className={OperationCss.delInfoTiming}>
            <p><strong>Monday</strong>: 12:00 AM–3:00 AM, 8:00 AM–3:00 AM</p>
            <p><strong>Tuesday</strong>: 8:00 AM–3:00 AM</p>
            <p><strong>Wednesday</strong>: 8:00 AM–3:00 AM</p>
            <p><strong>Thursday</strong>: 8:00 AM–3:00 AM</p>
            <p><strong>Friday</strong>: 8:00 AM–3:00 AM</p>
            <p><strong>Saturday</strong>: 8:00 AM–3:00 AM</p>
            <p><strong>Sunday</strong>: 8:00 AM–12:00 AM</p>
            <p><strong>Estimated time until delivery</strong>: 20 min</p>
          </div>
        </div>
        <div className={OperationCss.contactInfo}>
          <div className={OperationCss.conctInfoHeading}>
            <h3> <img src={idLogo} />Contact information</h3>
          </div>
          <div className={OperationCss.contText}>
            <p>If you have allergies or other dietary restrictions, please contact the restaurant. The restaurant will provide food-specific information upon request.</p>
            <div className={OperationCss.contNuber}>
              <h3>Phone Number</h3>
              <p>+934443-43</p>
            </div>
            <div className={OperationCss.contWeb}>
              <h3>Website</h3>
              <p>http://mcdonalds.uk/</p>
            </div>
          </div>
        </div>
        <div className={OperationCss.operationTimings}>
          <div className={OperationCss.operationTimes}>
            <h3> <img src={clock} />Operational Times</h3>
          </div>
          <div className={OperationCss.operationTimeList}>
            <p><strong>Monday</strong>: 8:00 AM–3:00 AM</p>
            <p><strong>Tuesday</strong>: 8:00 AM–3:00 AM</p>
            <p><strong>Wednesday</strong>: 8:00 AM–3:00 AM</p>
            <p><strong>Thursday</strong>: 8:00 AM–3:00 AM</p>
            <p><strong>Friday</strong>: 8:00 AM–3:00 AM</p>
            <p><strong>Saturday</strong>: 8:00 AM–3:00 AM</p>
            <p><strong>Sunday</strong>: 8:00 AM–12:00 AM</p>
          </div>
        </div>
      </div>
      <div className={OperationCss.bgContainer}>

      </div>
    </div>
  )
}

export default Operation