import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Box, Link } from '@mui/material';
import './style.css';
// ----------------------------------------------------------------------

interface Props {
  sx?: any;
  disabledLink?: boolean;
}

const Logo = ({ disabledLink = false, sx, ...other }: Props) => {

  // OR using local (public folder)
  // -------------------------------------------------------
  // const logo = (
  //   <Box
  //     component="img"
  //     src="/logo/logo_single.svg" => your path
  //     sx={{ width: 40, height: 40, cursor: 'pointer', ...sx }}
  //   />
  // );

  const logo = (
    <Box
      // ref={ref}
      component="div"
      sx={{
        width: 32,
        height: 32,
        display: 'inline-block',
        alignItems: 'center',
        ...sx,
      }}
      {...other}
    >
      <img src="/assets/images/logo192.png" height="28" width="28"></img>
    </Box>
  );

  // if (disabledLink) {
  //   return <>{logo}</>;
  // }

  return (
    // <Link className='logo' to="/dashboard/profile" component={RouterLink} sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
    <div className='logo'>
      {logo}
      <p className='logoTitle' style={{ marginLeft: '5px', fontSize: '20px', fontFamily: 'Roboto', fontStyle: 'italic', fontWeight: 'bold' }}>
        <span id='N'>N</span>
        <span id='o1'>o</span>
        <span id='S'>$</span>
        <span id='o2'>o</span>
        <span id='c'>c</span>
        <span id='i'>i</span>
        <span id='a'>a</span>
        <span id='l'>l</span>
      </p>
    </div>
  );
};

export default Logo;

