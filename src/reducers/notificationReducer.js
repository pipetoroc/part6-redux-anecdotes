import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notification',
  initialState: 'Esta es una notificación',
  reducers: {
    showNotification(state, action) {
      return action.payload
    }
  }
})

export const { showNotification } = notificationSlice.actions
export default notificationSlice.reducer