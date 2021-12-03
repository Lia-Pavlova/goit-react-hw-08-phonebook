import PropTypes from 'prop-types'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
// import Avatar from '@mui/material/Avatar'
// import PersonIcon from '@mui/icons-material/Person'

import { Avatar, makeStyles } from '@material-ui/core'
import { amber } from '@material-ui/core/colors'

// import Link from '@mui/material/Link';
import ActionMenu from '../../ActionMenu'
import { StyledListItem } from './ContactsItem.styled'

const useStyles = makeStyles(() => ({
  avatar: {
    color: '#ff8a65',
    backgroundColor: amber[200],
  },
}))

const ContactItem = ({ contact }) => {
  const { name } = contact

  const classes = useStyles()

  return (
    <StyledListItem secondaryAction={<ActionMenu contact={contact} />}>
      <ListItemAvatar>
        <Avatar className={classes.avatar}>
          {name.toUpperCase().slice(0, 1)}
          {/* <PersonIcon /> */}
        </Avatar>
      </ListItemAvatar>

      <ListItemText primary={contact.name} className="name" />
      <ListItemText primary={contact.number} className="number" />
    </StyledListItem>
  )
}

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
}

export default ContactItem
