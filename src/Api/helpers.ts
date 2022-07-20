export const apiUrl = 'http://localhost:8080'

export const header = {
  headers: { 
    'Content-Type': 'application/json',
    'authorization': localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') ?? '').token : ''
  }
}