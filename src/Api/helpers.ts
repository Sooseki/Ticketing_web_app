export const apiUrl = 'http://localhost:8080'

export const header = {
  headers: { 
    'Content-Type': 'application/json',
    'authorization': JSON.parse(localStorage.getItem('user') ?? '').token
  }
}