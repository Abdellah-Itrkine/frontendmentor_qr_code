import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export const ImgMediaCard = () => {
  return (
    <Card sx={{ maxWidth: 350, borderRadius: 5 }}>
      <div style={{ padding: 10 }}>
        <CardMedia
          component="img"
          alt="green qr app"
          height="140"
          image="/images/image-qr-code.png"
          style={{ width: '100%', height: '100%', borderRadius: 20 }}
        />
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{ fontFamily: 'Outfit' , fontWeight: 700, textAlign: 'center', color: 'hsl(218, 44%, 22%)'}}>
          Improve your front-end skills by building projects
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{ fontSize: 18, fontFamily: 'Outfit', fontWeight: 400, textAlign: 'center'}}>
        Scan the QR code to visit Frontend Mentor and take your coding skills <br/>
        to the next level
        </Typography>
      </CardContent>
    </Card>
  );
};
