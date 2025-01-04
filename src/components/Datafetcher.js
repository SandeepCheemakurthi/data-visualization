import React from 'react'
import './styles/data-fetcher.css';
import useFetchData from '../hooks/useFetchData';
import LoadingSpinner from './common/LoadingSpinner';
import ErrorMessage from './common/ErrorMessage';
import Barchart from './BarChart';

export default function Datafetcher() {
  const {data, error, loading} = useFetchData("https://django-dev.aakscience.com/candidate_test/fronted");
  console.log('datafetcher', data, error, loading);
  if(loading) return <LoadingSpinner />
  if(error) return <ErrorMessage message={error} />
  if(data && (data['labels'].length > 0 && data['values'].length > 0))  return <Barchart labels={data['labels']} values={data['values']} />
}
