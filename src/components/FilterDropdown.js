import { useRecoilState } from 'recoil';
import { filterOptionAtom } from '../recoil/atoms/filterOptionAtom';

function FilterDropdown() {
const [filterOption , setFilterOption] = useRecoilState(filterOptionAtom);

const handleFilterChange = (e) =>{
    setFilterOption(e.target.value)
}
  return (
    <div>
      <span>Filter Todos:  </span>
      <select value={filterOption} onChange={handleFilterChange}>
        <option value="all">All</option>
        <option value="Completed">Completed</option>
        <option value="started">Started</option>
        </select>
    </div>
  )
}

export default FilterDropdown
