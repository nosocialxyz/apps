import { Helmet } from 'react-helmet-async';
// @mui
import { Container, Divider, TextField } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
// components

import './style.css';
import BenefitProgress from 'src/components/benefit-progress';
// ----------------------------------------------------------------------
import { tasks1, tasks2 } from 'src/_mock/tasks';

export default function BenefitsPage() {

  return (
    <>
      <Helmet>
        <title> Benefits | NoSocial Apps </title>
      </Helmet>

      <Container maxWidth="xl" className='benefits_page'>
        <div className='filter'>
          <div className='filter_button'>Hide Filter</div>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Benefit Type</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="nft"
              name="radio-buttons-group"
            >
              <FormControlLabel value="nft" control={<Radio />} label="NFT" />
              <FormControlLabel value="token" control={<Radio />} label="Token" />
              <FormControlLabel value="membership" control={<Radio />} label="Membership" />
              <FormControlLabel value="others" control={<Radio />} label="Others" />
            </RadioGroup>
          </FormControl>

          <Divider className='divider' />

          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Eligibility Criteria</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="publications"
              name="radio-buttons-group"
            >
              <FormControlLabel value="publications" control={<Radio />} label="Publications" />
              <FormControlLabel value="followers" control={<Radio />} label="Followers" />
              <FormControlLabel value="activities" control={<Radio />} label="Activities" />
              <FormControlLabel value="others" control={<Radio />} label="Others" />
            </RadioGroup>
          </FormControl>

          <Divider className='divider' />

          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Status</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="active"
              name="radio-buttons-group"
            >
              <FormControlLabel value="active" control={<Radio />} label="Active" />
              <FormControlLabel value="notStarted" control={<Radio />} label="NotStarted" />
              <FormControlLabel value="expired" control={<Radio />} label="Expired" />
            </RadioGroup>
          </FormControl>
          
        </div>
        <div>
          <div className='benefits_list'>
            <div>    
              <TextField
                id="standard-read-only-input"
                defaultValue="In Progress"
                InputProps={{
                  readOnly: true,
                }}
                variant="standard"
                sx={ {
                  marginBottom: 2
                }}
              />
            </div>
            <BenefitProgress 
              tasks={tasks2} 
              progress={0.3}
              name={'MATIC'}
              author={'NoSocial'}
              amount={70}
              icon={'/assets/images/3.svg'}
            />
            <BenefitProgress 
              tasks={tasks1} 
              progress={0.5}
              name={'ETHER'}
              author={'Lenster'}
              amount={1.3}
              icon={'/assets/images/eth.svg'}
              color='#FFFFFF'
              fontColor='#000000'
            />
            <BenefitProgress 
              progress={0}
              name={'MATIC'}
              author={'NoSocial'}
              amount={70}
              icon={'/assets/images/5.svg'}
            />
            <BenefitProgress 
              progress={1}
              name={'MATIC'}
              author={'NoSocial'}
              amount={70}
              icon={'/assets/images/6.svg'}
            />
          </div>
          <div className='benefits_list'>
            <div>    
              <TextField
                id="standard-read-only-input"
                defaultValue="Explore Benefits"
                InputProps={{
                  readOnly: true,
                }}
                variant="standard"
                sx={ {
                  marginBottom: 2
                }}
              />
            </div>
            <BenefitProgress 
              progress={0}
              name={'MATIC'}
              author={'NoSocial'}
              amount={70}
              icon={'/assets/images/7.svg'}
            />
            <BenefitProgress 
              progress={0}
              name={'MATIC'}
              author={'NoSocial'}
              amount={70}
              icon={'/assets/images/polygon.svg'}
              fontColor={'#000000'}
            />
          </div>
        </div>
      </Container>
    </>
  );
}
