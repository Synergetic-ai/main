import React, {useState} from 'react';
import {Table, Label, Input} from 'reactstrap';
import Rickshaw from '../../components/rickshaw/Rickshaw';


const CheckTable = ({id, checkedArr}) => {
    
    const [arr, setArr] = useState([])

    const getNewArr = ({cell, newValue}) => {

        let newArr = arr

        newArr[cell] = newValue
        return newArr
    }

    if (id === 0) {
        for (let i = 0; i < checkedArr.length; i += 1) {
            setArr(getNewArr(i, !checkedArr[0]))
        }
    } else {
        setArr(checkedArr)
        setArr(getNewArr(id, !arr[id]))
    }

    if (arr[0]) {
        
        let count = 1
      
        for (let i = 1; i < arr.length; i += 1) {
            if (arr[i]) {
                count += 1
            }
        }
        if (count !== arr.length) {
            setArr(getNewArr(0, !arr[0]))
        }
    }
    return arr
}

const TableHead = ({checkedArr, tableName}) => {
    return (
        <Table striped size="sm">
        <div className={`widget-table-overflow ${tableName}`}>
            <thead className="no-bd">
                <tr>
                    <th>
                        <div className="checkbox abc-checkbox">
                            <Input
                            className="mt-0"
                            id="checkbox210" type="checkbox" onClick={() => CheckTable(0, checkedArr)}
                            checked={checkedArr[0]}
                            readOnly
                        />{' '}
                            <Label for="checkbox210" />
                        </div>
                    </th>
                    <th>&nbsp;</th>
                    <th>&nbsp;</th>
                </tr>
            </thead>
        </div>
        </Table>
    )
}

const TableBody = ({checkedArr, tableName}) => {
    return (
        <Table striped size="sm">
        <div className={`widget-table-overflow ${tableName}`}>
            <tbody>
                <tr>
                    <td>
                        <div className="checkbox abc-checkbox">
                            <Input
                                className="mt-0"
                                id="checkbox212" type="checkbox" onClick={() => CheckTable(1, checkedArr)}
                                checked={checkedArr[1]}
                                readOnly
                            />{' '}
                            <Label for="checkbox212" />
                        </div>
                    </td>
                    <td>HP Core i7</td>
                    <td className="text-align-right fw-semi-bold">$346.1</td>
                </tr>
                <tr>
                    <td>
                        <div className="checkbox abc-checkbox">
                            <Input
                                className="mt-0"
                                id="checkbox214" onClick={() => CheckTable(2, checkedArr)} type="checkbox"
                                checked={checkedArr[2]}
                                readOnly
                            />{' '}
                            <Label for="checkbox214" />
                        </div>
                    </td>
                    <td>Air Pro</td>
                    <td className="text-align-right fw-semi-bold">$533.1</td>
                </tr>
            </tbody>
        </div>
        </Table>
    )
}

const Earnings = ({table}) => {

    const [checkedArr, setCheckedArr] = useState([false, false, false])
    
    return (
        <div>
            <div className="widget-body">
                <h3>$720 Earned</h3>
                <p className="fs-mini text-muted mb mt-sm">
                  Target <span className="fw-semi-bold">$820</span> day earnings
                  is <span className="fw-semi-bold">96%</span> reached.
                </p>
            </div>
            {/* <div className={`widget-table-overflow ${table}`}> */}
                {/* <Table striped size="sm"> */}
                    <TableHead checkedArr={checkedArr} tableName={table} />
                    <TableBody checkedArr={checkedArr} tableName={table} />
                {/* </Table> */}
            {/* </div> */}

            <div className="widget-body mt-xlg chart-overflow-bottom" style={{ height: '100px' }}>
                <Rickshaw height={100} />
            </div>

        </div>
    )
}

export default Earnings;