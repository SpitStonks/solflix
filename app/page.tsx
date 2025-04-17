'use client';

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";


// Function to shuffle an array
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const SolflixPage = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [shuffledProfiles, setShuffledProfiles] = useState([]);

  const profiles = [
    { image: "https://azure-sophisticated-bobolink-253.mypinata.cloud/ipfs/bafybeiankx7wfcvpgo62qaivnrhpm4ooyrpxqiu7r2ifdftjlcd4sz53ba", name: "SBF" },
    { image: "https://azure-sophisticated-bobolink-253.mypinata.cloud/ipfs/bafkreid3kwbntbmnbpuhxie2vgwyuuizd3x6v5tq55hltfyadvcthqiz7q", name: "Elon" },
    { image: "https://azure-sophisticated-bobolink-253.mypinata.cloud/ipfs/bafkreiczjnrzdacx5zl5luzttr2phacaziyj7rpn22jyr2z273r6h5ddlq", name: "Vtlk" },
    { image: "https://azure-sophisticated-bobolink-253.mypinata.cloud/ipfs/bafkreih5toxk32uglumskqw4d4uf6kh6d522jvzj4eissgxljzv3omyfzq", name: "Toly" },
    { image: "https://azure-sophisticated-bobolink-253.mypinata.cloud/ipfs/bafkreiasp4fjdfcfrv67qwbtlmhkvkncj67dlyklhrr2epddcp33lr7idu", name: "Trump" },
  ];

  const criticallyAcclaimedBangers = [
    "https://azure-sophisticated-bobolink-253.mypinata.cloud/ipfs/bafkreigqobvtje2yqba2ke625dq3brvx6ysipjb772tf4ya2el72bzccum",
    "https://azure-sophisticated-bobolink-253.mypinata.cloud/ipfs/bafkreiaoopwnzgphqnhehpeknhaobsuf722dfs4ax3qgpcvjtigzvn6glq",
    "https://azure-sophisticated-bobolink-253.mypinata.cloud/ipfs/bafkreibkiusmy4iiounifsfqjt2o5dqwrg5ptjdm5p4c4sbnn3267ngnge",
    "https://azure-sophisticated-bobolink-253.mypinata.cloud/ipfs/bafkreiakvr6ykwf5k3ycs5yy7wz377cjymgliwphjchhadovnotw2eilda",
    "https://azure-sophisticated-bobolink-253.mypinata.cloud/ipfs/bafkreiaekoatnxqgc2i7sua7mxlkunsw6p5t72ozi6gklrtcm4uf6u2tsi",
    "https://azure-sophisticated-bobolink-253.mypinata.cloud/ipfs/bafkreie4t27je5mgruvrj6ngqqsgasv7vtgkyqc5sodf7jxuwyr3246hkq",
    "https://azure-sophisticated-bobolink-253.mypinata.cloud/ipfs/bafkreiemdiezrdd4ucovz6vve6ol7qq2hjc5uj7v4zaztzzc3qvhqniqwa",
    "https://azure-sophisticated-bobolink-253.mypinata.cloud/ipfs/bafkreidx7wjnyd2o27rx4rv2perppfantdu5spnwcbbxxlb4p7klm2jnk4",
    "https://azure-sophisticated-bobolink-253.mypinata.cloud/ipfs/bafkreibtntqvpslfpg4hgyxduoo4zckf443kucchuihf2vlthy4hg66a5a",
  ];

  const jeetFightingAction = [
    "https://azure-sophisticated-bobolink-253.mypinata.cloud/ipfs/bafkreifsdqkysa44wkwieiyeghhyunhkdayuxpsxlu4gbj3aa5qrufjzs4",
    "https://azure-sophisticated-bobolink-253.mypinata.cloud/ipfs/bafkreieoht3mfv2m6em64cqbdwkvun3hutwu2ubv6cxaoxynamhcq2m4qi",
    "https://azure-sophisticated-bobolink-253.mypinata.cloud/ipfs/bafkreihypwreut2qasd4plbgava5q7jyn4ornyeaflzbmbv72bomr2v3ly",
    "https://azure-sophisticated-bobolink-253.mypinata.cloud/ipfs/bafkreihdx4fsmxkfu5cf5rcvkwhznbjfzeaf6exasyrv74rbkstgs6adxm",
    "https://azure-sophisticated-bobolink-253.mypinata.cloud/ipfs/bafkreifg3gh33jocyy72q4wonvv25thtqxditv5jv5em36tflyh36cheiy",
    "https://azure-sophisticated-bobolink-253.mypinata.cloud/ipfs/bafkreickblbjftutll6fhatvxzkaehcohz7idh5pk2mjouw4jmlkhpjb5m",
    "https://azure-sophisticated-bobolink-253.mypinata.cloud/ipfs/bafkreiazlu4zlru3ginc2iduxl6its3oqdqboqlzibbs5qf3bjl6pfkrni",
    "https://azure-sophisticated-bobolink-253.mypinata.cloud/ipfs/bafkreiehyy4j556mljvvwkavn4vheutia6kbuyaxjb4u3cn433na2jvxra",
  ];
  const rugpullDramas = [
    "https://azure-sophisticated-bobolink-253.mypinata.cloud/ipfs/bafkreiaubrejsbbvvpxr6v6wx4tlgnyfx3nhd6yydwimivmmnkr3xdaykq",
    "https://azure-sophisticated-bobolink-253.mypinata.cloud/ipfs/bafkreicgnu5nlpuxpbhs6cxgtawxohso2jrrjflg3c3k7nxjpfqaa73dgu",
    "https://azure-sophisticated-bobolink-253.mypinata.cloud/ipfs/bafkreibfj4cgzzdd6xjsuhfovbmkc4avmdpwb2tpdiqulykbt2ym6efjme",
    "https://azure-sophisticated-bobolink-253.mypinata.cloud/ipfs/bafkreidsvwaumsoqadeh2rx4gpa3ocghmwwbqtgiu4nqawhudsrbf6d2ty",
    "https://azure-sophisticated-bobolink-253.mypinata.cloud/ipfs/bafkreiac6qisuqdf7a6ilxmwjnp2nktjry46kdhtkxcdlop7ftxadohkni",
    "https://azure-sophisticated-bobolink-253.mypinata.cloud/ipfs/bafkreib7xpqsfljqyymqs5yr4z7m2m2sl6yvasjk5otvbgsuifkdtrfzta",
    "https://azure-sophisticated-bobolink-253.mypinata.cloud/ipfs/bafkreihczec4phezbgcytk73kazqqhluboxbncb3gny75hiq6ituoxh6ye",
    "https://azure-sophisticated-bobolink-253.mypinata.cloud/ipfs/bafkreia7svkftpnp7cfuocbodqiutz5tusol4oadgpbsfdchotzc5na7yu",
  ];
  const horrorHoneypots = [
    "https://azure-sophisticated-bobolink-253.mypinata.cloud/ipfs/bafkreiaejytewifodhpkcoe6cqguyxitq2vuzqlvnfixmt5mmr6dgf7x3a",
    "https://azure-sophisticated-bobolink-253.mypinata.cloud/ipfs/bafkreigehfivv2jvyqsyb3oazncvjkazqmfebwhfdwgaboexjvkwmmz6ei",
    "https://azure-sophisticated-bobolink-253.mypinata.cloud/ipfs/bafkreicvl6gqfqo5htlvjatjjzp4drwtebfsaf3hininygxic24twk7yna",
    "https://azure-sophisticated-bobolink-253.mypinata.cloud/ipfs/bafkreifnohedkatg4hyn65vgdpgq4f7fl5vonzm3zh5nw6pimi6g5wc62y",
    "https://azure-sophisticated-bobolink-253.mypinata.cloud/ipfs/bafkreiauyivyrbrynhznxxsbhqzrixxwl4gurj52uqgfvistwoa3bzs4ki",
    "https://azure-sophisticated-bobolink-253.mypinata.cloud/ipfs/bafkreidff7rocizb6ta4inz4v3xx5rdok2xopmocu2qf6puc3a3agnye7i",
    "https://azure-sophisticated-bobolink-253.mypinata.cloud/ipfs/bafkreic4dlfde223drftkzvjzf2jd5metrgsf627mdcvtxcnqghzokfa4q",
    "https://azure-sophisticated-bobolink-253.mypinata.cloud/ipfs/bafkreidh3r47dpwd3q5jzeqnauidwjfits7ap7keldp4nqfadjb4tlhsia",
  ];
  const memeMedia = [
    "https://azure-sophisticated-bobolink-253.mypinata.cloud/ipfs/bafkreibwov7tx63mfxftl7vdg7uvwtt62chjpuhprkr5vuonzjjgie6wcm",
    "https://azure-sophisticated-bobolink-253.mypinata.cloud/ipfs/bafkreifscudwmmdhhuxnqntvgrryuk6izjo5ymry5sswfawoql6aegl2gq",
    "https://azure-sophisticated-bobolink-253.mypinata.cloud/ipfs/bafkreidrkjvz22onpgdvwnwp3cdzi3oftzb5pdn5rsccud6amvmhkmkaeu",
    "https://azure-sophisticated-bobolink-253.mypinata.cloud/ipfs/bafkreic2xfqx3pf7vplcioqrlmie2ize7kw4ntavsdfwxra4ts6jhy4oba",
    "https://azure-sophisticated-bobolink-253.mypinata.cloud/ipfs/bafkreidlurhne2mlicipjiek2t2gyoekm6exhje3ubl54bpbm23lczdeia",
    "https://azure-sophisticated-bobolink-253.mypinata.cloud/ipfs/bafkreicknbuo5nokbsl5k6f7vyoh2oejeavnm2xrwmuclgmnx4lyvrsena",
    "https://azure-sophisticated-bobolink-253.mypinata.cloud/ipfs/bafkreic57axyzu5x5z6qgeusgkrsvhspdue6dl2ijngnhm4jeaiweau6yy",
    "https://azure-sophisticated-bobolink-253.mypinata.cloud/ipfs/bafkreiafv45hj362cgehtrxf7egc5g2ypo6cpjx4t7fachwohdf4y7imtm",
    "https://azure-sophisticated-bobolink-253.mypinata.cloud/ipfs/bafkreibx7ukcqtsbi4p7omp4yjch6ga3yldxhgtxez4v7pv2zlcs2tzqcq",
    "https://azure-sophisticated-bobolink-253.mypinata.cloud/ipfs/bafkreiar7whevitsiblxdwmvks6dw7te2jnubmb3ziwkuireeolpxtl4um",
  ];


  const handleProfileClick = () => {
    setIsProfileModalOpen(true);
  };

  const handleProfileSelect = (profile) => {
    setSelectedProfile(profile);
    setIsProfileModalOpen(false);
  };

  const categories = [
    { title: "Critically Acclaimed Bangers", data: criticallyAcclaimedBangers },
    { title: "Jeet-fighting Action", data: jeetFightingAction },
    { title: "Rugpull Dramas", data: rugpullDramas },
    { title: "Horror Honeypots", data: horrorHoneypots },
    { title: "Meme Media", data: memeMedia },
  ];


  // Shuffle profiles when the component mounts
  useEffect(() => {
    setShuffledProfiles(shuffleArray(profiles));
  }, []);

  return (
    <div className="bg-black text-red-600 min-h-screen overflow-hidden">

      {/* Logo falling in from top */}
      <motion.div
        className="flex justify-center pt-6"
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 60, damping: 10 }}
      >
        <img
          src="https://azure-sophisticated-bobolink-253.mypinata.cloud/ipfs/bafkreibu7icxthdnlbf2bwxdjlf4qa2juh2festyionkvqbnwamh4ur2l4"
          alt="Solflix Logo"
          className="h-55"
        />
      </motion.div>

      {/* Profile Picture and New Release Image */}
<motion.div
  className="flex justify-between items-center p-6"
  initial={{ x: 300, rotate: 360, opacity: 0 }}
  animate={{ x: 0, rotate: 0, opacity: 1 }}
  transition={{ type: "spring", stiffness: 80, damping: 12 }}
>
  {/* Profile Section (Slightly smaller profile picture) */}
  <div className="flex flex-col items-center cursor-pointer" onClick={handleProfileClick}>
    <img
      src={selectedProfile ? selectedProfile.image : profiles[4].image}
      alt="Profile"
      className="w-18 h-18 rounded-full object-cover"  // Slightly smaller profile picture
    />
    <div className="text-xl mt-2">Who&apos;s Grinding?</div>
  </div>

  {/* NEW RELEASE Section (Positioned on the far right and slightly smaller image with larger text) */}
  <a
    href="https://pump.fun"
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center cursor-pointer"
    style={{ marginLeft: 'auto' }}  // Pushes the new release to the right side
  >
    <span className="text-white font-bold text-lg mb-1">NEW RELEASE!</span>  {/* Larger text for NEW RELEASE! */}
    <img
      src="https://azure-sophisticated-bobolink-253.mypinata.cloud/ipfs/bafkreicyu4czrjfqsenyaqcw2oat7xuvtucouexhjyf7dgd6y4m4bnflom"
      alt="Solflix Logo"
      className="h-80 w-20 w-auto"  // Slightly smaller image (compared to previous size)
    />
  </a>
</motion.div>

{/* Modal */}
{isProfileModalOpen && (
  <div className="fixed top-4 left-4 w-60 bg-black bg-opacity-75 text-red-600 p-6 rounded-lg z-50">
    <div className="flex space-x-4 flex-wrap">
      {shuffledProfiles.map((profile, index) => (
        <div
          key={index}
          className="flex flex-col items-center cursor-pointer"
          onClick={() => handleProfileSelect(profile)}
        >
          <img
            src={profile.image}
            alt={`Profile ${index}`}
            className="w-13 h-13 rounded-full"
          />
          <div className="text-sm mt-2">{profile.name}</div>
        </div>
      ))}
    </div>
  </div>
)}

{/* Sign Up */}
<motion.div
  className="flex justify-center items-center py-12"
  initial={{ scale: 0.8, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ delay: 0.5 }}
  style={{ position: 'relative', top: '-300px' }}
>
  <a href="https://x.com/Solflixandshill" target="_blank" rel="noopener noreferrer">
    <button className="bg-red-600 text-white px-6 py-3 text-xl font-bold rounded">
      SIGN UP IS FREE! SOLFLIX AND SHILL!
    </button>
  </a>
</motion.div>


      {/* Categories */}
      <div className="px-8 space-y-12">
        {categories.map(({ title, data }, catIndex) => (
          <motion.div
            key={title}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 * catIndex, type: "spring", stiffness: 40 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
            <div
              className="flex space-x-4 overflow-x-scroll pb-4"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {data.map((poster, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  style={{ width: "200px", height: "300px" }}
                  initial={{ y: 100, opacity: 0, rotate: -3 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  transition={{
                    delay: 0.1 * index,
                    type: "spring",
                    stiffness: 60,
                    damping: 15,
                  }}
                >
                  <img
                    src={poster}
                    alt="Movie Poster"
                    className="w-full h-full object-cover rounded-lg transform transition-all duration-300 group-hover:scale-105"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SolflixPage;
