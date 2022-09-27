import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function DefaultMenuItem({ quantity }) {
   const [age, setAge] = React.useState("10");

   const handleChange = (event) => {
      setAge(event.target.value);
   };
   return (
      <FormControl sx={{ m: 1, width: "70px", margin: "0" }} size="small">
         <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={quantity}
            onChange={handleChange}
            autoWidth
            sx={{ height: "30px" }}
         >
            <MenuItem value={10}>1</MenuItem>
            <MenuItem value={21}>2</MenuItem>
            <MenuItem value={22}>3</MenuItem>
         </Select>
      </FormControl>
   );
}

export default DefaultMenuItem;
