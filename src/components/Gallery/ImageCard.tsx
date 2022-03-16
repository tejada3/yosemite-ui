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
import { makeStyles } from '@material-ui/core/styles';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}
interface ImageProps {
  source: String;
}

export default function RecipeReviewCard(imageProps: ImageProps) {

  const [passedImage, setPassedImage] = React.useState(undefined);

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

  React.useEffect(() => {
    //@ts-ignore
    setPassedImage(imageProps.source);
  })                                                                                                                                                                                                                                                        

  return (
    <div className={classes.cardHolder}>
      <Card sx={{ minWidth: 700,
                  minHeight:700, 
                  maxHeight:800,
                  maxWidth: 1000,
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
          title="Title of image"
          subheader="user who posted"
        />
        <CardMedia
          component="img"
          height="600"
          image={passedImage}
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
        </CardActions>
      </Card>
      </div>
  );
}