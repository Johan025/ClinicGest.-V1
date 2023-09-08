import React from 'react';
import { faSortDown} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Typewriter, { TypewriterClass } from "typewriter-effect";

const Texte:React.FC = () => {
    return (
        <div className='texte'>
                <h1> Choisissez la meilleure clinique pour 
                    <span className='text-primary'>
                    <Typewriter
                    options={{loop:true}}
 
                onInit={(typewriter) => {
                    typewriter
                        .typeString("votre santé")
                        .pauseFor(1000)
                        .deleteAll()
                        .start();
                }}
            />
            </span>
                </h1>
                <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus minima veniam exercitationem nesciunt facere nemo sint possimus maiores aperiam, dolore commodi deserunt quasi asperiores! Illum earum ea aliquam vitae quibusdam.</p>
                <button className='mt-4 btn btn-primary fx-2'>Prendre un rendez-vous  <FontAwesomeIcon icon={faSortDown} /></button>
        </div> 
    );
};

export default Texte;