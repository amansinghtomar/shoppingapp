import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function DefaultMenuItem({ quantity, handleUpdateItem, id }) {
   return (
      <FormControl sx={{ m: 1, width: "70px", margin: "0" }} size="small">
         <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={quantity}
            onChange={(event) => handleUpdateItem(event.target.value, id)}
            autoWidth
            sx={{ height: "30px" }}
         >
            <MenuItem value={10}>1</MenuItem>
            <MenuItem value={20}>2</MenuItem>
            <MenuItem value={30}>3</MenuItem>
         </Select>
      </FormControl>
   );
}

export default DefaultMenuItem;
