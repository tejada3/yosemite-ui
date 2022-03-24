import * as React from 'react';
import { styled, Theme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DownloadIcon from '@mui/icons-material/Download';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@mui/material';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}
interface ImageProps {
  source: string;
}

export default function RecipeReviewCard(imageProps: ImageProps) {
  const [imageURL, setImageURL] = React.useState<string>("undefined");
  const [imageRatio, setImageRatio] = React.useState<number>(1);
  const [imageHeight, setImageHeight] = React.useState<number>(600);
  const [imageWidth, setImageWidth] = React.useState<number>(700);
  const [imageName, setImageName] = React.useState<string>("undefined");

  const MIN_WIDTH = 1000;
  const MIN_HEIGHT = 700;

  function getColorCode() {
    var makeColorCode = '0123456789ABCDEF';
    var code = '#';
    for (var count = 0; count < 6; count++) {
       code =code+ makeColorCode[Math.floor(Math.random() * 16)];
    }
    return code;
 }

  const useStyles = makeStyles((theme: Theme) => ({
      cardHolder:{
        marginTop:20,
      }
  }));

  const classes = useStyles();

  React.useEffect(() =>{
    setImageURL(imageProps.source)

    var img = new Image();
    img.src = imageProps.source
    setImageHeight(img.height);
    setImageWidth(img.width);
    setImageRatio(MIN_WIDTH/img.width)

    const unencoded = decodeURI(imageProps.source.substring(38,imageProps.source.indexOf(".jpg")));
    setImageName(unencoded);
    }, [imageProps.source]);

  const download = () => {
    console.log(imageURL);
    fetch(imageURL, {
      method: "GET",
      headers: {}
    })
      .then(response => {
        response.arrayBuffer().then(function(buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", imageName+".jpg"); //or any other extension
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch(err => {
        console.log(err);
      });
    };                                                                                                                                                                                                                                              

  return (
    <div className={classes.cardHolder}>
      <Card sx={{ minWidth: MIN_WIDTH,
                  minHeight: MIN_HEIGHT, 
                  maxHeight:1500,
                  maxWidth: 800,
                  p:2,
                  borderRadius: 3}}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: getColorCode() }} aria-label="user">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={imageName}
          subheader="user who posted"
        />
        <CardMedia
          component="img"
          height={imageHeight*imageRatio}
          image={imageURL}
          alt="yosemite 2022"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Time stamp here...
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton aria-label="download">
            <DownloadIcon onClick={download}/>
          </IconButton>
        </CardActions>
      </Card>
      </div>
  );
}