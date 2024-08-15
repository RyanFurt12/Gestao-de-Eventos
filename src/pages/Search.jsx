import MyAdressDrop from "../components/MyAdressDrop"

function Search() {
    return (
      <>
      	<MyAdressDrop />
        <div style={{height:"50px"}}></div>

        <label>
          <input type="text" placeholder="Busque por eventos"/>
        </label>
      </>
    )
}
  
export default Search