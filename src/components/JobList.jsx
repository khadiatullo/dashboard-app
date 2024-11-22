import {useSelector, useDispatch} from 'react-redux';
import { JobPosition } from './JobPosition';
import { selectVisablePositions } from 'store/postions/positon-selectors';

import {addFilter} from 'store/filters/filter-actions';
import { selectAllFilter } from 'store/filters/filter-selects';

const JobList = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector(selectAllFilter);
  const positions = useSelector(state => selectVisablePositions(state, currentFilter));
  

  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter));
  };

  return (
    <div className='job-list'>
      {positions.map(item => (
        <JobPosition
          key={item.id}
          handleAddFilter={handleAddFilter}
          {...item}
        />
      ))}
    </div>
  )
}

export {JobList};
