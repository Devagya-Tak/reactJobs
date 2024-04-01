import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'

const JobPage = () => {

    const { id } = useParams();

    const [job, setJob] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchJob = async () => {
            try {
                const res = await fetch(`/api/jobs/${id}`);
                const data = await res.json();
                setJob(data);
            } catch (error) {
                console.log('Error fetching data ', error);
            } finally {
                setLoading(false);
            }
        }


        fetchJob();
    }
        , [])


        return loading ? <Spinner/> : (
            job ? <h1>{job.title}</h1> : <p>No job data available</p>
        )
}




export default JobPage