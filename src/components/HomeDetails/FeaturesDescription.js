import React from 'react';
import { FaStar } from 'react-icons/fa';

const FeaturesDescription = () => {
    return (
        <div className="features___description">
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam nulla
                exercitationem facilis sint. Quam assumenda quas nostrum maxime fugiat, quod odio
                accusamus ullam ad nobis et repellendus aliquam libero ducimus officia odit autem,
                labore nisi iusto laudantium error praesentium! Quasi, nesciunt deserunt consectetur
                ea, optio voluptatibus libero distinctio officiis molestiae rem cupiditate sed error
                adipisci corrupti incidunt harum provident magnam totam ullam eaque atque culpa!
                Necessitatibus iste adipisci, eveniet numquam, quibusdam eos quis incidunt deserunt
                nesciunt in veniam amet saepe voluptatum est. Eligendi possimus quis quasi! Ullam
                laudantium hic illo possimus sit eum rerum beatae suscipit quas quisquam, dolore
                quam!
            </p>
            <div className="mt-5">
                <h5>Reviews</h5>
                <p>
                    <FaStar className="text-primary" /> 5 (200 reviews)
                </p>
            </div>
        </div>
    );
};

export default FeaturesDescription;
