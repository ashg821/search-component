import * as React from 'react';
import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';

export default function MediaCard({ ad }) {
  const [url, setUrl] = useState("");
  const getUrl = async () => {
    const { data } = await axios.get(`http://localhost:8082/api/search/${ad.companyId}`);
    setUrl(data.url);
  }
  useEffect(() => {
    getUrl();
  }, []);
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
      <CardActions>
        <a href={url} target="_blank" style={{textDecoration: "none"}}><Button size="small">{ad.CTA}</Button></a>
      </CardActions>
    </Card>
  );
}
