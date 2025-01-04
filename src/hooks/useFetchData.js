import axios from "axios";
import React, { useCallback, useEffect } from 'react'

export default function useFetchData(url) {
    const [data, setData] = React.useState({
        labels: [],
        values: []
    });
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            const response = await axios.get(url);
            console.log('response', response);
            const rawData = response.data[0]['2024'];
            const labels = [];
            const values = [];
            rawData.forEach(monthData => {
                Object.values(monthData).forEach(datesArray => {
                    datesArray.forEach(dataObjs => {
                        const [date, value] = Object.entries(dataObjs)[0];
                        labels.push(date.split(',')[0]);
                        values.push(value);
                    });
                });
            });
            console.log('labels, values', labels,values);
            setData({ labels, values });
        } catch (error) {
            setError("An error occurred while fetching data");
        } finally {
            setLoading(false);
        }
    },[url]);

    useEffect( () => {
        fetchData();
    }, [fetchData])
    return { data, error, loading };
}
