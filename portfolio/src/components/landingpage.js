import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';


class Landing extends Component{
	render() {
		return(
			<div style={{width: '100%', margin: 'auto'}}>
             <Grid className="landing-grid">
             <Cell col={12}>
             <img 
             src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png"
             alt="avatar"
             className="avatar-img"
             />
             <div className="banner-text">
                <h1>mohammad awad</h1>
                <hr/>
                <p>HTML/CSS | REACT | BOOTSTRAB| JS | WORDPRESS | NODEJS| VUE</p>
                <div className="social-links">

                  {/* linkedin */}
                   <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-linkedin" aria-hidden="true"/>   
                  </a>

                   {/* github */}
                   <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-github" aria-hidden="true"/>
                    </a>

                     {/* codepen */}
                   <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-codepen" aria-hidden="true"/>
                    </a>
                </div>
             </div>
             </Cell>
             </Grid>
			</div>
			)
	}
}

export default Landing;