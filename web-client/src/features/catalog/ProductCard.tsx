import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from '@mui/material';
import Product from '../../app/models/product';

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'secondary.main' }}>
            {product.name.charAt(0)}
          </Avatar>
        }
        title={product.name}
        titleTypographyProps={{
          sx: {
            fontWeight: 'bold',
            color: 'primary.main',
          },
        }}
      />
      <CardMedia
        component='img'
        image={product.pictureUrl}
        title={product.name}
        alt={product.name}
        sx={{
          height: '200',
          backgroundSize: 'cover',
          bgcolor: 'grey.300',
        }}
      />
      <CardContent>
        <Typography gutterBottom color='secondary' variant='h5'>
          ${(product.price / 100).toFixed(2)}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {product.brand} / {product.type}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Add to Cart</Button>
        <Button size='small'>View</Button>
      </CardActions>
    </Card>
  );
}
