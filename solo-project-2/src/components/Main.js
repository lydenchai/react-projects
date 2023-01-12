/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

export default function Main(props) {
    return (
        <div className='main--container'>
            <div className='left'>
                <img className='img' src={`../img/${props.img}`} />
            </div>
            <div className='right'>
                <div className='right-top'>
                    <img src='../../imgs/48-480788_location-pin-icon-pointer-google-vector-graphics.png' width='15' height='20' />
                    <h3 className='country'>{props.country}</h3>
                    <h3 className='map'>View on Google Maps</h3>
                </div>
                <h2 className='title'>{props.name}</h2>
                <h4 className='date'>{props.date}</h4>
                <div className='text'>{props.text}</div>
            </div>
        </div>
    )
}
