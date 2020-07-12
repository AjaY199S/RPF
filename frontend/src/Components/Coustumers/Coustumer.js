import React from "react";
import {
  FormControl,
  TextField,
  InputAdornment,
  IconButton,
  Button,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";

function Coustumer() {
  const [values, setValues] = React.useState({
    name: "",
    mobileNo: "",
    place: "",
    rate: "",
    showRate: false,
  });

  const handleClickShowRate = () => {
    setValues({ ...values, showRate: !values.showRate });
  };

  const handleMouseDownRate = (event) => {
    event.preventDefault();
  };
  const handleOnChange = (event) => {
    switch (event.target.id) {
      case "name":
        setValues({ ...values, name: event.target.value });

        break;
      case "mobileNo":
        setValues({ ...values, mobileNo: event.target.value });

        break;
      case "place":
        setValues({ ...values, place: event.target.value });

        break;
      case "rate":
        setValues({ ...values, rate: event.target.value });

        break;
      default:
        break;
    }
  };
  const handleSubmit = (e) => {
    try {
      console.log("Modal Value", values);
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <div>
      <Container className="mt-3">
        <Row>
          <Col>
            <Breadcrumb>
              <Breadcrumb.Item href="#home">Home</Breadcrumb.Item>
              <Breadcrumb.Item active>
                {true ? "New Coustumer" : "Old Coustumer"}
              </Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col lg={4} md={6} sm={12} className="center">
            <FormControl fullWidth={true}>
              <TextField
                margin="normal"
                id="name"
                label="Name"
                type="name"
                variant="outlined"
                onChange={handleOnChange}
                required
              />
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
                id="place"
                label="Place (City / Village)"
                type="address"
                variant="outlined"
                onChange={handleOnChange}
                required
              />
              <TextField
                margin="normal"
                id="rate"
                label="Billing Rate (In Rs.)"
                type={values.showRate ? "text" : "password"}
                onChange={handleOnChange}
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <IconButton
                        onClick={handleClickShowRate}
                        onMouseDown={handleMouseDownRate}
                        edge="end"
                      >
                        {values.showRate ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                required
              />

              <Button
                className="mt-3"
                variant="contained"
                color="primary"
                type="submit"
                size="large"
                onClick={handleSubmit}
              >
                Submit
              </Button>
              <Button
                className="mt-3"
                variant="contained"
                color="secondary"
                type="reset"
                size="large"
              >
                Cancel
              </Button>
            </FormControl>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Coustumer;
