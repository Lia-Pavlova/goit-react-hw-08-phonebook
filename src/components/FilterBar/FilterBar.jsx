import { useSelector, useDispatch } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';
import { Filter, FilterIconWrapper, StyledInputBase } from './FilterBar.styled';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import { changeFilter } from '../../redux/contacts/contacts-slice';
// import { theme } from '../../../src/common/theme';
// import useMediaQuery from '@mui/material/useMediaQuery';

const FilterBar = () => {
  // const isBeforeMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <Filter>
      <FilterIconWrapper>
        <SearchIcon />
      </FilterIconWrapper>
      <StyledInputBase
        placeholder="Find by name…"
        inputProps={{ 'aria-label': 'filter' }}
        value={filter}
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </Filter>
  );
};

export default FilterBar;
