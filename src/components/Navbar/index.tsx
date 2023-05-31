import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Tooltip,
} from "@mui/material";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { ButtonMUI, Container, Time, UseImage, User, UserTitle } from "./style";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import { Plus } from "./style";
import NoPhoto from "../../assets/imgs/no-photo.jpeg";

export const Navbar = ({ open }: { open: boolean }) => {
  const [lang, setLang] = useState("O'zbek");
  const [plus, setPlus] = useState(false);

  // const [date] = useState(new Date());

  const moment = (key: string) => {
    let date = new Date();
    let time = {
      ll: `${date.getHours() < 10 ? "0" + date.getHours() : date.getHours()}:${
        date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
      }  `,
    };
    if (key === "ll") return time[key];
  };

  const handleChange = (event: SelectChangeEvent) => {
    setLang(event.target.value);
  };
  const handlePlus = () => {
    setPlus(!plus);
  };
  return (
    <Container>
      {!open && (
        <Tooltip
          arrow
          onClick={handlePlus}
          open={plus}
          disableFocusListener
          disableHoverListener
          title={
            <>
              <h1>test</h1>
            </>
          }
          placement="bottom"
        >
          <Plus />
        </Tooltip>
      )}
      {/* Search input */}
      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="outlined-adornment-amount">Qidiruv</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          placeholder="Search"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
          label="Amount"
          size="small"
        />
      </FormControl>

      <Time>
        {moment("ll")}{" "}
        <span style={{ color: "#BBC3CD", paddingLeft: "5px" }}> PM</span>
      </Time>

      {/* Language */}

      <FormControl sx={{ m: 1, minWidth: 120, width: 120 }}>
        <InputLabel>Select</InputLabel>
        <Select
          value={lang}
          onChange={handleChange}
          autoWidth
          label="Select"
          size="small"
        >
          <MenuItem sx={{ width: 120 }} value="O'zbek">
            <ButtonMUI>O'zbek</ButtonMUI>
          </MenuItem>
          <MenuItem sx={{ width: 120, paddingLeft: 10 }} value="English">
            <ButtonMUI>English</ButtonMUI>
          </MenuItem>
          <MenuItem sx={{ width: 120, paddingLeft: 10 }} value="Russian">
            <ButtonMUI>Russian</ButtonMUI>
          </MenuItem>
        </Select>
      </FormControl>
      <User>
        <UserTitle>Webbrain Academy</UserTitle>
        <UseImage src={NoPhoto} alt="no photo" />
      </User>
    </Container>
  );
};

export default Navbar;
