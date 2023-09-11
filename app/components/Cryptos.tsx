import CryptoCard from "./CryptoCard";

const Cryptos = () => {
  return (
    <div className=" bg-slate-100 ">
      <div className="mx-auto flex min-h-screen  w-[90%] flex-col items-center lg:flex-row">
        <CryptoCard
          name="Bitcoin"
          description="A digital currency that functions as a decentralized peer-to-peer payment system"
          shortName="BTC"
          symbol="/img/bitcoin.png"
        />
        <CryptoCard
          name="Litecoin"
          description="A peer-to-peer cryptocurrency that enables instant, near-zero cost payments to anyone in the world."
          shortName="LTC"
          symbol="/img/litecoin.png"
        />
        <CryptoCard
          name="Ethereum"
          description="A decentralized, open-source blockchain platform featuring smart contract functionality."
          shortName="ETH"
          symbol="/img/ethereum.png"
        />
      </div>
    </div>
  );
};
export default Cryptos;
