import { users, usersInfos } from "../data/users";


//Find URl of client with his ID
let id = parseInt(window.location.pathname.replace('/profile/', ''));
const BASE_URL = "http://localhost:3001/api/v1/user";



let mocked = true //switch between data mocked or API

  export async function fetchUsers() {
    if (mocked === true) {
      const data = !id ? users : users.filter(profil => profil.id === id)
      return data[0]
    }
    let response
    let data
    try {
      response = await fetch(`${BASE_URL}/login`)
      data = await response.json()
      console.log('data API')
      return data
    } catch (err) {
      console.log('Error', err)
    }
  }

  export async function fetchUsersInfo() {
    if (mocked === true) {
      const data = !id ? usersInfos : usersInfos.filter(profil => profil.id === id)
      return data[0]
    }
    /*let response
    let data
    try {
      response = await fetch(BASE_URL)
      data = await response.json()
      console.log('data API')
      return data.data.userInfos
    } catch (err) {
      console.log('Error', err)
    }*/
  }

  export function login(email, password) {
    const loginOptions = {
      method: 'POST',
      headers: { 'content-type': 'application/json'},
      body: JSON.stringify({ email: email, password: password })
    }
    fetch(BASE_URL + '/login', loginOptions).then(function (response) {
      if (response.ok) {
        console.log("test")
      }
    })
  }