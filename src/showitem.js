import './showitem.css';
import ADD from './additem';



function SHOW(props) {
    let l = props.items;
    let allemp = l ? props.items.map(function (ele, k) {
      
        return (
            <tr key={k} className="row">
                <td className="col">{ele.name}</td>
                <td className="col">{ele.age}</td>
                <td className="col">{ele.id}</td>
                <td className="col">
                    <button onClick={() => props.delemp(ele.id)} type="button" className="btn btn-secondary" >
                        delelte
                    </button>
                </td>
            </tr>
        )
    }) : (<p className='notfound'>not found</p>);
    

    return (
        <div>
            <table id="customers">
                <tr className="row ">
                    <th className="col-3">name</th>
                    <th className="col-3">age</th>
                    <th className="col-3">id</th>

                    <th className="col-3">ACTION</th>
                </tr>

                {allemp }

            </table>
           
        </div>
    )
}

export default SHOW;