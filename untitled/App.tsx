import { FC } from 'react';
import './App.css'
import cn from 'classnames';
import React from 'react';
type CardProps = {
  title: string
}
const Card: FC<CardProps> = ({ title }) => {
  return (
    <div className="card">
      <div className='layout-h layout-center'>
        <div className="card-title layout-h">{title}<div className='circle'></div></div>

      </div>
      <div className="card-image" style={{ backgroundImage: 'url("https://codefightsuserpics.s3.amazonaws.com/uploads/1493383179106/arcade-core-01-intro-gates.png")' }}></div>
      <div>
        <div className="card-topics">
          {[1, 2, 3, 4].map((el) => {
            const classes = cn({"card-topic": true, green: el > 2});
            return (
              <div className={classes}>
                {el}
              </div>
            )
          })}

         
        </div>
      </div>
    </div>
  );
}

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="container">
      <Card title="Intro Gates" />
    </div>
  )
}

export default App
