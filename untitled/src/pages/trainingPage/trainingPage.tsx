import React from 'react';
import TextWriter from '../../components/textWriter/textWriter';
import { MdOutlineCircle } from "react-icons/md";
import IconBase from 'react-icon-base';
import TrainingLevelPage from './trainingLevelPage';
import { Link } from 'react-router-dom';
import './trainingPage.css';
import { MdDone } from "react-icons/md";
import LevelsCard from '../../components/levelsCard/levelsCard';


function TrainingPage() {
    const liink = "https://codefightsuserpics.s3.amazonaws.com/uploads/1493383179106/arcade-core-01-intro-gates.png"
    return (
        <div>
            <div className='container'>
                <LevelsCard title='Start' levels={[{ id: 0, isDone: false }]}  />
            </div>
            <div className='container'>
                <LevelsCard title='Start' levels={[{ id: 1, isDone: false }, { id: 2, isDone: false }, { id: 3, isDone: false }]} img={liink}/>
            </div>
            <div className='container'>
                <LevelsCard title='Start' levels={[{ id: 4, isDone: false }, { id: 5, isDone: false }, { id: 6, isDone: false },{ id: 7, isDone: false },{ id: 8, isDone: false }]} img={liink} />
            </div>
            {/* <div className='container'>
                    <LevelsCard />
                </div> */}
        </div>
    );
}

export default TrainingPage;









{/* 
                <Link to={`/training/${2}`}>
                    <span className="circleOrange">{"2"}</span>
                </Link>

                <Link to={`/training/${3}`}>
                    <span className="circleOrange">{"3"}</span>
                </Link> */}