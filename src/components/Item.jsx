import { Paper } from "@mui/material";
function Item({ item }) {
  return (
    <Paper>
      <img
        src={item.image}
        alt="..."
        style={{ width: "100%", height: "50vh" }}
      />
    </Paper>
  );
}
export default Item;
