import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState([])
  // useEffect(() => {
  //  fetch('https://api.github.com/users/SUMAN918')
  //  .then(response => response.json())
  //  .then(data => {
  //     console.log(data);
  //     setData(data)
  //  })
  // }, [])

  return (
    <div className="flex justify-center items-center">
      <div className="text-center m-4 bg-gray-600 text-green-400 p-4 text-2xl flex justify-center items-center flex-col">
        GitHub Username: {data.name}
        <br/>
        GitHub Following: {data.following}
        <br/>
        Github Followers: {data.followers}
        <br/>
        Github Location: {data.location}
        <img className="pt-4" src={data.avatar_url} alt="Git picture" width={300} />
      </div>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/SUMAN918");
  return response.json();
};
