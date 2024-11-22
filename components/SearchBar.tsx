import Form from "next/form"
import SearchFormReset from "./SearchFormReset";
import { Search } from "lucide-react";
function SearchBar({query}:{
  query ?:string
}) {
  // const query='Test';
 
  return (
    <Form action={'/'} scroll={false} className="search-form">
      <input
        name="query"
        defaultValue={query}
        className="search-input"
        placeholder="search Startups"
      />
      <div className="flex gap-2">
{
  query && (
  <SearchFormReset/>
  )
}
<button type="submit" className="search-btn text-white">
  <Search/>
</button>
      </div>
    </Form>
  )
}

export default SearchBar