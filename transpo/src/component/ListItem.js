import React from 'react';

function onBuy(TransportationType, item){
    let { Year, Model, Price } = item
    alert(`${TransportationType} Model:${Model} ${Year} for ${Price} Sold!`)
}

function ListItem(props){
    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Year</th>
                    <th>Model</th>
                    <th>Price</th>
                    <th>Buy</th>
                </tr>
                </thead>
               <tbody>
               <tr>
                    <td>{props.item.Year}</td>
                    <td>{props.item.Model}</td>
                    <td>{props.item.Price}</td>
                    <td>
                        <button type="button" onClick={ () => { onBuy(props.TransportationType, props.item) } }>BUY NOW</button>
                    </td>
                </tr>
               </tbody>
            </table>
        </div>
    )
}

export default ListItem;