import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';
import { useDispatch, useSelector } from 'react-redux';
import { cleareFilter, removeFilter } from 'store/filters/filter-actions';
import { selectAllFilter } from 'store/filters/filter-selects';


const FilterPanel = () => {
  const currentFilter = useSelector(selectAllFilter);
  const dispatch = useDispatch();

  if(currentFilter.length === 0) return null

  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {currentFilter.map((item) => (
            <Badge onClear={() => dispatch(removeFilter(item))} key={item.id} variant="clearable">{item}</Badge>
          ))}
        </Stack>

        <button onClick={() => dispatch(cleareFilter)} className='link'>Clear</button>
      </div>
    </Card>
  )
}

export {FilterPanel};