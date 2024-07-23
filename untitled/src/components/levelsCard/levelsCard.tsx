import { FC } from 'react';
import './levelsCard.css'
import cn from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
type Level = {
    id: number
    isDone?: boolean
}
type CardProps = {
    title: string
    levels: Level[]
    img?: string
}
const defaultProps: Partial<CardProps> = {
    img: "https://img2.joyreactor.cc/pics/post/full/Anime-404-1253881.pngv"
}


const LevelsCard: FC<CardProps> = (props) => {

    return (
        <div className="card">
            <div className='layout-h layout-center'>
                <div className="card-title layout-h">{props.title}<div className='circle'></div></div>
            </div>
            <div className="card-image" style={{ backgroundImage: `url("${props.img ? props.img : defaultProps.img}")` }}></div>
            <div>
                <div className="card-topics" >
                    {props.levels.map((el) => {
                        const classes = cn({"card-topic": true, "green": typeof localStorage.getItem(String(el.id)) == "object" ? false : true });


                        // console.log("ID" , el.id , " GETITEM" , typeof localStorage.getItem(String(el.id)) ,  localStorage.getItem(String(el.id)) ,  localStorage.getItem(String(el.id)) == "true")
                        return (
                            <div className={classes}  key={el.id} >
                                <Link className='level-text' to={`${el.id}`} >
                                    <p className='level-text'>{el.id}</p>
                                </Link>
                            </div>
                        )
                    })}


                </div>
            </div>
        </div>
    );
}
export default LevelsCard;
// "https://img2.joyreactor.cc/pics/post/full/Anime-404-1253881.png"