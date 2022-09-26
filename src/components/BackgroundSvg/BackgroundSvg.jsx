import React from "react";
import { motion } from "framer-motion";

const BackgroundSvg = () => {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 0.8,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };

  return (
    <motion.svg
      className="bgSvg"
      id="art"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMin slice"
      viewBox="0 0 1920 1080"
      initial="hidden"
      animate="visible">
      <motion.path
        id="circle-right_00000091697886710394994340000008159363649804286856_"
        fill="none"
        stroke="#EA227A"
        stroke-width="1.8822"
        stroke-miterlimit="9.9999"
        d="
	M1484.5,0c8.7,108.1,55.8,209.5,132.6,285.9c80.6,81.1,188.7,128.8,302.9,133.8"
        variants={draw}
        custom={3}
      />
      <motion.path
        id="circle-bottom_00000031167115943174356390000012980304449456949426_"
        fill="none"
        stroke="#EA227A"
        stroke-width="1.8822"
        stroke-miterlimit="9.9999"
        d="
	M788.8,1080c-25.1-114.1-127-199.8-248.6-199.8S316.7,965.9,291.6,1080"
        variants={draw}
        custom={2}
      />
      <g id="dots-grid-1">
        <circle fill="#EA227A" cx="47.7" cy="100.9" r="2.3" />
        <path
          fill="#EA227A"
          d="M74.2,100.9c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3S74.2,99.6,74.2,100.9L74.2,100.9z"
        />
        <path
          fill="#EA227A"
          d="M98.5,100.9c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3l0,0C97.5,98.6,98.5,99.6,98.5,100.9
		L98.5,100.9z"
        />
        <circle fill="#EA227A" cx="120.4" cy="100.9" r="2.3" />
        <circle fill="#FFFFFF" cx="144.7" cy="100.9" r="2.3" />
        <path
          fill="#EA227A"
          d="M171.2,100.9c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3l0,0C170.2,98.6,171.2,99.6,171.2,100.9
		L171.2,100.9z"
        />
        <circle fill="#EA227A" cx="193.2" cy="100.9" r="2.3" />
        <path
          fill="#FFFFFF"
          d="M50,127.7c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3C49,125.4,50,126.4,50,127.7L50,127.7z"
        />
        <path
          fill="#EA227A"
          d="M74.2,127.7c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3S74.2,126.4,74.2,127.7L74.2,127.7z"
        />
        <path
          fill="#EA227A"
          d="M98.5,127.7c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3l0,0C97.5,125.4,98.5,126.4,98.5,127.7
		L98.5,127.7z"
        />
        <path
          fill="#EA227A"
          d="M122.7,127.7c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3C121.7,125.4,122.7,126.4,122.7,127.7
		L122.7,127.7z"
        />
        <path
          fill="#EA227A"
          d="M147,127.7c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3c0,0,0,0,0.1,0C146,125.4,147,126.5,147,127.7
		z"
        />
        <path
          fill="#EA227A"
          d="M171.2,127.7c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3l0,0C170.2,125.4,171.2,126.4,171.2,127.7
		L171.2,127.7z"
        />
        <path
          fill="#EA227A"
          d="M195.5,127.7c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3l0,0C194.4,125.4,195.5,126.4,195.5,127.7
		L195.5,127.7z"
        />
        <circle fill="#EA227A" cx="47.7" cy="154.5" r="2.3" />
        <path
          fill="#EA227A"
          d="M74.2,154.5c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3S74.2,153.3,74.2,154.5L74.2,154.5z"
        />
        <path
          fill="#FFFFFF"
          d="M98.5,154.5c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3l0,0C97.5,152.2,98.5,153.3,98.5,154.5
		L98.5,154.5z"
        />
        <circle fill="#EA227A" cx="120.4" cy="154.5" r="2.3" />
        <circle fill="#EA227A" cx="144.7" cy="154.5" r="2.3" />
        <path
          fill="#EA227A"
          d="M171.2,154.5c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3l0,0C170.2,152.2,171.2,153.3,171.2,154.5
		L171.2,154.5z"
        />
        <circle fill="#EA227A" cx="193.2" cy="154.5" r="2.3" />
        <path
          fill="#EA227A"
          d="M50,181.4c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3C49,179.1,50,180.1,50,181.4
		C50,181.3,50,181.4,50,181.4z"
        />
        <path
          fill="#EA227A"
          d="M74.2,181.4c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3C73.2,179.1,74.2,180.1,74.2,181.4
		C74.2,181.3,74.2,181.4,74.2,181.4z"
        />
        <path
          fill="#EA227A"
          d="M98.5,181.4c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3l0,0C97.5,179.1,98.5,180.1,98.5,181.4
		C98.5,181.3,98.5,181.4,98.5,181.4z"
        />
        <path
          fill="#EA227A"
          d="M122.7,181.4c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3C121.7,179.1,122.7,180.1,122.7,181.4
		C122.7,181.3,122.7,181.4,122.7,181.4z"
        />
        <path
          fill="#FFFFFF"
          d="M147,181.4c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3C145.9,179.1,147,180.1,147,181.4
		C147,181.3,147,181.4,147,181.4z"
        />
        <path
          fill="#EA227A"
          d="M171.2,181.4c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3l0,0C170.2,179.1,171.2,180.1,171.2,181.4
		C171.2,181.3,171.2,181.4,171.2,181.4z"
        />
        <path
          fill="#EA227A"
          d="M195.5,181.4c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3l0,0C194.4,179,195.5,180.1,195.5,181.4
		C195.5,181.3,195.5,181.3,195.5,181.4z"
        />
        <circle fill="#EA227A" cx="47.7" cy="208.2" r="2.3" />
        <path
          fill="#EA227A"
          d="M74.2,208.2c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3S74.2,206.9,74.2,208.2L74.2,208.2z"
        />
        <path
          fill="#EA227A"
          d="M98.5,208.2c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3l0,0C97.5,205.9,98.5,206.9,98.5,208.2
		L98.5,208.2z"
        />
        <circle fill="#EA227A" cx="120.4" cy="208.2" r="2.3" />
        <circle fill="#EA227A" cx="144.7" cy="208.2" r="2.3" />
        <path
          fill="#EA227A"
          d="M171.2,208.2c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3l0,0C170.2,205.9,171.2,206.9,171.2,208.2
		L171.2,208.2z"
        />
        <circle fill="#EA227A" cx="193.2" cy="208.2" r="2.3" />
        <circle fill="#EA227A" cx="47.7" cy="235" r="2.3" />
        <path
          fill="#EA227A"
          d="M74.2,235c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3S74.2,233.7,74.2,235L74.2,235z"
        />
        <path
          fill="#EA227A"
          d="M98.5,235c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3l0,0C97.5,232.7,98.5,233.7,98.5,235L98.5,235z
		"
        />
        <circle fill="#FFFFFF" cx="120.4" cy="235" r="2.3" />
        <circle fill="#EA227A" cx="144.7" cy="235" r="2.3" />
        <path
          fill="#EA227A"
          d="M171.2,235c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3l0,0C170.2,232.7,171.2,233.7,171.2,235
		L171.2,235z"
        />
        <circle fill="#EA227A" cx="193.2" cy="235" r="2.3" />
        <path
          fill="#EA227A"
          d="M50,261.8c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3C49,259.6,50,260.6,50,261.8L50,261.8z"
        />
        <path
          fill="#EA227A"
          d="M74.2,261.8c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3S74.2,260.6,74.2,261.8L74.2,261.8z"
        />
        <path
          fill="#EA227A"
          d="M98.5,261.8c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3l0,0C97.5,259.6,98.5,260.6,98.5,261.8
		L98.5,261.8z"
        />
        <path
          fill="#EA227A"
          d="M122.7,261.8c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3C121.7,259.6,122.7,260.6,122.7,261.8
		L122.7,261.8z"
        />
        <path
          fill="#EA227A"
          d="M147,261.8c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3S147,260.6,147,261.8L147,261.8z"
        />
        <path
          fill="#FFFFFF"
          d="M171.2,261.8c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3l0,0C170.2,259.6,171.2,260.6,171.2,261.8
		L171.2,261.8z"
        />
        <path
          fill="#EA227A"
          d="M195.5,261.8c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3l0,0C194.4,259.5,195.5,260.6,195.5,261.8
		L195.5,261.8z"
        />
        <circle fill="#EA227A" cx="47.7" cy="288.7" r="2.3" />
        <path
          fill="#FFFFFF"
          d="M74.2,288.7c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3C73.2,286.4,74.2,287.4,74.2,288.7
		L74.2,288.7z"
        />
        <path
          fill="#EA227A"
          d="M98.5,288.7c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3l0,0C97.5,286.4,98.5,287.4,98.5,288.7
		L98.5,288.7z"
        />
        <circle fill="#EA227A" cx="120.4" cy="288.7" r="2.3" />
        <circle fill="#EA227A" cx="144.7" cy="288.7" r="2.3" />
        <path
          fill="#EA227A"
          d="M171.2,288.7c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3l0,0C170.2,286.4,171.2,287.4,171.2,288.7
		L171.2,288.7z"
        />
        <circle fill="#EA227A" cx="193.2" cy="288.7" r="2.3" />
      </g>
      <g id="dots-grid-2">
        <circle fill="#EA227A" cx="1572.2" cy="672.2" r="2.3" />
        <circle fill="#EA227A" cx="1596.5" cy="672.2" r="2.3" />
        <path
          fill="#EA227A"
          d="M1623,672.2c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3l0,0C1622,669.9,1623,670.9,1623,672.2z"
        />
        <path
          fill="#EA227A"
          d="M1647.3,672.2c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3l0,0
		C1646.2,669.9,1647.3,670.9,1647.3,672.2z"
        />
        <path
          fill="#FFFFFF"
          d="M1671.5,672.2c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3l0,0
		C1670.5,669.9,1671.5,670.9,1671.5,672.2z"
        />
        <circle fill="#EA227A" cx="1693.5" cy="672.2" r="2.3" />
        <path
          fill="#EA227A"
          d="M1720,672.2c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3l0,0C1719,669.9,1720,670.9,1720,672.2z"
        />
        <circle fill="#FFFFFF" cx="1572.2" cy="699" r="2.3" />
        <circle fill="#EA227A" cx="1596.5" cy="699" r="2.3" />
        <path
          fill="#EA227A"
          d="M1623,699c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3l0,0C1622,696.7,1623,697.7,1623,699z"
        />
        <path
          fill="#EA227A"
          d="M1647.3,699c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3l0,0C1646.2,696.7,1647.3,697.7,1647.3,699z"
        />
        <path
          fill="#EA227A"
          d="M1671.5,699c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3l0,0C1670.5,696.7,1671.5,697.7,1671.5,699
		L1671.5,699z"
        />
        <circle fill="#EA227A" cx="1693.5" cy="699" r="2.3" />
        <path
          fill="#EA227A"
          d="M1720,699c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3l0,0C1719,696.7,1720,697.7,1720,699z"
        />
        <path
          fill="#EA227A"
          d="M1574.5,725.8c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3l0,0
		C1573.5,723.5,1574.5,724.6,1574.5,725.8z"
        />
        <path
          fill="#EA227A"
          d="M1598.8,725.8c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3l0,0
		C1597.7,723.5,1598.8,724.6,1598.8,725.8z"
        />
        <path
          fill="#FFFFFF"
          d="M1623,725.8c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3l0,0C1622,723.5,1623,724.6,1623,725.8z"
        />
        <path
          fill="#EA227A"
          d="M1647.3,725.8c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3l0,0
		C1646.2,723.5,1647.3,724.6,1647.3,725.8z"
        />
        <path
          fill="#EA227A"
          d="M1671.5,725.8c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3l0,0
		C1670.5,723.5,1671.5,724.5,1671.5,725.8L1671.5,725.8z"
        />
        <path
          fill="#EA227A"
          d="M1695.8,725.8c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3l0,0
		C1694.7,723.5,1695.8,724.6,1695.8,725.8z"
        />
        <path
          fill="#EA227A"
          d="M1720,725.8c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3l0,0C1719,723.5,1720,724.6,1720,725.8z"
        />
        <circle fill="#EA227A" cx="1572.2" cy="752.7" r="2.3" />
        <circle fill="#EA227A" cx="1596.5" cy="752.7" r="2.3" />
        <path
          fill="#EA227A"
          d="M1623,752.7c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3l0,0C1622,750.4,1623,751.4,1623,752.7z"
        />
        <path
          fill="#EA227A"
          d="M1647.3,752.7c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3l0,0
		C1646.2,750.4,1647.3,751.4,1647.3,752.7z"
        />
        <path
          fill="#FFFFFF"
          d="M1671.5,752.7c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3l0,0
		C1670.5,750.4,1671.5,751.4,1671.5,752.7C1671.5,752.6,1671.5,752.6,1671.5,752.7z"
        />
        <circle fill="#EA227A" cx="1693.5" cy="752.7" r="2.3" />
        <path
          fill="#EA227A"
          d="M1720,752.7c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3l0,0C1719,750.4,1720,751.4,1720,752.7z"
        />
        <path
          fill="#EA227A"
          d="M1574.5,779.5c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3l0,0
		C1573.5,777.2,1574.5,778.2,1574.5,779.5z"
        />
        <path
          fill="#EA227A"
          d="M1598.8,779.5c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3l0,0
		C1597.7,777.2,1598.8,778.2,1598.8,779.5z"
        />
        <path
          fill="#EA227A"
          d="M1623,779.5c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3l0,0C1622,777.2,1623,778.2,1623,779.5z"
        />
        <path
          fill="#EA227A"
          d="M1647.3,779.5c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3l0,0
		C1646.2,777.2,1647.3,778.2,1647.3,779.5z"
        />
        <path
          fill="#EA227A"
          d="M1671.5,779.5c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3l0,0
		C1670.5,777.2,1671.5,778.2,1671.5,779.5z"
        />
        <path
          fill="#EA227A"
          d="M1695.8,779.5c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3l0,0
		C1694.7,777.2,1695.8,778.2,1695.8,779.5z"
        />
        <path
          fill="#EA227A"
          d="M1720,779.5c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3l0,0C1719,777.2,1720,778.2,1720,779.5z"
        />
        <circle fill="#EA227A" cx="1572.2" cy="806.3" r="2.3" />
        <circle fill="#EA227A" cx="1596.5" cy="806.3" r="2.3" />
        <path
          fill="#EA227A"
          d="M1623,806.3c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3l0,0C1622,804,1623,805,1623,806.3z"
        />
        <path
          fill="#FFFFFF"
          d="M1647.3,806.3c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3l0,0C1646.2,804,1647.3,805,1647.3,806.3z"
        />
        <path
          fill="#EA227A"
          d="M1671.5,806.3c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3l0,0C1670.5,804,1671.5,805,1671.5,806.3
		L1671.5,806.3z"
        />
        <circle fill="#EA227A" cx="1693.5" cy="806.3" r="2.3" />
        <path
          fill="#EA227A"
          d="M1720,806.3c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3l0,0C1719,804,1720,805,1720,806.3z"
        />
        <circle fill="#EA227A" cx="1572.2" cy="833.1" r="2.3" />
        <circle fill="#EA227A" cx="1596.5" cy="833.1" r="2.3" />
        <path
          fill="#EA227A"
          d="M1623,833.1c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3l0,0C1622,830.8,1623,831.9,1623,833.1z"
        />
        <path
          fill="#EA227A"
          d="M1647.3,833.1c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3l0,0
		C1646.2,830.8,1647.3,831.9,1647.3,833.1z"
        />
        <path
          fill="#EA227A"
          d="M1671.5,833.1c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3l0,0
		C1670.5,830.8,1671.5,831.9,1671.5,833.1L1671.5,833.1z"
        />
        <circle fill="#FFFFFF" cx="1693.5" cy="833.1" r="2.3" />
        <path
          fill="#EA227A"
          d="M1720,833.1c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3l0,0C1719,830.8,1720,831.9,1720,833.1z"
        />
        <path
          fill="#EA227A"
          d="M1574.5,860c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3l0,0C1573.5,857.7,1574.5,858.7,1574.5,860z"
        />
        <path
          fill="#FFFFFF"
          d="M1598.8,860c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3l0,0C1597.7,857.7,1598.8,858.7,1598.8,860z"
        />
        <path
          fill="#EA227A"
          d="M1623,860c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3l0,0C1622,857.7,1623,858.7,1623,860z"
        />
        <path
          fill="#EA227A"
          d="M1647.3,860c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3l0,0C1646.2,857.7,1647.3,858.7,1647.3,860z"
        />
        <path
          fill="#EA227A"
          d="M1671.5,860c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3l0,0C1670.5,857.7,1671.5,858.7,1671.5,860
		L1671.5,860z"
        />
        <path
          fill="#EA227A"
          d="M1695.8,860c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3l0,0C1694.7,857.7,1695.8,858.7,1695.8,860z"
        />
        <path
          fill="#EA227A"
          d="M1720,860c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3s1-2.3,2.3-2.3l0,0C1719,857.7,1720,858.7,1720,860z"
        />
      </g>
      <g id="circles-small">
        <motion.ellipse
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 136.1032 1316.2112)"
          fill="none"
          stroke="#EA227A"
          stroke-width="1.8822"
          stroke-miterlimit="9.9999"
          cx="1656.9"
          cy="493.8"
          rx="57.7"
          ry="57.7"
          variants={draw}
          custom={1}
        />
        <motion.circle
          fill="none"
          stroke="#90D8D4"
          stroke-width="1.5555"
          stroke-miterlimit="10"
          cx="195.7"
          cy="701.7"
          r="30.7"
          variants={draw}
          custom={2}
        />
      </g>
      <g id="dots_00000061460371086103021360000012434429319437091726_">
        <circle fill="#FFFFFF" cx="23" cy="386.7" r="5" />
        <circle fill="#FFFFFF" cx="1556.6" cy="309.6" r="8.7" />
        <path
          fill="#EA227A"
          d="M1735.1,173.8c0,2.4-1.9,4.3-4.3,4.3s-4.3-1.9-4.3-4.3s1.9-4.3,4.3-4.3
		C1733.2,169.4,1735.1,171.3,1735.1,173.8C1735.1,173.7,1735.1,173.8,1735.1,173.8z"
        />
        <circle fill="#FFFFFF" cx="1385.7" cy="892.6" r="4.3" />
        <circle fill="#EA227A" cx="346.3" cy="584.9" r="4.3" />
        <path
          fill="#EA227A"
          d="M1839,712.3c0,2.4-1.9,4.3-4.3,4.3s-4.3-1.9-4.3-4.3c0-2.4,1.9-4.3,4.3-4.3S1839,709.9,1839,712.3
		L1839,712.3z"
        />
        <path
          fill="#FFFFFF"
          d="M421.5,839.4c0,3.3-2.6,5.9-5.9,5.9s-5.9-2.6-5.9-5.9c0-3.3,2.6-5.9,5.9-5.9l0,0
		C418.9,833.5,421.5,836.1,421.5,839.4z"
        />
      </g>
      <g id="lines">
        <motion.line
          fill="none"
          stroke="#90D8D4"
          stroke-width="1.5555"
          stroke-miterlimit="10"
          x1="421.5"
          y1="63"
          x2="350.3"
          y2="134.2"
          variants={draw}
          custom={3}
        />
        <motion.line
          fill="none"
          stroke="#90D8D4"
          stroke-width="1.5555"
          stroke-miterlimit="10"
          x1="1516.1"
          y1="675.9"
          x2="1443.2"
          y2="748.8"
          variants={draw}
          custom={4}
        />
        <motion.line
          fill="none"
          stroke="#FFFFFF"
          stroke-width="1.8822"
          stroke-miterlimit="10"
          x1="335.1"
          y1="743.1"
          x2="264.3"
          y2="813.9"
          variants={draw}
          custom={2}
        />
        <motion.line
          fill="none"
          stroke="#FFFFFF"
          stroke-width="1.8822"
          stroke-miterlimit="10"
          x1="1490.6"
          y1="164.5"
          x2="1419.8"
          y2="235.2"
          variants={draw}
          custom={3}
        />
      </g>
    </motion.svg>
  );
};

export default BackgroundSvg;