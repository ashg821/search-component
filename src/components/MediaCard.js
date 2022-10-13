import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function MediaCard({ ad }) {

  return (
    <Card sx={{ maxWidth: 345, margin: "auto" }}>
      <CardMedia
        component="img"
        height="140"
        image={ad.imageURL}
        alt="ad image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {ad.primaryText.length < 50 ? ad.primaryText : ad.primaryText.slice(0, 40) + "..."}
        </Typography>
        <Typography gutterBottom variant="p" component="p" sx={{ fontWeight: "600" }}>
          {ad.headline}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {ad.description}
        </Typography>
      </CardContent>
      <CardActions style={{position: "relative"}}>
        <a href={ad.companyDetails[0]['url']} target="_blank" style={{ textDecoration: "none" }}><Button size="small">{ad.CTA}</Button></a>
        <Typography variant="body2" color="text.secondary" style={{position: 'absolute', bottom: "-10", right: "10px"}}>
          {ad.companyDetails[0]['name']}
        </Typography>
      </CardActions>
    </Card>
  );
}
