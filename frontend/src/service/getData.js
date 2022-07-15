import { users, usersInfos } from "../data/users";


//Find URl of client with his ID
let id = parseInt(window.location.pathname.replace('/profile/', ''));
//const BASE_URL = "http://localhost:3000/user/" + id;



let mocked = true //switch beetween data mocked or API

  export async function fetchUsers() {
    if (mocked === true) {
      const data = !id ? users : users.filter(profil => profil.id === id)
      return data[0]
    }
    /*let response
    let data
    const url = `${BASE_URL}/${service}`;
    try {
      response = await fetch(url)
      data = await response.json()
      console.log('data API')
      return data.data.userInfos
    } catch (err) {
      console.log('Error', err)
    }*/
  }

  export async function fetchUsersInfo() {
    if (mocked === true) {
      const data = !id ? usersInfos : usersInfos.filter(profil => profil.id === id)
      return data[0]
    }
    /*let response
    let data
    const url = `${BASE_URL}/${service}`;
    try {
      response = await fetch(url)
      data = await response.json()
      console.log('data API')
      return data.data.userInfos
    } catch (err) {
      console.log('Error', err)
    }*/
  }