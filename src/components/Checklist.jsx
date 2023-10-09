
import "./Checklist.css"

function Checklist({ list, setList }) {
    return (
        
        <ol className="Checklist">
            {list.map((value, i) => {
                return (
                    <li onClick={() => {
                        console.log(`delete list item ${i}`)
                        setList(list.filter((filterValue, filterI) => i !== filterI))
                    }} key={i}>
                        {value}
                    </li>)
            })}
        </ol>

    );
}

export default Checklist; 
