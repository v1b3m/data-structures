/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
  },
  media: {
    height: 140,
  },
});

interface props {
  title: string;
  caption: string;
  body: string;
  image: string;
  imageCaption: string;
  share: boolean;
  learnMore: boolean;
  onClickLearnMore?: () => void;
}

const DataCard: React.FC<props> = ({
  title,
  caption,
  body,
  image,
  imageCaption,
  share,
  learnMore,
  onClickLearnMore,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`/static/images/cards/${image}`}
          title={imageCaption}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="caption" gutterBottom>
            {caption}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            {body}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        {share && (
          <Button size="small" color="primary">
            Share
          </Button>
        )}
        {learnMore && (
          <Button size="small" color="primary" onClick={onClickLearnMore}>
            Learn More
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default DataCard;
