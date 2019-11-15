import React from 'react'
import ListItem from './ListItem'

function CarList(props) {
    return (
    <div>
        {
            props.TransportaionList.map((transaportationItem,index) => {
                return (
                    <div key={`transaportationItem${index}`}>
                        <h3>{transaportationItem.TransportaionType}</h3>
                        <ol>
                            {
                                transaportationItem.Models.map((item, index) => {
                                    return (
                                        <ListItem key={`item${index}`} TransportaionType={transaportationItem.TransportaionType} item={item} />
                                    )
                                })
                                
                            }
                        </ol>
                    </div>
                )
            })
        }
    </div>
    )
}

export default CarList;