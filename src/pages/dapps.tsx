import React, { Fragment } from "react";
import type { NextPage } from "next";
import HeroImg from "../../assests/dapps/hero.svg";
import Image from "next/image";
import Button from "../components/Button";
import FinanceImg from "../../assests/dapps/finance.svg";
import ArtImg from "../../assests/dapps/art.svg";
import GamingImg from "../../assests/dapps/image.svg";
import TechImg from "../../assests/dapps/tech.svg";
import HydroImg from "../../assests/dapps/hydro.png";
import ChainedImg from "../../assests/dapps/chained.png";
import SafeKeepImg from "../../assests/dapps/safekeep.png";
import Link from "next/link";

const Dapps: NextPage = () => {
  const workingList = [
    {
      image: HydroImg,
      name: "HydroSwap",
      desc: "Swap your tokens with ease. A community favourite that allows you to trade tokens with folks across the network.",
      buttonContent: "OPEN HYDROSWAP",
      plate: "FINANCE",
      link: "https://www.hydroswap.org/",
    },
    {
      image: ChainedImg,
      name: "CHAINED THRIFT",
      desc: "Play against others to conquer planets and try out bleeding-edge Ethereum scaling/privacy technology. Maybe one for those already familiar with Ethereum.",
      buttonContent: "Coming soon",
      plate: "FINANCE",
      link: "/",
    },
    {
      image: SafeKeepImg,
      name: "SAFEKEEP",
      desc: "Get your digital assets locked in a sfe protcol and prevent loss.",
      buttonContent: "Coming soon",
      plate: "COLLECTILES",
      link: "/",
    },
  ];
  return (
    <Fragment>
      <header className="flex flex-wrap justify-center px-2 sm:px-7 lg:px-[5rem] py-[5rem] items-center">
        <div className="w-[90%] md:w-[70%] lg:w-[49%] mb-24  lg:mb-0">
          <h2 className="text-primary mb-6">
            DECENTRALIZED APPLICATIONS (DAPPS)
          </h2>
          <h1 className="text-base90 dark:text-white10 text-4xl">
            Web 3 Bridge build tools and services for people
          </h1>
          <p className="text-base90 dark:text-white10 py-8">
            Dapps are a growing movement of applications that use Ethereum to
            disrupt business models or invent new ones.
          </p>
          <div className="flex flex-wrap items-center">
            <Button
              class=" w-full sm:w-auto py-4 sm:py-2 px-10 text-xs sm:text-[1rem] mb-8 sm:mb-0"
              type="background"
              content="Explore Dapps"
            />
            <Button
              class="w-full sm:w-auto py-4 sm:py-2 px-10 text-xs sm:text-[1rem] border-primary text-primary sm:ml-6"
              type="transparent"
              content="Build Software"
            />
          </div>
        </div>
        <div className="w-full mx-auto flex lg:block justify-center lg:w-[49%] ml-4">
          <Image src={HeroImg} alt="hero-image" />
        </div>
      </header>
      <section className="mt-12">
        <h1 className="text-base90 dark:text-white10 text-3xl text-center mb-5">
          Explore dapps
        </h1>
        <p className="text-white60 text-sm text-center px-[5rem] lg:px-[20rem] mb-[8rem]">
          A lot of dapps are still experimental, testing the possibilties of
          decentralized networks. But there have been some successful early
          movers in the technology, financial, gaming and collectibles
          categories.
        </p>
        <h1 className="text-2xl mb-8 text-center dark:text-white10">
          Choose Category
        </h1>
        <div className="flex flex-wrap w-[100%] lg:w-[80%] mx-auto mb-[10rem] items-center justify-around text-white10 px-6 sm:px-0">
          <div className="w-full sm:w-auto border hover:border-primary mb-4 lg:mb-0 hover:shadow-[#ffffff15] shadow-md flex items-center rounded-full px-6 py-2">
            <Image src={FinanceImg} /> <p className="ml-4">De Finance</p>
          </div>
          <div className="border w-full sm:w-auto hover:border-primary mb-4 lg:mb-0 hover:shadow-[#ffffff15] shadow-md flex items-center rounded-full px-6 py-2">
            <Image src={ArtImg} /> <p className="ml-4">Art & Collectibles</p>{" "}
          </div>
          <div className="border w-full sm:w-auto hover:border-primary mb-4 lg:mb-0 hover:shadow-[#ffffff15] shadow-md flex items-center rounded-full px-6 py-2">
            <Image src={GamingImg} /> <p className="ml-4">Gaming</p>{" "}
          </div>
          <div className="border w-full sm:w-auto hover:border-primary mb-4 lg:mb-0 hover:shadow-[#ffffff15] shadow-md flex items-center rounded-full px-6 py-2">
            <Image src={TechImg} /> <p className="ml-4">Technology</p>{" "}
          </div>
        </div>
        <div className="mx-8 md:mx-16 sm:border flex flex-wrap items sm:border-white60 px-6 py-8">
          <div className="w-[90%] mx-auto md:w-[65%] mr-auto">
            <h1 className="text-base90 dark:text-white10 mb-4 font-bold text-lg">
              Do you have decentralized app idea?
            </h1>
            <p className="text-white60">
              All products listed on this page are not official endorsements,
              and are provided for informational purposes only. If you want to
              add a product or provide feedback on the policy raise an issue in
              GitHub.
            </p>
          </div>
          <div className="w-[80%] mx-auto mt-[3rem] md:mt-0 md:w-[30%] justify-center flex items-center">
            <Button
              class=" bg-base90 w-[70%] md:w-auto dark:bg-white text-white dark:text-base90 mx-auto px-6 text-sm font-bold py-2 "
              type="transparent"
              content="Suggest Dapp"
            />
          </div>
        </div>
      </section>
      <section className="py-20 mt-10 px-6">
        <h1 className="text-3xl mb-16 text-base90 dark:text-white10 font-bold text-center">
          Check out what we are working on
        </h1>
        <div className="flex flex-wrap w-full justify-center lg:justify-between">
          {workingList.map((item, index) => {
            return (
              <div key={index} className="w-[95%] sm:w-[80%] md:w-[50%] mx-6 lg:mx-0 lg:w-[30%] mb-12 relative h-[37rem] py-4 px-4 border border-[#78787835] dark:border-white60">
                <div className="w-full mx-auto block mb-10" key={index}>
                  <Image src={item?.image} alt="img" />
                </div>
                <h1 className="text-base90 dark:text-white10 mb-6 font-bold">
                  {item?.name}
                </h1>
                <button className="bg-white block rounded-sm w-auto mb-4">
                  <p
                    className={`text-sm px-2 py-2  ${
                      item?.plate === "FINANCE"
                        ? "text-primary"
                        : "text-[#5C5ACA]"
                    }`}
                  >
                    {item?.plate}
                  </p>
                </button>
                <p className="text-white50 text-base mb-6">{item?.desc}</p>
                <Link href={item?.link}>
                  <a>
                    <Button
                      class=" py-2 font-bold left-[50%] -translate-x-[50%] absolute bottom-4 w-[90%]"
                      type="background"
                      content={item?.buttonContent}
                    />
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
      <section className="my-16 p-[1rem] lg:px-[5rem]">
        <h1 className="text-3xl mb-6 text-base90 dark:text-white10 font-bold text-center">
          How to try a dapp?
        </h1>
        <p className="text-white60 text-center w-[85%] lg:w-[55%] mx-auto">
          To try a dapp, you'll need a wallet and some ETH. A wallet will allow
          you to connect, or log in. And you'll need ETH to pay any transaction
          fees.{" "}
          <span>
            <a className="underline text-[#5C5ACA]" href="/">
              What are transaction fees?
            </a>
          </span>{" "}
        </p>
        <div className="sm:border border-[#CDCDCD] my-24 w-[90%] sm:w-[80%] md:w-full mx-auto flex flex-wrap">
          <div className="w-[100%] mb-10 sm:mb-0 md:w-[33.3%] py-4 px-4 border sm:border-0 md:border-r border-[#CDCDCD]">
            <h1 className="text-base90 dark:text-white10 font-bold">
              1. Get some ETH
            </h1>
            <p className="text-white60 text-sm lg:text-[1rem] py-7">
              Dapp action cost a transaction fee
            </p>
            <Button
              class="text-base90 dark:text-white10 w-full py-4 border border-base90 dark:border-[#D0D0D0]"
              type="transparent"
              content="Get an ETH"
            />
          </div>
          <div className="w-[100%] mb-10 sm:mb-0 md:w-[33.3%] py-4 px-4 border sm:border-0 md:border-r border-[#CDCDCD]">
            <h1 className="text-base90 dark:text-white10 font-bold">
              2. Set up wallet
            </h1>
            <p className="text-white60 text-sm lg:text-[1rem] py-7">
              A wallet is your login for dapp
            </p>
            <Button
              class="text-base90 dark:text-white10 w-full py-4 border border-base90 dark:border-[#D0D0D0]"
              type="transparent"
              content="Find Wallet"
            />
          </div>
          <div className="w-[100%] md:w-[33.3%] py-4 px-4 border sm:border-0 border-[#CDCDCD]">
            <h1 className="text-base90 dark:text-white10 font-bold">
              3. Ready
            </h1>
            <p className="text-white60 text-sm lg:text-[1rem] py-7">
              Choose a dapp to try out
            </p>
            <Button
              class="text-base90 dark:text-white10 w-full py-4 border border-base90 dark:border-[#D0D0D0]"
              type="transparent"
              content="Choose dapp"
            />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Dapps;
