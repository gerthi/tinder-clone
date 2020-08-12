import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Header.css';
import PersonIcon from "@material-ui/icons/PersonTwoTone";
import FavoriteTwoTone from '@material-ui/icons/Favorite';
import ForumIcon from "@material-ui/icons/ForumTwoTone";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

function Header( {backButton} ) {
  const history = useHistory();
  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)} >
            <ArrowBackIosIcon fontSize="large" className="header__icon"/>
        </IconButton>
        ) : (
        <IconButton>
          <PersonIcon fontSize="large" className="header__icon" htmlColor="skyblue"/>
        </IconButton>
      )}
      <Link to="/">
        <FavoriteTwoTone
          className="header__icon"
          fontSize="large"
          htmlColor="tomato"
        />
      </Link>
      <Link to="/chat">
        <IconButton>
            <ForumIcon
              className="header__icon"
              htmlColor="skyblue"
            />
        </IconButton>
      </Link>
    </div>
  )
}

export default Header;
