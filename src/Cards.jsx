import React from 'react';
import "./style.scss";

export default function Card(props){
    return(
      <div class="row">
    <div class="col-15">
        <div class="p-card">
            <div class="p-card__content">
              <h2>{props.rendered}</h2>
              <hr class="u-sv1" />
                <img class="p-card__image" alt="" height="185" width="330" src= {props.featured_media} />
                <h4>
                    <a href="#">{props.title.rendered}</a>
                </h4>
                <p class="u-no-padding--bottom">By {props.author.href} on </p>
            </div>
        </div>
    </div>
</div>
    )
}