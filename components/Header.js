import React from 'react'

const Header = () => {
    return (
        <div className="header">
            <h2>NGABAR</h2>
            <p>Ngaji Bareng Kuy</p>


            <style jsx>
                {` 
                    .header {
                        width: 100%;
                        text-align: center;
                        padding: 20px 30px;
                        background-color: #f2f2f2;
                    }

                    h2, p {
                        margin: 0;
                    }
                `}
            </style>
        </div>
    )
}

export default Header
