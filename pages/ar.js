import React from 'react'
import Head from 'next/head'

export default function ar() {
    return (
        <div>
            <Head>
                {/* <script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script>
                <script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"></script> */}
            </Head>
            <a-scene embedded arjs className="ar-content">
                <a-marker preset="hiro">
                    <a-entity
                        position="0 0 0"
                        scale="0.05 0.05 0.05"
                        gltf-model="https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf"
                    ></a-entity>
                </a-marker>
                <a-entity camera></a-entity>
            </a-scene>

        </div>
    )
}
