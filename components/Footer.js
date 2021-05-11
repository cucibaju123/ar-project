import React from 'react'


const Footer = () => {
    return (

        <footer className="footer">
            <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                Copyright 2021 #NgabarKuy

            </a>


            <style jsx>
                {`
                    .footer {
                        width: 100%;
                        padding: 50px 50px;
                        border-top: 1px solid #eaeaea;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                      }
                      
                      .footer a {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-grow: 1;
                      }
                `}
            </style>
        </footer>

    )
}

export default Footer
