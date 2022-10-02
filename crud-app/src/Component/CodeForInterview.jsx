

import { Box, Typography, styled } from '@mui/material';

import crud from '../Assets/Images/crud.png';


const Header = styled(Box)`
    margin: 50px;
    & > div {
        margin-top: 50px;
    }
`;

const Image = styled('img')({
    width: '100%',
    height: '70%'
});

const CodeForInterview = () => {

    return (
        <Header>
            <Typography variant="h4">Code for Interview</Typography>
            <Box style={{display: 'flex'}}>
                <Image src={crud} />
                
            </Box>
        </Header>
    )
}

export default CodeForInterview;