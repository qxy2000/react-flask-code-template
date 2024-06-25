import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData, sendData } from '../../redux/actions/dataActions';
import './index.css';

const DataComponent = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.data);
    const status = useSelector((state) => state.status);
    const responseMessage = useSelector((state) => state.responseMessage);
    const [inputData, setInputData] = useState('');

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    const handleSendData = () => {
        dispatch(sendData({ message: inputData }));
    };

    return (
        <div className="data-component">
            {status === 'loading' && <p>Loading...</p>}
            {status === 'succeeded' && data && <div>{data.message}</div>}
            {status === 'failed' && <p>Error loading data</p>}

            <input
                type="text"
                value={inputData}
                onChange={(e) => setInputData(e.target.value)}
                placeholder="Enter data to send"
            />
            <button onClick={handleSendData}>Send Data</button>

            {responseMessage && <p>{responseMessage}</p>}
        </div>
    );
};

export default DataComponent;
