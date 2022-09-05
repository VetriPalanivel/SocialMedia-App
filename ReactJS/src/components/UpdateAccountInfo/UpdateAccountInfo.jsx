import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function UpdateAccountInfo() {
  const [expanded, setExpanded] = React.useState(false);
  const [val, setVal] = React.useState(0);
  const [comment, setComment] = React.useState("");
  const [commenting, setCommenting] = React.useState([]);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  function countLikes() {
    setVal(val + 1);
    console.log(val);
  }
  function postComment() {
    setCommenting([...commenting, comment]);
    console.log(commenting);
  }
  function wordComment(e) {
    setComment(e.target.value);
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            V
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Vetri Palanivel"
        subheader="November 20, 2021"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://avatars.githubusercontent.com/u/103435864?s=400&u=23ec37250ce8f3a022445b052b41e89685db9ab2&v=4"
        alt=""
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        I am a person who is positive about every aspect of life. There are many things I like to do, to see, and to experience. I like to read, I like to write; I like to think, I like to dream; I like to talk, I like to listen.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={countLikes}>
          <FavoriteIcon /> <span>{val}</span>
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <input type="text" placeholder="Comment" onChange={wordComment} />
        <span>
          <button onClick={postComment}>Post</button>
        </span>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        ></ExpandMore>
      </CardActions>
      {commenting.map((ele) => (
        <p>{ele}</p>
      ))}
    </Card>
  );
}
