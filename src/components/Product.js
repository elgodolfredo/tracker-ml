import { Avatar, IconButton, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';

export const Product = (props) => {
  const { product } = props;
  return (
    <div className="product">
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
          primary={product.name}
        />
      </ListItem>
    </div>
  );
}