import React from "react";
import axios from "axios";

// testing

const BaseURL = process.env.REACT_APP_API_KEY;

// prod
// const BaseURL = '';

const token = localStorage.getItem("token");

const postData = async (url, body) => {
  let token = localStorage.getItem("token");
  
  const response = await fetch(`${BaseURL}/${url}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },

    body: JSON.stringify(body),
  });
  try {
    const result1 = await response.json();
    console.log(result1);
    return result1;
  } catch (e) {
    console.error(e);
  }
};

//formdata
const postformdata = async (url, body) => {
  const token = localStorage.getItem("token");
  console.log("tytyty", typeof token);
  console.log("BaseURLBaseURL", BaseURL);
  console.log("urlurlurl", url);
   const res= await axios
    .post(`${BaseURL}/${url}`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "multipart/form-data",
      },
    })
    .then((res) => {
      //console.log(res.data, "bhjijhb");
      return res.data;
    })
    .catch((error) => {
      console.error(error);
    });
    return res
};

const getData = async (url, value) => {
  const response = await fetch(`${BaseURL}/${url}`, {
    method: "GET",
    // mode: 'cors',

    headers: {
      Authorization: localStorage.getItem("token"),
      "Content-Type": "application/json",
    },
  });

  try {
    const result2 = await response.json();
    return result2;
  } catch (e) {}
};

export { postData, getData, postformdata };
