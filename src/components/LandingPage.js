import { useEffect, useState } from 'react'
import MediaCard from './MediaCard'
import SearchAppBar from './SearchAppBar'
import { Box, Grid } from '@mui/material'
import axios from 'axios'
import { useSnackbar } from 'notistack'

const LandingPage = () => {
    const [ads, setAds] = useState([]);
    const { enqueueSnackbar } = useSnackbar();
    const fetchAllAds = async (string) => {
        try {
            const { data } = await axios.get(`http://localhost:8082/api/search?search=${string}`);
            // console.log(data);
            setAds(data);
            if(!data.length){
                enqueueSnackbar("No results found for the search", {variant: "error"});
            }
        } catch (err) {
            enqueueSnackbar('Server Error', { variant: "error" });
        }
    }
    useEffect(() => {
        fetchAllAds("");
    }, []);
    return (
        <>
            <SearchAppBar fetchAllAds={fetchAllAds} />
            <Box sx={{width: "90%", margin: "auto", marginTop: "30px"}}>
                <Grid container spacing={3}>
                    {
                        ads.map(ad=>(<Grid item xs={12} sm={6} md={4} lg={3} key={ad._id}><MediaCard ad={ad}></MediaCard></Grid>))
                    }
                </Grid>
            </Box>
        </>
    )
}

export default LandingPage