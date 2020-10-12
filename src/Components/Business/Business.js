import React from 'react';
import './Business.css';


class Business extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            review: '',
        }
        this.reviewStars = this.reviewStars.bind(this);
    }

    reviewStars(num) {
        const star = <img src={require('../../Images/fullStar.svg')} alt=''/>;
        const half = <img src={require('../../Images/halfStar.svg')} alt=''/>;
        const empty = <img src={require('../../Images/emptyStar.svg')} alt=''/>;


        if(num === 0){
            return (<div>
                {empty}
                {empty}
                {empty}
                {empty}
                {empty}
            </div>)
        } else if(num === 0.5){
            return (<div>
                {half}
                {empty}
                {empty}
                {empty}
                {empty}
            </div>)
        } else if(num === 1){
            return (<div>
                {star}
                {empty}
                {empty}
                {empty}
                {empty}
            </div>)
        } else if(num === 1.5){
            return (<div>
                {star}
                {half}
                {empty}
                {empty}
                {empty}
            </div>)
        } else if(num === 2){
            return (<div>
                {star}
                {star}
                {empty}
                {empty}
                {empty}
            </div>)
        } else if(num === 2.5){
            return (<div>
                {star}
                {star}
                {half}
                {empty}
                {empty}
            </div>)
        } else if(num === 3){
            return (<div>
                {star}
                {star}
                {star}
                {empty}
                {empty}
            </div>)
        } else if(num === 3.5){
            return (<div>
                {star}
                {star}
                {star}
                {half}
                {empty}
            </div>)
        } else if(num === 4){
            return (<div>
                {star}
                {star}
                {star}
                {star}
                {empty}
            </div>)
        } else if(num === 4.5){
            return (<div>
                {star}
                {star}
                {star}
                {star}
                {half}
            </div>)
        }else if(num === 5){
            return (<div>
                {star}
                {star}
                {star}
                {star}
                {star}
            </div>)
        }
    }

    render() {
        return (
            <div className="Business">
                <div className="image-container">
                    <img src={this.props.business.imageSrc} alt=''/>
                </div>
                <h2>{this.props.business.name}</h2>
                <div className="ratingImg">
                    {this.reviewStars(this.props.business.rating)}
                </div>
                <h3 className="category">{this.props.business.category}</h3>
                <div className="Business-address">
                    <p>{this.props.business.address}</p>
                    <p>{this.props.business.city}</p>
                </div>
                <div className="Business-reviews">
                    <p>{this.props.business.price}</p>
                    <p>{this.props.business.reviewCount} reviews</p>
                </div>
                <a className="webBar" target="_blank" href={this.props.business.website}><button>Website</button></a>
            </div>
        )
    }
}

export default Business;