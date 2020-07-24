export function mobileNoValidation(value) {
  try {
    if (value === "") {
      return new Promise((resolve, reject) => {
        resolve({
          Error: true,
          msg: " ***Field is requird. ",
        });
      });
    } else if (value.length < 10 || value.length > 10) {
      return new Promise((resolve, reject) => {
        resolve({
          Error: true,
          msg: " Only 10 digits are allow. ",
        });
      });
    }
    return new Promise((resolve, reject) => {
      resolve({
        Error: false,
        msg: "",
      });
    });
  } catch (ex) {
    console.log("Exception Error : ", ex);
  }
}

export function passwordValidation(value) {
  try {
    if (value === "") {
      return new Promise((resolve, reject) => {
        resolve({
          Error: true,
          msg: " ***Field is requird. ",
        });
      });
    } else if (value.length < 8 || value.length > 20) {
      return new Promise((resolve, reject) => {
        resolve({
          Error: true,
          msg: " Password must be 8 characters long! ( max 20) ",
        });
      });
    }
    return new Promise((resolve, reject) => {
      resolve({
        Error: false,
        msg: "",
      });
    });
  } catch (ex) {
    console.log("Exception Error : ", ex);
  }
}
