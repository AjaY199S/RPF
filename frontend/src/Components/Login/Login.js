import React from "react";
import {
  Typography,
  FormControl,
  TextField,
  InputAdornment,
  IconButton,
  Button,
} from "@material-ui/core";
import { Container, Row, Col } from "react-bootstrap";
import { Visibility, VisibilityOff } from "@material-ui/icons";

import LoginService from "./LoginService";
// import Respo from "../../Contants/Respo";
import {
  mobileNoValidation,
  passwordValidation,
} from "../../Contants/Validation";

function Login() {
  const [values, setValues] = React.useState({
    mobileNo: "",
    password: "",
    showPassword: false,
    buttonActive: false,
  });

  const [errors, setErrors] = React.useState({
    feildName: "",
    action: false,
    msg: "",
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleOnChange = (event) => {
    if (event.target.id === "mobileNo") {
      mobileNoValidation(event.target.value).then((res) => {
        setErrors({
          feildName: "mobileNo",
          action: res.Error,
          msg: res.msg,
        });
      });
      setValues({ ...values, mobileNo: event.target.value });
    } else if (event.target.id === "password") {
      passwordValidation(event.target.value).then((res) => {
        setErrors({
          feildName: "password",
          action: res.Error,
          msg: res.msg,
        });
      });
      setValues({ ...values, password: event.target.value });
    }
  };

  const handleSubmit = (e) => {
    try {
      mobileNoValidation(values.mobileNo).then((mres) => {
        passwordValidation(values.password).then((pres) => {
          if (!mres.Error && !pres.Error) {
            let userData = {
              mobileNo: values.mobileNo,
              password: values.password,
            };
            LoginService(userData);
          } else {
            setErrors({
              feildName: "mobileNo",
              action: mres.Error,
              msg: mres.msg,
            });
            setErrors({
              feildName: "password",
              action: pres.Error,
              msg: pres.msg,
            });
          }
        });
      });
      console.log("Login Info", values);
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <div>
      <Container>
        <Row>
          <Col lg={4} md={3}></Col>
          <Col lg={4} md={6} className=" center mt-5 mb-5">
            <Typography variant="h4" align="center" color="textSecondary">
              Welcome to RPF
            </Typography>
          </Col>
          <Col lg={4} md={3}></Col>
        </Row>
        <Row>
          <Col lg={4} md={3}></Col>
          <Col lg={4} md={6} className="center">
            <FormControl fullWidth={true}>
              <TextField
                margin="normal"
                id="mobileNo"
                label="Mobile No."
                type="number"
                variant="outlined"
                onChange={handleOnChange}
                error={errors.feildName === "mobileNo" ? errors.action : false}
                helperText={errors.feildName === "mobileNo" ? errors.msg : ""}
                required
              />
              <TextField
                margin="normal"
                id="password"
                label="Password"
                type={values.showPassword ? "text" : "password"}
                onChange={handleOnChange}
                error={errors.feildName === "password" ? errors.action : false}
                helperText={errors.feildName === "password" ? errors.msg : ""}
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <IconButton onClick={handleClickShowPassword} edge="end">
                        {values.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
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
                className="mt-3 "
                size="large"
                // disabled={errors.action}
                onClick={handleSubmit}
              >
                Log In
              </Button>
            </FormControl>
          </Col>
          <Col lg={4} md={3}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
