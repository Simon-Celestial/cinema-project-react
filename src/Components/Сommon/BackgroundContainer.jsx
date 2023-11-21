import {Phone, Play} from "@phosphor-icons/react";
import React from "react";

const BackgroundContainer = () => {
    return (
        <div className="background-container">
            <div className="background-content">
                <p>ACTION, ADVENTURE, SCI-FI</p>
                <h1>Fight club: Round 2</h1>
                <h2>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est
                    notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas
                    humanitatis per seacula quarta decima et quinta decima.</h2>
                <div className="trailer-block">
                      <span>
                         12 A
                      </span>
                    <a href="https://www.youtube.com/watch?v=c1ogl58rGeU&ab_channel=WorldofPlayStation" className="play-trailer-button" target="_blank">
                        <Play size={18} weight="fill" color="white"/>
                        <p>PLAY TRAILER</p>
                    </a>
                </div>
            </div>
        </div>

    )
}
export default BackgroundContainer;