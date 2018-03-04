import React from 'react';

export default function Bottom() {
  return (
    <div className="bottom">
      <span className="bottom-left">
        <span className="restaurants">
          <img className="icon" src="https://i.imgur.com/BD9gZQZ.png" />
          restaurants
        </span>
        <span className="nightlife">
          <img className="icon" src="https://i.imgur.com/mXR9DiS.png" />
          nightlife
        </span>
        <span className="home-services">
          <img className="icon" src="https://i.imgur.com/WCdJVCf.png" />
          home services
        </span>
        <span className="write-a-review">write a review</span>
        <span className="events">events</span>
        <span className="talk">talk</span>
      </span>
      <span className="bottom-right">
        <span className="sign-in">log in/out</span>
      </span>
    </div>
  )
}
