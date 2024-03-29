import { Box, Typography, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({channelDetail, marginTop}) => (
  <Box sx={{
    boxShadow: 'none',
    borderRadius: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: {xs: '356px', md: '320px'},
    height: '360px',
    margin: 'auto',
    marginTop,
  }}>
    <Link to={`/channel/${channelDetail?.id?.channelId}`} >
      <CardContent sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#fff',
      }}>
        <CardMedia image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channelDetail?.snippet?.title}
          sx={{
            borderRadius: '50%',
            width: '180px',
            height: '180px', border: '1px solid #e3e3e3', mb: 2,
          }} />
        <Typography variant="h6">
          {channelDetail?.snippet?.title || 'notfound'}
          <CheckCircle sx={{ fontSize: 14, color: 'gray', ml: '12px' }} />
        </Typography>
        {channelDetail?.statistics?.subscriberCount && (
          <Typography>
            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
          </Typography>
        )}
      </CardContent>
    </Link>
  </Box>
)


export default ChannelCard