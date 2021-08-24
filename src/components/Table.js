import React from 'react';

const data =[
    {id:'0', name:'prakash'},
    {id:'1', name:'Rajesh'},
    {id:'2', name:'Mathad'},
]

function Table(){
    return(
        <div>
            {
                data.map(item =>{
                    return <p key={item.id}>{item.name}</p>
                })
            }
        </div>
    )
}

export default Table;