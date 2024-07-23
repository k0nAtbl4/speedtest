import React from 'react';
import TextWriter from '../../components/textWriter/textWriter';
import { MdOutlineCircle } from "react-icons/md";
import IconBase from 'react-icon-base';
import { useParams } from 'react-router-dom';




interface TrainingLevelPageProps {
    level: number
}



function TrainingLevelPage(props: TrainingLevelPageProps) {

    const { level } = useParams();
    const data = [
        "quick",
        "quick text",
        "quick text !",
        "12 4",
        "134",
        "sad",
        "wasd",
        "qwerty",

    ];
    return (
        <div>
            <div><TextWriter text={data[Number(level)]} level={parseInt(level!, 10)} /></div>
        </div>
    );
}

export default TrainingLevelPage;