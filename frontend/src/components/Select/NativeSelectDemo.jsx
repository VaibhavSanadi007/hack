import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

export default function NativeSelectDemo() {
  return (
    <Box sx={{ minWidth: 0 }} className="w-[30%] md:w-[20%] lg:w-[20%] xl:w-[10%] ">
      <FormControl fullWidth>
        <InputLabel
          variant="standard"
          htmlFor="uncontrolled-native"
          sx={{ color: "darkcyan", "&.Mui-focused": { color: "darkcyan" } }}
        >
          Filter
        </InputLabel>
        <NativeSelect
          defaultValue={10}
          inputProps={{
            name: "age",
            id: "uncontrolled-native",
          }}
          sx={{
            color: "gray",
            fontSize: "70%", 
          }}
        >
          <option value={10}>default</option>
          <option value={20}>under 5000</option>
          <option value={30}>under 7000</option>
          <option value={40}>under 10000</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
