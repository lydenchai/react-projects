/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

export default function Card() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })
    /**
     * Challenge: Fill in the values in the markup
     * using the properties of our state object above
     * (Ignore `isFavorite` for now)
     */

    function toggleFavorite() {
        console.log("Toggle Favorite")
    }
    return (
        <main>
            <article className="card">
                <img src="https://cdn-icons-png.flaticon.com/512/147/147142.png" className="card--image" />
                <div className="card--info">
                    <img
                        src='https://cdn3.iconfinder.com/data/icons/sympletts-free-sampler/128/star-512.png'
                        // src={`../images/star-empty.png`}
                        className="card--favorite"
                        onClick={toggleFavorite}
                    />
                    <h2 className="card--name">
                        John Doe
                    </h2>
                    <p className="card--contact">+1 (719) 555-1212</p>
                    <p className="card--contact">itsmyrealname@example.com</p>
                </div>

            </article>
        </main>
    )
}
