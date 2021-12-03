import { Box, Typography } from '@mui/material'
import noContactsGif from '../../images/travolta.gif'

export default function NoContactsView({ message }) {
  return (
    <Box sx={{ ml: '30%', mr: '30%', textAlign: 'center', color: '#f3a15d' }}>
      <Typography component="p" variant="h5" align="center">
        {message}
      </Typography>
      <img
        src={noContactsGif}
        alt="no contacts yet"
        style={{ maxWidth: '300px' }}
      />
    </Box>
  )
}
