import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
    <div className="home">
      <p>Ngabar adalah media pembelajaran huruf hijaiyah interaktif menggunakan teknologi AR.</p>
      <Link href='/ar'>
        <div className="btn">
          <h2>Mulai</h2>
        </div>
      </Link>

      <style jsx>
        {`
          .home {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 60vh;
            padding: 0px 60px;
            text-align: center;
          }

          p {
            margin-bottom: 2rem;
          }

          .btn {
            display: block;
            border: 1px solid #000000;
            height: 130px;
            width: 130px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .btn:hover {
            background-color: #000000;
            color: #ffffff;
            transition: all .5s ease; 
          }


        `}
      </style>
    </div>
  )
}
