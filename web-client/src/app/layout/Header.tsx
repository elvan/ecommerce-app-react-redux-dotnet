import { AppBar, FormControlLabel, Toolbar, Typography } from '@mui/material';

export default function Header() {
  return (
    <AppBar position='static' sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant='h6'>Ecommerce</Typography>
      </Toolbar>
      <FormControlLabel
        control={<MaterialUISwitch sx={{ m: 1 }} />}
        label='MUI switch'
      />
    </AppBar>
  );
}
