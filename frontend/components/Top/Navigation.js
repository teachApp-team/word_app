import * as React from "react";
import { motion } from "framer-motion";
import InfoIcon from '@material-ui/icons/Info';
import InputIcon from '@material-ui/icons/Input';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import FiberNewIcon from '@material-ui/icons/FiberNew';
const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const variantsLi = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];
const style = { color: `${colors[1]}` };

export const Navigation = () => (
  <motion.ul className="NavigationUl" variants={variants}>
    <motion.li className = "MenuItemLi" variants={variantsLi} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
      <div className="icon-placeholder" style={ {color: `${colors[1]}`} } >
        <InputIcon fontSize="large" style={ {color: `${colors[1]}`} } />
      </div>
      <div className="text-placeholder" style={ {color: `${colors[1]}`} } >
        トップ/ログイン
      </div>
    </motion.li>
    <motion.li className = "MenuItemLi" variants={variantsLi} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
      <div className="icon-placeholder" style={ {color: `${colors[2]}`} } >
        <PermIdentityIcon fontSize="large" style={ {color: `${colors[2]}`} } />
      </div>
      <div className="text-placeholder" style={ {color: `${colors[2]}`} } >
        生徒の皆さまへ
      </div>
    </motion.li>
    <motion.li className = "MenuItemLi" variants={variantsLi} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
      <div className="icon-placeholder" style={ {color: `${colors[4]}`} } >
        <FiberNewIcon fontSize="large" style={ {color: `${colors[4]}`} } />
      </div>
      <div className="text-placeholder" style={ {color: `${colors[4]}`} } >
        新規アカウント登録
      </div>
    </motion.li>
    <motion.li className = "MenuItemLi" variants={variantsLi} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
      <div className="icon-placeholder" style={ {color: `${colors[3]}`} } >
        <InfoIcon fontSize="large" style={ {color: `${colors[3]}`} } />
      </div>
      <div className="text-placeholder" style={ {color: `${colors[3]}`} } >
        このアプリケーションについて
      </div>
    </motion.li>
  </motion.ul>
);

const itemIds = [0, 1, 2, 3, 4];
