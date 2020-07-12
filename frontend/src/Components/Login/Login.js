import React from "react";
import {
  Container,
  Typography,
  FormControl,
  TextField,
  InputAdornment,
  IconButton,
  Button,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import LoginService from "./LoginService";
import Respo from "../../Contants/Respo";

function Login() {
  const [values, setValues] = React.useState({
    mobileNo: "",
    password: "",
    showPassword: false,
  });

  const [errors, setErrors] = React.useState({
    action: false,
    msg: "",
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleOnChange = (event) => {
    if (event.target.id === "mobileNo") {
      if (event.target.value.length === 10) {
        setValues({ ...values, mobileNo: event.target.value });
      }
    } else if (event.target.id === "password") {
      setValues({ ...values, password: event.target.value });
    }
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (e) => {
    try {
      if (values.mobileNo !== "" && values.password !== "") {
        setErrors({ ...errors, action: !errors.action });
        console.log("login Info", values);
        console.log("Respo msg", Respo.WORNG_MOBILE_AND_PASSWORD);

        LoginService(values);
      } else {
        setErrors({
          action: !errors.action,
          msg: "Please fill mobile no and password.",
        });
        console.log(
          "Please fill mobile no and password.",
          values.mobileNo !== ""
        );
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <div>
      <Container maxWidth="sm">
        <Typography variant="h4" align="center" color="textSecondary">
          Welcome to RPF
        </Typography>
        <FormControl>
          {errors.action ? (
            <div className="alert alert-danger">
              <strong>Warning!</strong> {errors.msg}
            </div>
          ) : (
            ""
          )}

          <TextField
            margin="normal"
            id="mobileNo"
            label="Mobile No."
            type="number"
            variant="outlined"
            onChange={handleOnChange}
            required
          />
          <TextField
            margin="normal"
            id="password"
            label="Password"
            type={values.showPassword ? "text" : "password"}
            onChange={handleOnChange}
            autoComplete="current-password"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            required
          />

          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={handleSubmit}
          >
            Log In
          </Button>
        </FormControl>
      </Container>
    </div>
  );
}

export default Login;
