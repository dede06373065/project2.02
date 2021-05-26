import React, {Component} from 'react'
import '../bootstrap-3.4.1-dist/css/bootstrap.min.css'
import './weather.css'
import img from '../asset/cloud.png'
export default class Nav extends Component{

    search=()=>{
        const cityName=this.input.value.trim();
        alert(cityName)
    }

    
    render(){
        const time=new Date();
        const timeDate=time.toLocaleDateString([], {weekday: 'long'})+','+time.toLocaleString([],{dateStyle:'short'});
        return(
            <div className="nav">
            <ul className="nav__bar">
                <li className="nav__bar__logo">
                    <img src={img} alt="logo_weatherapp" /> Weather APP
                    </li>
                <li className="nav__bar__date">{timeDate}</li>
                <li className="nav__bar__more">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search for..." ref={input => this.input = input} />
                        <span className="input-group-btn">
                            <button className="btn btn-default" type="button" onClick={this.search}>Go!</button>
                        </span>
                    </div>
                </li>
            </ul>
        </div>
        )
    }

}