import React from 'react'
import bootstrap from 'bootstrap'

export default function Projects() {
  return (
      <>
    <div>
        <h1 class = "text-center">Projects</h1>
    </div>
    <div class="container">
        <h2>SpeedRunEthereum.com</h2>
        <p>Completed Many challenges <br />Contributing for new challenges and creating  new prototypes</p>
        <p><a href="https://speedrunethereum.com/builders/0x1b37B1EC6B7faaCbB9AddCCA4043824F36Fb88D8">Builder Profile Link</a>
        </p>

    </div>
    <div className="container">
        <h2>Ether Chrome Extension</h2>
        <p>Real time Gas price tool built using Etherscan API.</p>
        <p><a href="https://chrome.google.com/webstore/detail/foofa/ikkkelbckkgpnmhaaajkliilkhgmklhf">ChromeWeb Store</a></p>
    </div>
    <div className="container">
        <h2>NFT Fractionalizer for ERC1155</h2>
        <img src="../public/foofanft.png" alt="" srcset="" />
        <p><a href="https://github.com/supernovahs/scaffold-eth"> Github Link</a> </p>
        <p><a href="foofanft.surge.sh">URL</a></p>
    </div>

      </>
        
    
  )
}
