import { Avatar, IconButton, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import '../css/Product.css';
import Utils from '../utils';

export const Product = (props) => {
  const { format_currency } = Utils;
  const { product } = props;
  return (
    <div className="product" onClick={props.onClick}>
      <ListItem
        secondaryAction={
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        }
      >
        <ListItemAvatar>
          <Avatar>
            <FolderIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={(<>
            <span>{product.name}</span> 
            <span className="green-text">  {format_currency(product.avg_price)}</span>
          </>)}
        />
      </ListItem>
    </div>
  );
}