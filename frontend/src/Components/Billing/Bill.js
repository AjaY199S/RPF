import React from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import {
  FormControl,
  TextField,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import Wight from "./Weight";

function Bill() {
  const [values, setValues] = React.useState({
    billNo: "202007180001",
    name: "Ajay",
    mobileNo: "9009410700",
    place: "",
    rate: "",
    showRate: false,
    showAmount: false,
  });

  const handleClickShowRate = () => {
    setValues({ ...values, showRate: !values.showRate });
  };
  const handleClickShowAmount = () => {
    setValues({ ...values, showAmount: !values.showAmount });
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
  return (
    <div>
      <Container className="mt-3 mr-2 ml-2" fluid="true">
        <Row>
          <Col>
            <Breadcrumb>
              <Breadcrumb.Item href="#home">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="#coustumer">
                {true ? "New Coustumer" : "Old Coustumer"}
              </Breadcrumb.Item>
              <Breadcrumb.Item active>Coustumer Billing</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col lg={4} md={6} sm={12} className="center">
            <FormControl fullWidth={true}>
              <TextField
                margin="normal"
                id="billNo"
                label="Bill No."
                type="number"
                variant="outlined"
                value={values.billNo}
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                margin="normal"
                id="name"
                label="Name"
                type="name"
                variant="outlined"
                value={values.name}
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                margin="normal"
                id="mobileNo"
                label="Mobile No."
                type="number"
                variant="outlined"
                value={values.mobileNo}
                InputProps={{
                  readOnly: true,
                }}
              />

              <TextField
                margin="normal"
                id="rate"
                label="Billing Rate (In Rs.)"
                type={values.showRate ? "text" : "password"}
                variant="outlined"
                value={values.rate}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <IconButton onClick={handleClickShowRate} edge="end">
                        {values.showRate ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                  readOnly: true,
                }}
              />
              <TextField
                margin="normal"
                id="needyWeight"
                label="Total Need Weight (In Kg.) (Optional)"
                type="number"
                onChange={handleOnChange}
                variant="outlined"
              />
              <TextField
                margin="normal"
                id="totalWeight"
                label="Total Weight (In Kg.)"
                type="number"
                onChange={handleOnChange}
                variant="outlined"
              />
              <TextField
                margin="normal"
                id="totalAmount"
                label="Total Amount (In Rs.)"
                type={values.showAmount ? "text" : "password"}
                variant="outlined"
                value="21349999"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <IconButton onClick={handleClickShowAmount} edge="end">
                        {values.showAmount ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                  readOnly: true,
                }}
              />
            </FormControl>
          </Col>
        </Row>
        <Row>
          <Col>
            <hr />
            <hr />
          </Col>
        </Row>
        <Row sm={12}>
          <Wight></Wight>
        </Row>
      </Container>
    </div>
  );
}
export default Bill;
