import { useSelector, useDispatch } from 'react-redux'
import SearchIcon from '@mui/icons-material/Search'
import { Filter, FilterIconWrapper, StyledInputBase } from './FilterBar.styled'
import { getFilter } from '../../redux/contacts/contacts-selectors'
import { changeFilter } from '../../redux/contacts/contacts-slice'
// import { changeFilter } from '../../redux/contacts/contacts-action'
// import { theme } from '../../../src/common/theme'
// import ClearIcon from '@mui/icons-material/Clear'
// import useMediaQuery from '@mui/material/useMediaQuery'
// import { alpha, styled } from '@mui/material/styles'
import { IconButton } from '@mui/material'

// const SearchContactByName = styled('div')(({ theme }) => ({
//   position: 'absolute',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   '&:hover': {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginLeft: 0,
//   width: '100%',
//   // [theme.breakpoints.up('sm')]: {
//   //   marginLeft: theme.spacing(1),
//   //   width: 'auto',
//   // },
// }))

const FilterBar = () => {
  // const isBeforeMediumScreen = useMediaQuery(theme.breakpoints.down('md'))
  const filter = useSelector(getFilter)
  // const searchContactInputIsFilled = filter !== ''
  const dispatch = useDispatch()

  // const onSearchContactFocus = () => {
  //   if (!isBeforeMediumScreen) return
  //   showAddContactBtn(false)
  // }

  // const onSearchContactBlur = (e) => {
  //   if (!isBeforeMediumScreen || e.target.value.trim() !== '') return
  //   showAddContactBtn(true)
  //   if (e.target.value.trim() === '') e.target.value = ''
  // }

  // const onFilterChange = (e) => {
  //   dispatch(changeFilter(e.target.value.trim()))
  // }
  // const onClearBtnClick = () => {
  //   dispatch(changeFilter(''))
  //   //   showAddContactBtn(true)
  // }

  return (
    // <SearchContactByName>
    <Filter>
      <FilterIconWrapper>
        <SearchIcon />
      </FilterIconWrapper>
      <StyledInputBase
        placeholder="Find by name…"
        inputProps={{ 'aria-label': 'filter' }}
        value={filter}
        // onChange={onFilterChange}
        // onFocus={onSearchContactFocus}
        // onBlur={onSearchContactBlur}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
      {/* {searchContactInputIsFilled && (
          <IconButton aria-label="clear" onClick={onClearBtnClick}>
            <ClearIcon />
          </IconButton>
        )} */}
    </Filter>
    // </SearchContactByName>
  )
}

export default FilterBar
